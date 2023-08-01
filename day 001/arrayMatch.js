let a = [1, 2, 3, 4, 5, 6, 8, 2, 11, 11, 2]
let d = [1, 2, 4, 5, 8, 9, 2, 11]

const similarValue = (arr1, arr2) => {
    let a = [...arr2]
    let result = []
    if (arr1.length && a.length) {
        arr1.forEach(v => {
            let idx = a.indexOf(v)
            if (idx >= 0) {
                result.push(v)
                a.splice(idx, 1)
            }
        })
    }
    return result
}




const mutualFriendCount = (arr1, arr2) => {
    const count = similarValue(arr1, arr2).length;
    if (count > 0) {
        return count + " mutual friend"
    } else {
        return "No Mutual Friend Found!"
    }
}
console.log('similarValue', similarValue(a, d));
console.log('similarValue', mutualFriendCount(a, d));