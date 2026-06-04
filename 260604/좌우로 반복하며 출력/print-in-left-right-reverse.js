// 변수 선언 및 입력
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

// 좌우로 반복하여 출력합니다.
for (let i = 0; i < n; i++) {
    str = "";
    for (let j = 0; j < n; j++) {
        if (i % 2 === 0)
            str += j + 1;
        else
            str += n - j;
    }
    console.log(str);
}
