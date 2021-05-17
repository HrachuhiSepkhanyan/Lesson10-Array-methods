const users = [{
        username: "Yuri Gagarin",
        lang: "ru",
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
    },
];
users.filter(function(val) {
    if (val.lang !== "ru")
        console.log(val);
})