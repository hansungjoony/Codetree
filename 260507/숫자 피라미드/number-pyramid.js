// 변수 선언 및 입력
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

// 숫자로 이루어진 삼각형을 출력합니다.
for (let i = 1; i <= n; i++) {
    str = "";
    for (let j = 0; j < i; j++) {
        str += i + " ";
    }
    console.log(str);
}
