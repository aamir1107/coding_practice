const numberReverse = (num) => {
    let reversedNum = "";
    while (num > 0) {
        let remainder = num % 10;
        reversedNum += remainder
        num = (Math.floor(num / 10))

    }
    return parseInt(reversedNum)
}
let abc = -125454
let rehbar = 45445455
let TEST = 114256699855885

console.log(`reverse of ${abc} : `, numberReverse(abc))
console.log(`reverse of ${rehbar} : `, numberReverse(rehbar))
console.log(`reverse of ${TEST} : `, numberReverse(TEST))