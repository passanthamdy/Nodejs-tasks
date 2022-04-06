function add(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) return "please enter a valid number";
  else return num1 + num2;
}
function sub(num1,num2){
    if(isNaN(num1)||isNaN(num2)) return "Please enter a valid number!";
    else return num1-num2;
}
function multiply(num1,num2){
    if(isNaN(num1)||isNaN(num2)) return "Please enter a valid number!";
else return num1 * num2;

}
function devide(num1,num2){
    if(isNaN(num1)||isNaN(num2)) return "Please enter a valid number!";
    return num1 / num2;
}
module.exports = {
    add: add,
    sub: sub,
    multiply: multiply,
    devide:devide
}