// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let [a, o, c] = input.split(" ");
a = Number(a);
c = Number(c);

// 두 수의 합을 반환하는 함수를 작성합니다.
function plus(a, b) {
    return a + b;
}

// a에서 b를 뺀 값을 반환하는 함수를 작성합니다.
function minus(a, b) {
    return a - b;
}

// 두 수의 곱을 반환하는 함수를 작성합니다.
function times(a, b) {
    return a * b;
}

// a를 b로 나눈 몫을 반환하는 함수를 작성합니다.
function divide(a, b) {
    return parseInt(a / b);
}

if (o === '+') {
    console.log(a, "+", c, "=", plus(a, c));
}
else if (o === '-') {
    console.log(a, "-", c, "=", minus(a, c));
}
else if (o === '*') {
    console.log(a, "*", c, "=", times(a, c));
}
else if (o === '/') {
    console.log(a, "/", c, "=", divide(a, c));
}
else {
    console.log("False");
}
