function repeatString(string, num) {

let repeatedStr = "";

while (num > 0) {
    repeatedStr += string;
    num--; 
    } 
    if (num == -1)
        return "ERROR";
    else {
        return repeatedStr;
 }
};
// Do not edit below this line
module.exports = repeatString;
