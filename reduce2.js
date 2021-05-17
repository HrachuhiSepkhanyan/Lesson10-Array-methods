const users = [{
        username: "Yuri Gagarin",
        lang: "ru",
        age: 56,
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
        age: 54,
    },
];

function getAverageAge(users) {
    let age = users.map(el => {
        return el.age
    })
    return age;

}
console.log(getAverageAge(users))

function arithmeticaverage() {
    return getAverageAge(users).reduce((accum, el) => {
        accum + el;
    }, 0)

}

console.log(arithmeticaverage(users))

function language() {
    let arr = []

    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        arr += element.lang

    }
    return arr
}
console.log(language());