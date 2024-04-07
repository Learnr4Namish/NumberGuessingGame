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
    }
  return toReturn;
}

console.log(returnOrdinalLevel2(11));