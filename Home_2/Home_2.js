//------------Task_1

let myVar = 'baNaNa'
let myRes = myVar.charAt(0).toUpperCase() + (myVar.slice(1)).toLowerCase();
console.log(`Result Task 1: result = ${myRes}`);

//------------Task_2

let height = 0.6,
    width = 0.7;
let perimeter = (2 * (height + width)).toFixed(1);
console.log(`Result Task 2: perimeter = ${perimeter}`);

//------------Task_3

let merged = true;
let unmerged = !merged;
merged = Number(merged);
console.log(`Result Task 3.1: unmerged = ${unmerged}, Task 3.2: merged = ${merged}`);

//------------Task_4

let a = 0,
    b = '0',
    c = null,
    d = false;
let e = ((a == b) == (c == d));
let h = (a == b == c == d);
console.log(`Result Task 4.1: e = ${e}, Task 4.2: h = ${h}`);

//-------------Task_5

let k = 5;
console.log(`Result Task 5.1: e = ${(k++)===(++k)}, Task 5.2: h = ${(++k) === (k++)}`);

//------------Task_6

let word = 'hello';
let bb;
word.length > 3 ? bb = 25 : bb = 'green';
console.log(`Result Task 6: bb = ${bb}`);

//------------Task_7

function compareF(apples, pears, oranges, color, check) {
    if (apples > oranges) {
        if (oranges < pears) {
            return !check;
        } else {
            if (!color) {
                return check;
            } else {
                return !check;
            }
        }
    } else {
        if (pears < apples) {
            return check;
        } else {
            if (!color) {
                return check;
            } else {
                return !check;
            }
        }
    }
}
console.log(`Result Task 7: bb = ${compareF(3, -9, 7, 'Red', true)}`);

//------------Task_8

//LOOP FOR
let resFor = '';
for (let i = 80; i >= 4; i--) {
    if (i % 2 == 0) {
        resFor += i + ',';
    }
}
//LOOP WHILE
let resWhile = '';
let j = 7;
while (j <= 41) {
    if (j % 2 != 0) {
        resWhile += j + ',';
    }
    j++;
}
console.log(`Result Task 8.1: for = ${resFor}`);
console.log(`Result Task 8.2: while = ${resWhile}`);