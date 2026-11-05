function sumN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i;

    return parseInt(sum / 10);
}

// 변수 선언 및 입력
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

console.log(sumN(n));
