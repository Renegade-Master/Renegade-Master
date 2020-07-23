class Person {
    constructor() {
        this.orig_time = 1595543241825;
    }

    CountTime(new_time) {
        return (new_time - this.orig_time);
    }
}

function main() {
    console.log(`If you are seeing this, then somehow the JavaScript has worked.\n`);

    let p = new Person();
    let days = p.CountTime(Date.now()) / 86400000;

    console.log(`Hello, from ${days.toFixed(2)} Days ago!`);
}

main();