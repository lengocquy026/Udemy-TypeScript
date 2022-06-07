var btn = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var add = function (number1, number2) {
    return number1 + number2;
};
btn.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
