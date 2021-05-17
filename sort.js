function sortBy(arr, str) {
    let newArr = [];
    if (str === "Asc") {
        return arr2 = arr.sort((a, b) => {
            return a - b
        })
    }
    if (str === "Desc") {
        return newArr = arr.sort((a, b) => {
            return b - a;
        })
    } else {
        newArr = arr
        return newArr;
    }
};
console.log(sortBy([4, 3, 2, 1], "Asc"));
console.log(sortBy([5, 4, 7, 8, 6, 3, ], "Desc"));
console.log(sortBy([4, 5, 6, 7]));