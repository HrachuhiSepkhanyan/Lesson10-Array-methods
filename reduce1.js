const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]

function sum(array) {

    return arr.filter(item => item >= 18).reduce((accum, el) => {
        return accum + el
    }, 0)

}
console.log(sum(arr));