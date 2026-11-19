// 해당 숫자가 소수인지 여부를 반환하는 함수를 작성합니다.
function isPrime(n) {
    if (n === 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// 자릿수의 합이 짝수인지 여부를 반환하는 함수를 작성합니다.
function isDigitSumEven(n) {
    let digitSum = parseInt(n / 100) + parseInt((n / 10) % 10) + (n % 10);

    if (digitSum % 2 === 0) {
        return true;
    }

    return false;
}

// 변수 선언 및 입력
const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let cnt = 0;
for (let i = a; i <= b; i++) {
    if (isPrime(i) && isDigitSumEven(i)) {
        cnt++;
    }
}

console.log(cnt);
