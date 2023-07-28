//push a new element in a old array

let fruits = ["banana", "apple", "mango", "litchi"]

const pushElement = (arr) => {
    arr.push("orange")
}

pushElement(fruits)

console.log(fruits)



// push an Element and make a new array

let fruitsz = ["banana", "apple", "mango", "litchi"]

const pushElements = (arr) => {
    let newFruits = [...arr]
    newFruits.push("orange")
    return newFruits

}

let newArr = pushElements(fruitsz)


console.log(fruits)
console.log(newArr)
console.log(fruits)