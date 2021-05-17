const users = [{
        username: "Yuri Gagarin",
        lang: "ru",
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
    },
];
let newArray = [];

function map(array, fun) {
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        newArray = newArray + element

    }

}
map(function(arr, val) {
    console.log(newArray);

})