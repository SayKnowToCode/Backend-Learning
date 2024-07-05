const { error } = require("console");
const fs = require("fs");


// const rs = fs.createReadStream('./files/lorem.txt', {encoding : 'utf-8'})
// const ws = fs.createWriteStream('./files/newLorem.txt')

// // rs.on('data',(chunk) => {
// //     ws.write(chunk);
// // })

// // This is one method to do it, another is piping

// rs.pipe(ws);




////// Directory Handling

if(! fs.existsSync('./new'))
{
    fs.mkdir('./new', (error) => {
        if (error) throw error;
        console.log("Directory created");
    })
}

if(fs.existsSync('./new'))
{
    fs.rmdir('./new', (error) => {
        if (error) throw error;
        console.log("Directory removed");
    })
}