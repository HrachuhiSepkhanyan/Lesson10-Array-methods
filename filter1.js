const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null,
    166, NaN
]
let result = arr.filter(item => (!Number.isNaN(item) && typeof item === "number"));

console.log(result);
// const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null,
//     166, NaN
// ]


// function notaNumber() {

//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if (typeof element === typeof 1 ) {
//             console.log(element);
//         }
//     }
// }
// notaNumber()

// function myFunction() {

// }
// function filterByNum(arr) {
//     let newArr = arr.filter(el => typeof el === "String" {

//     })

// }
// console.log(filterByNum(arr));