function parseInteger(array) {
    return array.map(el => {
        if (Number(el) && !isNaN(el)) {
            return el
        }
        return null;

    })

}
console.log(parseInteger(["1", "2", "home"]));