// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);

// n회 반복합니다.
for (let i = 1; i <= n; i++) {
    // 변수 선언 및 입력
    let x = input[i].split(" ");
    let a = Number(x[0]);
    let b = Number(x[1]);
    let ans = 0;

    // a부터 b까지 짝수를 전부 더한 값을 출력합니다.
    for (let j = a; j <= b; j++) {
        if (j % 2 === 0) {
            ans += j;
        }
    }

    console.log(ans);
}
