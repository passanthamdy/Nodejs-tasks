const readline = require("readline");
const fs = require("fs");

/**************************************** */
//Reading file line by line
/*************************************** */
let num = 1;
const readInterface = readline.createInterface({
  input: fs.createReadStream("greet.txt"),
  // output: process.stdout,
  console: false,
});
readInterface.on("line", function (line) {
  console.log("line no " + num + " : " + line);
  num++;
});
//******************************** */
//Reading file Synchronously
/*********************************** */
const dataSyn = fs.readFileSync("text.txt", "utf8");

/**************************************** */
//Reading file Asynchronously
/*************************************** */
const dataAsyn = fs.readFile("info.txt", "utf8", function (err, dataAsyn) {
  if (err) console.log(err);
  else console.log(dataAsyn);
});

/********************************* */
//Renaming file
/******************************** */
fs.rename("text.txt", "info.txt", function (err) {
  if (err) throw err;
  console.log("Rename complete!");
});
/*************************************** */
//Writing in file
//*************************** */

fs.writeFile("info.txt", "welcome to iti nodejs course", (err) => {
  if (err) console.log(err);
  else {
    console.log("File written successfully");
  }
});
/**************************************** */
//Removing file
/**************************************** */
fs.unlink("books.txt", function (err) {
  if (err) console.log("file is not removed");
  else console.log("File is removed successfully");
});
/**************************************** */
//Creating dir
/**************************************** */
fs.mkdir("newdir", function (err) {
  if (err) console.log("dir is not created");
  else console.log("Dir is created successfully");
});
