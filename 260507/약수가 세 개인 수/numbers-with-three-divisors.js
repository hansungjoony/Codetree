// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let start = Number(input[0]);
let end = Number(input[1]);

let answerCnt = 0;

for (let currNum = start; currNum <= end; currNum++) {
    // Step 1:
    let divisorCnt = 0;
    for (let divisor = 1; divisor <= currNum; divisor++) {
        if (currNum % divisor === 0) {
            divisorCnt++;
        }
    }
    // Case 1:
    if (divisorCnt === 3) {
        answerCnt++;
    }
}

console.log(answerCnt);
