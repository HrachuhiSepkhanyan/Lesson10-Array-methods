const array = [1, 2, 3, 4]

function forEach(arr, fun) {
    for (let index = 0; index < array.length;) {
        let elem = arr[index];

        fun(elem);
        index++
    }
};

forEach(array, function(val) {
    console.log(val % 2);
});

// let array = [1, 2, 3, 4]
// let forEach = function(arr) {
//     let i = 0;
//     while (i < arr.length) {

//         i++;
//     }
// };
// console.log(forEach(array));

// function fnForEach(arr, fn) {

// }
// fnForEach(array, forEach(array));