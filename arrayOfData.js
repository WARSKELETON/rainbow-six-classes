const fs = require('fs');

var text = fs.readFileSync("./ebyte.txt").toString('utf-8');
var textByLine = text.split("\n")
var array = []

textByLine.forEach(line => {
    let split_1 = line.split(" - ")
    let split_2 = split_1[1].split("/")
    let split_3 = split_2[1].split(",")
    array.push({
        operator: split_1[0],
        primary_weapon: split_2[0],
        attachments: split_3
    })
});

console.log(array)
