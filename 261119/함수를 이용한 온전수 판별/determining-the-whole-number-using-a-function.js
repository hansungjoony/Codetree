// 온전수인지 아닌지 여부를 판단하는 함수를 작성합니다.
function judgeNumber(n) {
    if (n % 2 === 0) {
        return false;
    }
    else if (n % 10 === 5) {
        return false;
    }
    else if (n % 3 === 0 && n % 9 !== 0) {
        return false;
    }
    else {
        return true;
    }
}

// 변수 선언 및 입력
const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let cnt = 0;

for (let i = a; i <= b; i++) {
    if (judgeNumber(i)) {
        cnt++;
    }
}

console.log(cnt);

