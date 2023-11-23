console.log(process.argv);
// destructurare
// let length = process.argv[2]
// let width = process.argv[3]
let [, , length, width] = process.argv;
