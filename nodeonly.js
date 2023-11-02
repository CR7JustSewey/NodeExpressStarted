//To install node packages
// npm install PACKAGENAME(e.g --> npm install superheroes)

//To run nodejs file
// node FILENAME (e.g --> node nodeonly.js)

const fs=require("fs");
const path=require("path");
const quote=require("quote");
const superheroes=require("superheroes");
fs.copyFileSync("file1.txt","file2.txt");
fs.appendFileSync("file2.txt"," Siuuu");

//console.log(process.env.PATH);

console.log(quote(quote(quote('"Talent without working hard is nothing"'))));

//console.log(superheroes.all());

console.log(superheroes.random());
