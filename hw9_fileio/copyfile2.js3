// copyfile2.js

var fs = require('fs')
var log = console.log
var data = fs.readFileSync('copyfile2.js')
log('=============copyfile.js==============')
log(data.toString())
fs.writeFileSync('copyfile2.js2', data)

var data2 = fs.readFileSync('copyfile2.js2')
log('=============copyfile2.js==============')
log(data2.toString())
fs.writeFileSync('copyfile2.js3', data2)
