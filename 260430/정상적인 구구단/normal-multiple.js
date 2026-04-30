// 변수 선언 및 입력
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

// n * n모양 구구단을 출력합니다.
for (let i = 1; i <= n; i++) {
    str = "";
    for (let j = 1; j <= n; j++) {
        str += `${i} * ${j} = ${i * j}`;
        if (j !== n)
            str += ", ";
    }
    console.log(str);
}
