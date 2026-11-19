// a^b의 값을 반환합니다.
function power(a, b) {
    let cnt = 1;
    for (let i = 0; i < b; i++) {
        cnt *= a;
    }

    return cnt;
}

// 변수 선언 및 입력
const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

console.log(power(a, b));
