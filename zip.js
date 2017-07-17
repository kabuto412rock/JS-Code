// require modules
var path = require('path')
var fs = require('fs')
var archiver = require('archiver')
console.log(__dirname)
console.log(path.join('zip'))
// create a file to stream archive data to.
var output = fs.createWriteStream(path.join(__dirname, process.argv[2].concat('.zip')))
var archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
})

// listen for all archive data to be written
output.on('close', function () {
  console.log(archive.pointer() + ' total bytes')
  console.log('archiver has been finalized and the output file descriptor has closed.')
})

// good practice to catch warnings (ie stat failures and other non-blocking errors)
archive.on('warning', function (err) {
  if (err.code === 'ENOENT') {
    // log warning
  } else {
    // throw error
    throw err
  }
})

// good practice to catch this error explicitly
archive.on('error', function (err) {
  throw err
})
// 使用者輸入的內容 
var inputFilePath = path.join(__dirname, process.argv[2])

// pipe archive data to the file
archive.pipe(output)

archive.directory(inputFilePath, 'new-subdir')

archive.finalize()
