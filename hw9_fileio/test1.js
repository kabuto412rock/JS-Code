var fs = require('fs')
var data = fs.readFileSync(process.argv[2], 'utf8')
console.log(data.toString())

fs.writeFileSync(process.argv[3], data)

console.log('複製檔案完成')
