// readFileCallback.js
var fs = require('fs')
fs.readFile(process.argv[2], 'utf8',
  function (err, data) {
    if (err === null) {
      console.log('data:', data)
    } else {
      console.log('err:', err)
    }
  })

console.log('----readFile End----')
