// Made by Namish Kumar in April 2024
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})
app.post("/chooseLevel",(req, res) => {
  const body = req.body;
  const name = body.name;
  console.log(`NGG:- ${name} has started playing the game!`);
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>NumberGuessingGame | A small yet funny game (Made by Namish Kumar)</title>
      <style>
          html {
          width: 100%;
          height: 100%;
          display: table;
      }
  
      body {
          width: 100%;
          height: 100%;
          display: table-cell;
          vertical-align: middle;
          text-align: center;
          font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: rgb(37, 37, 37);
          color: white;
      }
  
      input {
          padding: 15px;
          outline: none;
          border: none;
          font-size: 17px;
          font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          border-radius: 360px;
          width: 15.85em;
      }
  
      button {
          padding: 15px;
          font-size: 16px;
          width: 13em;
          border-radius: 360px;
          border: none;
          outline: none;
          color: white;
          font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background-color: rgb(0, 0, 0);
      }
      </style>
  </head>
  <body>
      <h1>NumberGuessingGame</h1>
      <p>Welcome to NumberGuessingGame <b>${name}</b>! Please choose a level to continue with!</p>
      <form method="post" action="/level1_chance1">
       <input name="name" value=${name} hidden>
       <button type="submit">Level 1</button>
      </form>
      <br>
      <br>
      <form method="post" action="/level2_chance1">
      <input name="name" value="${name}" hidden>
      <button type="submit">Level 2</button>
      </form>
      <br>
      <br>
      <form method="post" action="/level3_chance1">
      <input name="name" value="${name}" hidden>
      <button type="submit">Level 3</button>
      </form>
  </body>
  </html>
  `);
});


app.post("/level1_chance1", (req, res) => {
  let x = Math.floor((Math.random() * 50) + 1);
  const fix_num = String(x).toString();
  const body = req.body;
  const name = body.name;
  console.log(`NGG:- ${name} has chosen Level 1 (Number between 1 and 50! It is their first (1st chance)`);
  console.log(`NGG:- Number ${fix_num} has been chosen for ${name}! Wish them a good luck!`);
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>NumberGuessingGame | A small yet funny game (Made by Namish Kumar)</title>
      <style>
          html {
          width: 100%;
          height: 100%;
          display: table;
      }
  
      body {
          width: 100%;
          height: 100%;
          display: table-cell;
          vertical-align: middle;
          text-align: center;
          font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: rgb(37, 37, 37);
          color: white;
      }
  
      input {
          padding: 15px;
          outline: none;
          border: none;
          font-size: 17px;
          font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          border-radius: 360px;
          width: 15.85em;
      }
  
      button {
          padding: 15px;
          font-size: 16px;
          width: 13em;
          border-radius: 360px;
          border: none;
          outline: none;
          color: white;
          font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background-color: rgb(0, 0, 0);
      }
      </style>
  </head>
  <body>
      <h1>NumberGuessingGame</h1>
      <p>Alright ${name}! I have chosen a number between 1 and 50. Guess it within <b>5 attempts!</b></p>
      <form method="post" action="/check_level1">
          <input name="name" value="${name}" hidden>
          <input name="chances_left" value="5" hidden> 
          <input name="actual_number" value="${fix_num}" hidden>
          <input name="number" type="number" placeholder="Enter the number" required>
          <br>
          <br>
          <button type="submit">Next</button>
      </form>
      <p>Number of attempts left:-</p>
     <div>
        <div style=" text-align:center;" id="wowDiv">       
         <h2 style="border:white 2px solid; border-radius:360px;">5</h2>
      </div>
     </div>
  </body>
  </html>
  `);
});

