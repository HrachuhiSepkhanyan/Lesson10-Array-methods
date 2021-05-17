const users = [{
        username: "Yuri Gagarin",
        lang: "ru",
        isAstronaut: true,
    },
    {
        username: "Nil Armstrong",

        lang: "ENG",
        isAstronaut: true,
    },
    {
        username: "Elon Musk",
        isAstronaut: false,
    },
];

function filterByField(arr, str) {
    const user = users.filter(users => users.isAstronaut === true)
    return user;

}
console.log(filterByField(users, "isAstronaut"));