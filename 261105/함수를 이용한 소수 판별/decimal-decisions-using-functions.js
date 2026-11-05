function isPrime(n) {
    if (n === 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }

    return true;
}

// 변수 선언 및 입력
const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sumVal = 0;
for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
        sumVal += i;
    }
}

console.log(sumVal);
