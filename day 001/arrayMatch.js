let a = [1, 2, 3, 4, 5, 6, 8, 2, 11, 11, 2]
let d = [1, 2, 4, 5, 8, 9, 2, 11]

const similarValue = (arr1, arr2) => {
    let result = []
    arr1.forEach(v => {

        let idx = arr2.indexOf(v)
        if (idx >= 0) {
            result.push(v)
            arr2.splice(idx, 1)
        }
    })
    return result
}
console.log('similarValue', similarValue(a, d));