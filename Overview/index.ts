const btn = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

const add = (number1: number, number2: number) => {
    return number1 + number2;
}

btn.addEventListener("click", () => {
    console.log(add(+input1.value, +input2.value));
})