app.post("/check_level1", (req, res) => {
  const body = req.body;
  const name = body.name;
  const number = body.number;
  const actual_number = body.actual_number;
  const chances_left = body.chances_left;
  if(Number(String(number)) === Number(String(actual_number))) {
     // Equals
     console.log(`NGG: ${name} successfully guessed the right number in their ${returnOrdinalLevel1(chances_left)} attempt! Congractulations!`);
     res.end(`
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>NumberGuessingGame | A small yet funny game (Made by Namish Kumar)</title>
         <style>
             html {
             width: 100%;
             height: 100%;
             display: table;
         }
     
         body {
             width: 100%;
             height: 100%;
             display: table-cell;
             vertical-align: middle;
             text-align: center;
             font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
             background-color: rgb(37, 37, 37);
             color: white;
         }
     
         input {
             padding: 15px;
             outline: none;
             border: none;
             font-size: 17px;
             font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
             border-radius: 360px;
             width: 15.85em;
         }
     
         button {
             padding: 15px;
             font-size: 16px;
             width: 13em;
             border-radius: 360px;
             border: none;
             outline: none;
             color: white;
             font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
             background-color: rgb(0, 0, 0);
         }
         .showNum {
            border: white 2.5px solid;
            padding:10px;
            border-radius:360px;
            font-weight:bold;
            font-size:27px;
         }
         </style>
     </head>
     <body>
         <h1>NumberGuessingGame</h1>
         <p>Congratulations ${name}! You guessed the right number in your ${returnOrdinalLevel1(chances_left)} attempt! My choosen number was:- </p>
         <p class="showNum">
         ${String(actual_number)}
         </p>
         <form method="post" action="/chooseLevel">
         <input name="name" value="${name}" hidden>
         <br>
         <br>
         <button type="submit">Play again</button>
     </form>
     </body>
     </html>
     `);
  }else if(Number(String(number)) > Number(String(actual_number))) {
     // Greater than mine
    let chances_left_new = (Number(chances_left) - 1);
    console.log(`NGG: Oops! ${name}'s number(${String(number)}) is greater than the actual number (${String(actual_number)}). Only ${String(chances_left_new)} chances left for him.`);
    if(chances_left_new === 0) {
        res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>NumberGuessingGame | A small yet funny game (Made by Namish Kumar)</title>
            <style>
                html {
                width: 100%;
                height: 100%;
                display: table;
            }
        
            body {
                width: 100%;
                height: 100%;
                display: table-cell;
                vertical-align: middle;
                text-align: center;
                font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: rgb(37, 37, 37);
                color: white;
            }
        
            input {
                padding: 15px;
                outline: none;
                border: none;
                font-size: 17px;
                font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                border-radius: 360px;
                width: 15.85em;
            }
        
            button {
                padding: 15px;
                font-size: 16px;
                width: 13em;
                border-radius: 360px;
                border: none;
                outline: none;
                color: white;
                font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                background-color: rgb(0, 0, 0);
            }
            .showNum {
               border: white 2.5px solid;
               padding:10px;
               border-radius:360px;
               font-weight:bold;
               font-size:27px;
            }
            </style>
        </head>
        <body>
            <h1>NumberGuessingGame</h1>
            <p>Sorry! You were not able to guess the number! My chosen number was:-</p>
            <p class="showNum">
            ${String(actual_number)}
            </p>
            <form method="post" action="/chooseLevel">
        <input name="name" value="${name}" hidden>
        <br>
        <br>
        <button type="submit">Try again</button>
    </form>
        </body>
        </html>
        `);
    }else{
        res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>NumberGuessingGame | A small yet funny game (Made by Namish Kumar)</title>
            <style>
                html {
                width: 100%;
                height: 100%;
                display: table;
            }
        
            body {
                width: 100%;
                height: 100%;
                display: table-cell;
                vertical-align: middle;
                text-align: center;
                font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: rgb(37, 37, 37);
                color: white;
            }
        
            input {
                padding: 15px;
                outline: none;
                border: none;
                font-size: 17px;
                font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                border-radius: 360px;
                width: 15.85em;
            }
        
            button {
                padding: 15px;
                font-size: 16px;
                width: 13em;
                border-radius: 360px;
                border: none;
                outline: none;
                color: white;
                font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                background-color: rgb(0, 0, 0);
            }
            </style>
        </head>
        <body>
            <h1>NumberGuessingGame</h1>
            <p>Oops! Your number is greater than my chosen number! Please guess it within ${String(chances_left_new)} attempts!</p>
            <form method="post" action="/check_level1">
                <input name="name" value="${name}" hidden>
                <input name="chances_left" value="${String(chances_left_new)}" hidden> 
                <input name="actual_number" value="${String(actual_number)}" hidden>
                <input name="number" type="number" placeholder="Enter the number" required>
                <br>
                <br>
                <button type="submit">Next</button>
            </form>
            <p>Number of attempts left:-</p>
           <div>
              <div style=" text-align:center;" id="wowDiv">       
               <h2 style="border:white 2px solid; border-radius:360px;">${String(chances_left_new)}</h2>
            </div>
           </div>
        </body>
        </html>
        `);
    }
  }else if(Number(String(number)) < Number(String(actual_number))) {
     // Smaller than mine
     let chances_left_new = (Number(chances_left) - 1);
    console.log(`NGG: Oops! ${name}'s number(${String(number)}) is lesser than the actual number (${String(actual_number)}). Only ${String(chances_left_new)} chances left for him.`);
    if(chances_left_new === 0) {
        res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>NumberGuessingGame | A small yet funny game (Made by Namish Kumar)</title>
            <style>
                html {
                width: 100%;
                height: 100%;
                display: table;
            }
        
            body {
                width: 100%;
                height: 100%;
                display: table-cell;
                vertical-align: middle;
                text-align: center;
                font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: rgb(37, 37, 37);
                color: white;
            }
        
            input {
                padding: 15px;
                outline: none;
                border: none;
                font-size: 17px;
                font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                border-radius: 360px;
                width: 15.85em;
            }
        
            button {
                padding: 15px;
                font-size: 16px;
                width: 13em;
                border-radius: 360px;
                border: none;
                outline: none;
                color: white;
                font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                background-color: rgb(0, 0, 0);
            }
            .showNum {
               border: white 2.5px solid;
               padding:10px;
               border-radius:360px;
               font-weight:bold;
               font-size:27px;
            }
            </style>
        </head>
        <body>
            <h1>NumberGuessingGame</h1>
            <p>Sorry! You were not able to guess the number! My chosen number was:-</p>
            <p class="showNum">
            ${String(actual_number)}
            </p>
            <form method="post" action="/chooseLevel">
        <input name="name" value="${name}" hidden>
        <br>
        <br>
        <button type="submit">Try again</button>
    </form>
        </body>
        </html>
        `);
    }else{
        res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>NumberGuessingGame | A small yet funny game (Made by Namish Kumar)</title>
            <style>
                html {
                width: 100%;
                height: 100%;
                display: table;
            }
        
            body {
                width: 100%;
                height: 100%;
                display: table-cell;
                vertical-align: middle;
                text-align: center;
                font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: rgb(37, 37, 37);
                color: white;
            }
        
            input {
                padding: 15px;
                outline: none;
                border: none;
                font-size: 17px;
                font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                border-radius: 360px;
                width: 15.85em;
            }
        
            button {
                padding: 15px;
                font-size: 16px;
                width: 13em;
                border-radius: 360px;
                border: none;
                outline: none;
                color: white;
                font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                background-color: rgb(0, 0, 0);
            }
            </style>
        </head>
        <body>
            <h1>NumberGuessingGame</h1>
            <p>Oops! Your number is lesser than my chosen number! Please guess it within ${String(chances_left_new)} attempts!</p>
            <form method="post" action="/check_level1">
                <input name="name" value="${name}" hidden>
                <input name="chances_left" value="${String(chances_left_new)}" hidden> 
                <input name="actual_number" value="${String(actual_number)}" hidden>
                <input name="number" type="number" placeholder="Enter the number" required>
                <br>
                <br>
                <button type="submit">Next</button>
            </form>
            <p>Number of attempts left:-</p>
           <div>
              <div style=" text-align:center;" id="wowDiv">       
               <h2 style="border:white 2px solid; border-radius:360px;">${String(chances_left_new)}</h2>
            </div>
           </div>
        </body>
        </html>
        `);
    }
  }
})

