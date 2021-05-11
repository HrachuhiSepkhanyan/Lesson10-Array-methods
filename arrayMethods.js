const arr1 = [1, 2, 3, 4]
const arr2 = [5, 6, 7, 8, 9]

function Arrays(array1, array2) {
    let newArray = array1.concat(array2)
    console.log(newArray);
    return newArray
}
Arrays(arr1, arr2)