// Node runs on the server not on the browser
// The terminal window is the console
// Like the window object in normal JS, here we have the global object




// console.log("Hello world");
const { log } = require("console");
// console.log(global);
// log(typeof global);

// // This is the destructuring assignment syntax. It is used to extract the log property from the 'console' object.
// // So, after this statement, you can use the log variable as a reference to the console.log method
// // That means we can directly use log instead of console.log

// const os = require("os");
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir()); // Gives home directory for the system
// console.log(os.hostname());
// // Gives info about the OS


// log(__dirname); // Gives the path folder in which the file is stored
// log(__filename); // Gives the same path as above + file name

// log()
// log()

const path = require("path"); 
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log();
// console.log(path.dirname(__dirname));
// console.log(path.basename(__dirname));
// console.log(path.extname(__dirname)); // This did not give any output as Folder does not have any extension
// console.log();

// // Run this part on output and you will understand, basically path.dirname or basename or extname takes a location path as argument

console.log(path.parse(__filename)); 
//Makes an object of the path directory giving all the values that we accessed above using basename or extname etc

const math = require("./math");
// This is just another way of importing in Node 

const { add, subtract, multiply, divide } = require("./math");
// This is destructuring while importing

console.log(math.add(2, 3)); // Use this when not destructured
console.log(add(2, 3)); // Use when destructured
// We dont need to write full math here we can destructure it right when initializing

console.log(add(4, 2));
console.log(subtract(4, 2));
console.log(multiply(4, 2));
console.log(divide(4, 2));
