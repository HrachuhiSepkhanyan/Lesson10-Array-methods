const users = [{
        username: "Yuri Gagarin",
        lang: "ru",
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
    },
];

function name() {
    const user = users.filter(users => users.lang !== "ru")
    return user
}
console.log(name(users))