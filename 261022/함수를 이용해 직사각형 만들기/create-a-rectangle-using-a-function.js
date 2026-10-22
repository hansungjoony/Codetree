function printRect(n, m) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            process.stdout.write("1");
        }
        process.stdout.write("\n");
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [rowNum, colNum] = input.map(Number);
printRect(rowNum, colNum);

