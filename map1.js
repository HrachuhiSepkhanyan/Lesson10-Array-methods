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
        return el.username
    })

    return newArr;
}

;
console.log(getUserNames(users))