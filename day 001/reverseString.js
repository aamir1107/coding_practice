let abc = "aamiraziz"
let rehbar = "rahbarAsari"
let TEST = "KashifReyaz"

const reverseString = (str) => {
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str.charAt(i);
    }
    return reverseStr;
}
console.log(`reverse of ${abc} : `, reverseString(abc))
console.log(`reverse of ${rehbar} : `, reverseString(rehbar))
console.log(`reverse of ${TEST} : `, reverseString(TEST))