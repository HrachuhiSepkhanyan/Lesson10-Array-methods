const users = [{
        username: "Yuri Gagarin",
        lang: "ru",
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
    },
];

function getUserNames(user) {
    let newArr = users.map(el => {
        return el.username.length
    })

    return newArr;
}

;
console.log(getUserNames(users))