app.post("/level2_chance1", (req, res) => {
    let x = Math.floor((Math.random() * 100) + 1);
    const fix_num = String(x).toString();
    const body = req.body;
    const name = body.name;
    console.log(`NGG:- ${name} has chosen Level 2 (Number between 1 and 100! It is their first (1st chance)`);
    console.log(`NGG:- Number ${fix_num} has been chosen for ${name}! Wish them a good luck!`);
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>NumberGuessingGame | A small yet funny game (Made by Namish Kumar)</title>
        <style>
            html {
            width: 100%;
            height: 100%;
            display: table;
        }
    
        body {
            width: 100%;
            height: 100%;
            display: table-cell;
            vertical-align: middle;
            text-align: center;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: rgb(37, 37, 37);
            color: white;
        }
    
        input {
            padding: 15px;
            outline: none;
            border: none;
            font-size: 17px;
            font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            border-radius: 360px;
            width: 15.85em;
        }
    
        button {
            padding: 15px;
            font-size: 16px;
            width: 13em;
            border-radius: 360px;
            border: none;
            outline: none;
            color: white;
            font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: rgb(0, 0, 0);
        }
        </style>
    </head>
    <body>
        <h1>NumberGuessingGame</h1>
        <p>Alright ${name}! I have chosen a number between 1 and 100. Guess it within <b>10 attempts!</b></p>
        <form method="post" action="/check_level2">
            <input name="name" value="${name}" hidden>
            <input name="chances_left" value="10" hidden> 
            <input name="actual_number" value="${fix_num}" hidden>
            <input name="number" type="number" placeholder="Enter the number" required>
            <br>
            <br>
            <button type="submit">Next</button>
        </form>
        <p>Number of attempts left:-</p>
       <div>
          <div style=" text-align:center;" id="wowDiv">       
           <h2 style="border:white 2px solid; border-radius:360px;">10</h2>
        </div>
       </div>
    </body>
    </html>
    `);
});

app.post("/check_level2", (req, res) => {
    const body = req.body;
    const name = body.name;
    const number = body.number;
    const actual_number = body.actual_number;
    const chances_left = body.chances_left;
    if(Number(String(number)) === Number(String(actual_number))) {
       // Equals
       console.log(`NGG: ${name} successfully guessed the right number (${String(number)}) in their ${returnOrdinalLevel2(chances_left)} attempt! Congractulations!`);
       res.end(`
       <!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>NumberGuessingGame | A small yet funny game (Made by Namish Kumar)</title>
           <style>
               html {
               width: 100%;
               height: 100%;
               display: table;
           }
       
           body {
               width: 100%;
               height: 100%;
               display: table-cell;
               vertical-align: middle;
               text-align: center;
               font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
               background-color: rgb(37, 37, 37);
               color: white;
           }
       
           input {
               padding: 15px;
               outline: none;
               border: none;
               font-size: 17px;
               font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
               border-radius: 360px;
               width: 15.85em;
           }
       
           button {
               padding: 15px;
               font-size: 16px;
               width: 13em;
               border-radius: 360px;
               border: none;
               outline: none;
               color: white;
               font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
               background-color: rgb(0, 0, 0);
           }
           .showNum {
              border: white 2.5px solid;
              padding:10px;
              border-radius:360px;
              font-weight:bold;
              font-size:27px;
           }
           </style>
       </head>
       <body>
           <h1>NumberGuessingGame</h1>
           <p>Congratulations ${name}! You guessed the right number in your ${returnOrdinalLevel2(chances_left)} attempt! My choosen number was:- </p>
           <p class="showNum">
           ${String(actual_number)}
           </p>
           <form method="post" action="/chooseLevel">
           <input name="name" value="${name}" hidden>
           <br>
           <br>
           <button type="submit">Play again</button>
       </form>
       </body>
       </html>
       `);
    }else if(Number(String(number)) > Number(String(actual_number))) {
       // Greater than mine
      let chances_left_new = (Number(chances_left) - 1);
      console.log(`NGG: Oops! ${name}'s number(${String(number)}) is greater than the actual number (${String(actual_number)}). Only ${String(chances_left_new)} chances left for him.`);
      if(chances_left_new === 0) {
          res.end(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>NumberGuessingGame | A small yet funny game (Made by Namish Kumar)</title>
              <style>
                  html {
                  width: 100%;
                  height: 100%;
                  display: table;
              }
          
              body {
                  width: 100%;
                  height: 100%;
                  display: table-cell;
                  vertical-align: middle;
                  text-align: center;
                  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  background-color: rgb(37, 37, 37);
                  color: white;
              }
          
              input {
                  padding: 15px;
                  outline: none;
                  border: none;
                  font-size: 17px;
                  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                  border-radius: 360px;
                  width: 15.85em;
              }
          
              button {
                  padding: 15px;
                  font-size: 16px;
                  width: 13em;
                  border-radius: 360px;
                  border: none;
                  outline: none;
                  color: white;
                  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  background-color: rgb(0, 0, 0);
              }
              .showNum {
                 border: white 2.5px solid;
                 padding:10px;
                 border-radius:360px;
                 font-weight:bold;
                 font-size:27px;
              }
              </style>
          </head>
          <body>
              <h1>NumberGuessingGame</h1>
              <p>Sorry! You were not able to guess the number! My chosen number was:-</p>
              <p class="showNum">
              ${String(actual_number)}
              </p>
              <form method="post" action="/chooseLevel">
          <input name="name" value="${name}" hidden>
          <br>
          <br>
          <button type="submit">Try again</button>
      </form>
          </body>
          </html>
          `);
      }else{
          res.end(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>NumberGuessingGame | A small yet funny game (Made by Namish Kumar)</title>
              <style>
                  html {
                  width: 100%;
                  height: 100%;
                  display: table;
              }
          
              body {
                  width: 100%;
                  height: 100%;
                  display: table-cell;
                  vertical-align: middle;
                  text-align: center;
                  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  background-color: rgb(37, 37, 37);
                  color: white;
              }
          
              input {
                  padding: 15px;
                  outline: none;
                  border: none;
                  font-size: 17px;
                  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                  border-radius: 360px;
                  width: 15.85em;
              }
          
              button {
                  padding: 15px;
                  font-size: 16px;
                  width: 13em;
                  border-radius: 360px;
                  border: none;
                  outline: none;
                  color: white;
                  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  background-color: rgb(0, 0, 0);
              }
              </style>
          </head>
          <body>
              <h1>NumberGuessingGame</h1>
              <p>Oops! Your number is greater than my chosen number! Please guess it within ${String(chances_left_new)} attempts!</p>
              <form method="post" action="/check_level1">
                  <input name="name" value="${name}" hidden>
                  <input name="chances_left" value="${String(chances_left_new)}" hidden> 
                  <input name="actual_number" value="${String(actual_number)}" hidden>
                  <input name="number" type="number" placeholder="Enter the number" required>
                  <br>
                  <br>
                  <button type="submit">Next</button>
              </form>
              <p>Number of attempts left:-</p>
             <div>
                <div style=" text-align:center;" id="wowDiv">       
                 <h2 style="border:white 2px solid; border-radius:360px;">${String(chances_left_new)}</h2>
              </div>
             </div>
          </body>
          </html>
          `);
      }
    }else if(Number(String(number)) < Number(String(actual_number))) {
       // Smaller than mine
       let chances_left_new = (Number(chances_left) - 1);
      console.log(`NGG: Oops! ${name}'s number (${String(number)}) is lesser than the actual number (${String(actual_number)}). Only ${String(chances_left_new)} chances left for him.`);
      if(chances_left_new === 0) {
          res.end(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>NumberGuessingGame | A small yet funny game (Made by Namish Kumar)</title>
              <style>
                  html {
                  width: 100%;
                  height: 100%;
                  display: table;
              }
          
              body {
                  width: 100%;
                  height: 100%;
                  display: table-cell;
                  vertical-align: middle;
                  text-align: center;
                  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  background-color: rgb(37, 37, 37);
                  color: white;
              }
          
              input {
                  padding: 15px;
                  outline: none;
                  border: none;
                  font-size: 17px;
                  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                  border-radius: 360px;
                  width: 15.85em;
              }
          
              button {
                  padding: 15px;
                  font-size: 16px;
                  width: 13em;
                  border-radius: 360px;
                  border: none;
                  outline: none;
                  color: white;
                  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  background-color: rgb(0, 0, 0);
              }
              .showNum {
                 border: white 2.5px solid;
                 padding:10px;
                 border-radius:360px;
                 font-weight:bold;
                 font-size:27px;
              }
              </style>
          </head>
          <body>
              <h1>NumberGuessingGame</h1>
              <p>Sorry! You were not able to guess the number! My chosen number was:-</p>
              <p class="showNum">
              ${String(actual_number)}
              </p>
              <form method="post" action="/chooseLevel">
          <input name="name" value="${name}" hidden>
          <br>
          <br>
          <button type="submit">Try again</button>
      </form>
          </body>
          </html>
          `);
      }else{
          res.end(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>NumberGuessingGame | A small yet funny game (Made by Namish Kumar)</title>
              <style>
                  html {
                  width: 100%;
                  height: 100%;
                  display: table;
              }
          
              body {
                  width: 100%;
                  height: 100%;
                  display: table-cell;
                  vertical-align: middle;
                  text-align: center;
                  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  background-color: rgb(37, 37, 37);
                  color: white;
              }
          
              input {
                  padding: 15px;
                  outline: none;
                  border: none;
                  font-size: 17px;
                  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                  border-radius: 360px;
                  width: 15.85em;
              }
          
              button {
                  padding: 15px;
                  font-size: 16px;
                  width: 13em;
                  border-radius: 360px;
                  border: none;
                  outline: none;
                  color: white;
                  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  background-color: rgb(0, 0, 0);
              }
              </style>
          </head>
          <body>
              <h1>NumberGuessingGame</h1>
              <p>Oops! Your number is lesser than my chosen number! Please guess it within ${String(chances_left_new)} attempts!</p>
              <form method="post" action="/check_level2">
                  <input name="name" value="${name}" hidden>
                  <input name="chances_left" value="${String(chances_left_new)}" hidden> 
                  <input name="actual_number" value="${String(actual_number)}" hidden>
                  <input name="number" type="number" placeholder="Enter the number" required>
                  <br>
                  <br>
                  <button type="submit">Next</button>
              </form>
              <p>Number of attempts left:-</p>
             <div>
                <div style=" text-align:center;" id="wowDiv">       
                 <h2 style="border:white 2px solid; border-radius:360px;">${String(chances_left_new)}</h2>
              </div>
             </div>
          </body>
          </html>
          `);
      }
    }
});

