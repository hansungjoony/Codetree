// 3, 6, 9 숫자가
// 단 하나라도 포함되었는지를 확인합니다.
function contains369(n) {
    // 계속 10으로 나눠주며
    // 일의 자리를 조사합니다.
    while (n > 0) {
        if (n % 10 === 3 || n % 10 === 6 || n % 10 === 9) {
            return true;
        }

        n = parseInt(n / 10);
    }

    return false;
}

// 3, 6, 9를 포함하거나 3의 배수인지를 판단합니다.
function is369Number(n) {
    return contains369(n) || (n % 3 === 0);
}

// 변수 선언 및 입력
const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let cnt = 0;
for (let i = a; i <= b; i++) {
    if (is369Number(i)) {
        cnt++;
    }
}

console.log(cnt);
