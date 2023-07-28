//finding the minimum number in an array 
let array = [25, 45, 85, 48]

const minNumberInAnArray = (arr) => {
    if (arr.length) {
        let result = arr[0];
        arr.forEach(data => {
            if (data < result) {
                result = data
            }
        })
        return result
    } else {
        return null;
    }

}
console.log(minNumberInAnArray(array))