app.post("/level3_chance1", (req, res) => {
    let x = Math.floor((Math.random() * 200) + 1);
    const fix_num = String(x).toString();
    const body = req.body;
    const name = body.name;
    console.log(`NGG:- ${name} has chosen Level 3 (Number between 1 and 200! It is their first (1st chance)`);
    console.log(`NGG:- Number ${fix_num} has been chosen for ${name}! Wish them a good luck!`);
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>NumberGuessingGame | A small yet funny game (Made by Namish Kumar)</title>
        <style>
            html {
            width: 100%;
            height: 100%;
            display: table;
        }
    
        body {
            width: 100%;
            height: 100%;
            display: table-cell;
            vertical-align: middle;
            text-align: center;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: rgb(37, 37, 37);
            color: white;
        }
    
        input {
            padding: 15px;
            outline: none;
            border: none;
            font-size: 17px;
            font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            border-radius: 360px;
            width: 15.85em;
        }
    
        button {
            padding: 15px;
            font-size: 16px;
            width: 13em;
            border-radius: 360px;
            border: none;
            outline: none;
            color: white;
            font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: rgb(0, 0, 0);
        }
        </style>
    </head>
    <body>
        <h1>NumberGuessingGame</h1>
        <p>Alright ${name}! I have chosen a number between 1 and 200. Guess it within <b>20 attempts!</b></p>
        <form method="post" action="/check_level3">
            <input name="name" value="${name}" hidden>
            <input name="chances_left" value="20" hidden> 
            <input name="actual_number" value="${fix_num}" hidden>
            <input name="number" type="number" placeholder="Enter the number" required>
            <br>
            <br>
            <button type="submit">Next</button>
        </form>
        <p>Number of attempts left:-</p>
       <div>
          <div style=" text-align:center;" id="wowDiv">       
           <h2 style="border:white 2px solid; border-radius:360px;">20</h2>
        </div>
       </div>
    </body>
    </html>
    `);
});

app.post("/check_level3", (req, res) => {
    const body = req.body;
    const name = body.name;
    const number = body.number;
    const actual_number = body.actual_number;
    const chances_left = body.chances_left;
    if(Number(String(number)) === Number(String(actual_number))) {
       // Equals
       console.log(`NGG: ${name} successfully guessed the right number (${String(number)}) in their ${returnOrdinalLevel3(chances_left)} attempt! Congractulations!`);
       res.end(`
       <!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>NumberGuessingGame | A small yet funny game (Made by Namish Kumar)</title>
           <style>
               html {
               width: 100%;
               height: 100%;
               display: table;
           }
       
           body {
               width: 100%;
               height: 100%;
               display: table-cell;
               vertical-align: middle;
               text-align: center;
               font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
               background-color: rgb(37, 37, 37);
               color: white;
           }
       
           input {
               padding: 15px;
               outline: none;
               border: none;
               font-size: 17px;
               font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
               border-radius: 360px;
               width: 15.85em;
           }
       
           button {
               padding: 15px;
               font-size: 16px;
               width: 13em;
               border-radius: 360px;
               border: none;
               outline: none;
               color: white;
               font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
               background-color: rgb(0, 0, 0);
           }
           .showNum {
              border: white 2.5px solid;
              padding:10px;
              border-radius:360px;
              font-weight:bold;
              font-size:27px;
           }
           </style>
       </head>
       <body>
           <h1>NumberGuessingGame</h1>
           <p>Congratulations ${name}! You guessed the right number in your ${returnOrdinalLevel3(chances_left)} attempt! My choosen number was:- </p>
           <p class="showNum">
           ${String(actual_number)}
           </p>
           <form method="post" action="/chooseLevel">
           <input name="name" value="${name}" hidden>
           <br>
           <br>
           <button type="submit">Play again</button>
       </form>
       </body>
       </html>
       `);
    }else if(Number(String(number)) > Number(String(actual_number))) {
       // Greater than mine
      let chances_left_new = (Number(chances_left) - 1);
      console.log(`NGG: Oops! ${name}'s number(${String(number)}) is greater than the actual number (${String(actual_number)}). Only ${String(chances_left_new)} chances left for him.`);
      if(chances_left_new === 0) {
          res.end(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>NumberGuessingGame | A small yet funny game (Made by Namish Kumar)</title>
              <style>
                  html {
                  width: 100%;
                  height: 100%;
                  display: table;
              }
          
              body {
                  width: 100%;
                  height: 100%;
                  display: table-cell;
                  vertical-align: middle;
                  text-align: center;
                  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  background-color: rgb(37, 37, 37);
                  color: white;
              }
          
              input {
                  padding: 15px;
                  outline: none;
                  border: none;
                  font-size: 17px;
                  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                  border-radius: 360px;
                  width: 15.85em;
              }
          
              button {
                  padding: 15px;
                  font-size: 16px;
                  width: 13em;
                  border-radius: 360px;
                  border: none;
                  outline: none;
                  color: white;
                  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  background-color: rgb(0, 0, 0);
              }
              .showNum {
                 border: white 2.5px solid;
                 padding:10px;
                 border-radius:360px;
                 font-weight:bold;
                 font-size:27px;
              }
              </style>
          </head>
          <body>
              <h1>NumberGuessingGame</h1>
              <p>Sorry! You were not able to guess the number! My chosen number was:-</p>
              <p class="showNum">
              ${String(actual_number)}
              </p>
              <form method="post" action="/chooseLevel">
          <input name="name" value="${name}" hidden>
          <br>
          <br>
          <button type="submit">Try again</button>
      </form>
          </body>
          </html>
          `);
      }else{
          res.end(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>NumberGuessingGame | A small yet funny game (Made by Namish Kumar)</title>
              <style>
                  html {
                  width: 100%;
                  height: 100%;
                  display: table;
              }
          
              body {
                  width: 100%;
                  height: 100%;
                  display: table-cell;
                  vertical-align: middle;
                  text-align: center;
                  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  background-color: rgb(37, 37, 37);
                  color: white;
              }
          
              input {
                  padding: 15px;
                  outline: none;
                  border: none;
                  font-size: 17px;
                  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                  border-radius: 360px;
                  width: 15.85em;
              }
          
              button {
                  padding: 15px;
                  font-size: 16px;
                  width: 13em;
                  border-radius: 360px;
                  border: none;
                  outline: none;
                  color: white;
                  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  background-color: rgb(0, 0, 0);
              }
              </style>
          </head>
          <body>
              <h1>NumberGuessingGame</h1>
              <p>Oops! Your number is greater than my chosen number! Please guess it within ${String(chances_left_new)} attempts!</p>
              <form method="post" action="/check_level3">
                  <input name="name" value="${name}" hidden>
                  <input name="chances_left" value="${String(chances_left_new)}" hidden> 
                  <input name="actual_number" value="${String(actual_number)}" hidden>
                  <input name="number" type="number" placeholder="Enter the number" required>
                  <br>
                  <br>
                  <button type="submit">Next</button>
              </form>
              <p>Number of attempts left:-</p>
             <div>
                <div style=" text-align:center;" id="wowDiv">       
                 <h2 style="border:white 2px solid; border-radius:360px;">${String(chances_left_new)}</h2>
              </div>
             </div>
          </body>
          </html>
          `);
      }
    }else if(Number(String(number)) < Number(String(actual_number))) {
       // Smaller than mine
       let chances_left_new = (Number(chances_left) - 1);
      console.log(`NGG: Oops! ${name}'s number (${String(number)}) is lesser than the actual number (${String(actual_number)}). Only ${String(chances_left_new)} chances left for him.`);
      if(chances_left_new === 0) {
          res.end(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>NumberGuessingGame | A small yet funny game (Made by Namish Kumar)</title>
              <style>
                  html {
                  width: 100%;
                  height: 100%;
                  display: table;
              }
          
              body {
                  width: 100%;
                  height: 100%;
                  display: table-cell;
                  vertical-align: middle;
                  text-align: center;
                  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  background-color: rgb(37, 37, 37);
                  color: white;
              }
          
              input {
                  padding: 15px;
                  outline: none;
                  border: none;
                  font-size: 17px;
                  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                  border-radius: 360px;
                  width: 15.85em;
              }
          
              button {
                  padding: 15px;
                  font-size: 16px;
                  width: 13em;
                  border-radius: 360px;
                  border: none;
                  outline: none;
                  color: white;
                  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  background-color: rgb(0, 0, 0);
              }
              .showNum {
                 border: white 2.5px solid;
                 padding:10px;
                 border-radius:360px;
                 font-weight:bold;
                 font-size:27px;
              }
              </style>
          </head>
          <body>
              <h1>NumberGuessingGame</h1>
              <p>Sorry! You were not able to guess the number! My chosen number was:-</p>
              <p class="showNum">
              ${String(actual_number)}
              </p>
              <form method="post" action="/chooseLevel">
          <input name="name" value="${name}" hidden>
          <br>
          <br>
          <button type="submit">Try again</button>
      </form>
          </body>
          </html>
          `);
      }else{
          res.end(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>NumberGuessingGame | A small yet funny game (Made by Namish Kumar)</title>
              <style>
                  html {
                  width: 100%;
                  height: 100%;
                  display: table;
              }
          
              body {
                  width: 100%;
                  height: 100%;
                  display: table-cell;
                  vertical-align: middle;
                  text-align: center;
                  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  background-color: rgb(37, 37, 37);
                  color: white;
              }
          
              input {
                  padding: 15px;
                  outline: none;
                  border: none;
                  font-size: 17px;
                  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                  border-radius: 360px;
                  width: 15.85em;
              }
          
              button {
                  padding: 15px;
                  font-size: 16px;
                  width: 13em;
                  border-radius: 360px;
                  border: none;
                  outline: none;
                  color: white;
                  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  background-color: rgb(0, 0, 0);
              }
              </style>
          </head>
          <body>
              <h1>NumberGuessingGame</h1>
              <p>Oops! Your number is lesser than my chosen number! Please guess it within ${String(chances_left_new)} attempts!</p>
              <form method="post" action="/check_level3">
                  <input name="name" value="${name}" hidden>
                  <input name="chances_left" value="${String(chances_left_new)}" hidden> 
                  <input name="actual_number" value="${String(actual_number)}" hidden>
                  <input name="number" type="number" placeholder="Enter the number" required>
                  <br>
                  <br>
                  <button type="submit">Next</button>
              </form>
              <p>Number of attempts left:-</p>
             <div>
                <div style=" text-align:center;" id="wowDiv">       
                 <h2 style="border:white 2px solid; border-radius:360px;">${String(chances_left_new)}</h2>
              </div>
             </div>
          </body>
          </html>
          `);
      }
    }
});

