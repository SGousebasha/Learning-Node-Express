
const fs = require("fs");
// writing to the file
fs.writeFile("message.txt", "Hey this has been written by Gouse", (err) => {
    if (err) {
        throw err;
    }
    console.log("File saved successfully");
});
// reading from the file
fs.readFile("message.txt","utf-8",(err,data) => {
    if(err){
        throw err;
    }
    console.log(`the file contains ${data}`);
    }
    
)

