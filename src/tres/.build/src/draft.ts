function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } export {};

function main() {
    let a = +input()
    let b = +input()
    let c = +input()

    console.log(a + b)
}
main();
