var fs = require('fs')
function readFinished (err, data) {
  if (err !== null) {
    console.log('err=', err)
  } else {
    console.log('data:', data)
  }
}

fs.readFile(process.argv[2], 'utf8', readFinished)
console.log('----Readfile Finished----')
