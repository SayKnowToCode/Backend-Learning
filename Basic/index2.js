const fs = require("fs");

// fs.readFile("./files/starter.txt",'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   console.log(data.toString()); // If utf8 was not used then toString() method is compulsory
// });

// console.log("Hello.............");
// // He we can see that fs in Node is async as first Hello.... gets printed and then the data in starter.txt

// //exit on uncaught errors
// process.on("uncaughtException", (err) => {
//   console.log(`There was an uncaugth error : ${err}`);
//   process.exit(1);
// });

// Instead of hardcoding the path like we did above, there is a better way to that

// const path = require("path");

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     console.log(data.toString()); // If utf8 was not used then toString() method is compulsory
//   }
// );

// // Here utf8 is implicit, instead we put what we want to write in the new file
// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you",
//   (err) => {
//     if (err) throw err;
//     console.log("Write completed");
//   }
// );

// fs.appendFile(
//   path.join(__dirname, "files", "test.txt"),
//   "Testing .....",
//   (err) => {
//     if (err) throw err;
//     console.log("Append completed");
//   }
// );

// console.log("Hello.............");

// fs.appendFile(
//   path.join(__dirname, "files", "starter.txt"),
//   " This is append",
//   (err) => {
//     if (err) throw err;
//     console.log("Operation completed");
//   }
// );

// // // append can change in an existing file and if no such file exists, it will make a new file

// process.on("uncaughtException", (err) => {
//   console.log(`There was an uncaugth error : ${err}`);
//   process.exit(1);
// });

////// IMP ///////////////////////////////////////
// See the output till here and think on asyn and await

/* We can write a file, put an append in its callback and a renmae in append's callback to make sure that first we are creating a file with 
 write and not append, then we are appending in the created file and we can rename it at the last */

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you",
//   (err) => {
//     if (err) throw err;
//     console.log("Write completed");

//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       " This is append",
//       (err) => {
//         if (err) throw err;
//         console.log("Append completed");

//         fs.rename(path.join(__dirname,'files','reply.txt'),path.join(__dirname,'files','new.txt'), (err) => {
//           if(err) throw err;
//           console.log("Rename Complete");
//         })
//       }
//     );
//   }
// );

//  process.on("uncaughtException", (err) => {
//   console.log(`There was an uncaugth error : ${err}`);
//   process.exit(1);
// });

const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf-8')
    console.log(data);
    await fsPromises.unlink(path.join(__dirname,'files','starter.txt'),data) // This is basically delete
    await fsPromises.writeFile(path.join(__dirname,'files','promiseWrite.txt'),data)
    await fsPromises.appendFile(path.join(__dirname,'files','promiseWrite.txt'), '\n\nNice to meet you')
    await fsPromises.rename(path.join(__dirname,'files','promiseWrite.txt'), path.join(__dirname,'files','promiseComplete.txt'))

    const newdata = await fsPromises.readFile(path.join(__dirname,'files','promiseComplete.txt'),'utf-8')
    console.log(newdata);
  } catch (error){
    console.error(error);
  }
}

fileOps();