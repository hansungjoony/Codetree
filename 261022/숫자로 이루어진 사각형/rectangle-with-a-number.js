// 변수 선언 및 입력
const fs = require("fs");
let rowNum = Number(fs.readFileSync(0).toString().trim());

// n개의 줄에 걸쳐 특정 문자열을 출력하는 함수입니다.
function printNum(n) {
    let cnt = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            process.stdout.write(cnt + " ");
            cnt += 1;
            if (cnt === 10) {
                cnt = 1;
            }
        }
        process.stdout.write("\n");
    }
}

printNum(rowNum);
