const number = 10;

function fibs(number) {
    let fibSequence = [0, 1];
    let numA = 0;
    let numB = 1;
    for (let i = 2; i < number; i++) {
        let newNum = numA + numB;
        fibSequence.push(newNum);
        numA = fibSequence[i - 1]
        numB = newNum;
    }
    return console.log(fibSequence);
}

fibs(number);
 
function fibsRec(number) {
    if (number < 2) {
        return number;
    }
    return fibsRec(number - 1) + fibsRec(number - 2);
}

let recFibSequence = [];
for (let i = 0; i < number; i++) {
    recFibSequence.push(fibsRec(i));
}
console.log(recFibSequence);
