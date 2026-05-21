// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr1 = Array(3).fill(0).map(() => Array(3).fill(0));
let arr2 = Array(3).fill(0).map(() => Array(3).fill(0));

// 첫 번째 배열의 입력을 받습니다.
for (let i = 0; i < 3; i++) {
    arr1[i] = input[i].split(" ").map(Number);
}

// 두 번째 배열의 입력을 받습니다.
for (let i = 0; i < 3; i++) {
    arr2[i] = input[i + 4].split(" ").map(Number);
}

// 두 배열의 곱을 새로운 배열에 담습니다.
let arr3 = Array(3).fill(0).map(() => Array(3).fill(0));
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        arr3[i][j] = arr1[i][j] * arr2[i][j];
    }
}

// 새로운 배열을 출력합니다.
for (let row of arr3) {
    let str = "";
    for (let elem of row) {
        str += elem + " ";
    }
    console.log(str);
}
