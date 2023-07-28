//finding max number in an array

array = [25, 16, 33, 65, 92, 67, 987, 4546, 76, 887]

const getMaxNumber = (arr) => {
    if (arr.length) {
        let result = arr[0];
        arr.forEach(data => {
            if (data > result) {
                result = data
            }
        })

        return result
    } else {
        return null;
    }

}
console.log(getMaxNumber(array))