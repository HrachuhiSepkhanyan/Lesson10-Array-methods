function sum() {
    let arr = Array.from(arguments)
    let res = arr.reduce((sum, current) => {
        return sum + current;
    }, 0);
    return res;
}
console.log(sum(1, 2, 3, 4));