app.listen(process.env.PORT || 3000);

function returnOrdinalLevel1(chances_left) {
    let prefix;
    let toReturn;
    const number_of_attempts = 5 - Number(chances_left - 1);
    if(String(number_of_attempts)[String(number_of_attempts).length - 1] === "1") {
       prefix = "st";
    }else if(String(number_of_attempts)[String(number_of_attempts).length - 1] === "2") {
      prefix = "nd";
   } else if(String(number_of_attempts)[String(number_of_attempts).length - 1] === "3") {
      prefix = "rd";
   }else if(String(number_of_attempts)[String(number_of_attempts).length - 1] === "5"){
      prefix = "lo";
   }else{
      prefix = "th";
   }
   if(prefix === "lo") {
     toReturn = "last";
   }else{
     toReturn = String(number_of_attempts) + String(prefix);
   }

   return toReturn;
  }

  function returnOrdinalLevel2(chances_left) {
    let prefix;
    let toReturn;
    const number_of_attempts = 10 - Number(chances_left - 1);
    if(number_of_attempts <= 0) {
        toReturn = null;
    }else {
        if(String(number_of_attempts)[String(number_of_attempts).length - 1] === "1") {
            prefix = "st";
         }else if(String(number_of_attempts)[String(number_of_attempts).length - 1] === "2") {
           prefix = "nd";
        } else if(String(number_of_attempts)[String(number_of_attempts).length - 1] === "3") {
           prefix = "rd";
        }else if(String(number_of_attempts) === "10"){
           prefix = "lo";
        }else{
           prefix = "th";
        }
        if(prefix === "lo") {
          toReturn = "last";
        }else{
          toReturn = String(number_of_attempts) + String(prefix);
        }
    }
  return toReturn;
}

  function returnOrdinalLevel3(chances_left) {
    let prefix;
    let toReturn;
    const number_of_attempts = 20 - Number(chances_left - 1);
    if(String(number_of_attempts)[String(number_of_attempts).length - 1] === "1") {
       prefix = "st";
    }else if(String(number_of_attempts)[String(number_of_attempts).length - 1] === "2") {
      prefix = "nd";
   } else if(String(number_of_attempts)[String(number_of_attempts).length - 1] === "3") {
      prefix = "rd";
   }else if(String(number_of_attempts) === "20"){
      prefix = "lo";
   }else{
      prefix = "th";
   }
   if(prefix === "lo") {
     toReturn = "last";
   }else{
     toReturn = String(number_of_attempts) + String(prefix);
   }

   return toReturn;
  }