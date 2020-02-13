const request = require('request');
const fs = require('fs')

const pageFetcher = (input) => {
  const url = input[0];
  const filePath = input[1]

  request(url, (error, response, body) => {
    fs.writeFile(filePath, body, (err) => {
      fs.stat(filePath, (err, stat) => {
        const stats = stat.size;
        if (err) throw err
        console.log(`Download successful, we have downloaded ${stats} bytes`)
      })
    });
  });
}

pageFetcher(process.argv.slice(2))



// const getData =  (userInput) => {
//   request(userInput[0], (error, response, body) => {
//     return body
//   }) 
// }

// const writeFile = (userInput, cb) => {
//   let data = cb(userInput[0])
//   fs.writeFile(userInput[1], data, (err) => {
//     console.log('The page has been downloaded successfully!')
//   });
// }

// writeFile(userInput, getData);
