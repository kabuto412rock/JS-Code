// readfile.js
var fs = require('fs')
var data = fs.readFileSync(process.argv[2], 'utf8') // 同步讀檔
console.log(data)
