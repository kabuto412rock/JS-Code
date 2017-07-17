// copyfileAsync2.js
var fs = require('fs')
var async = require('async')
var text = null

async.series(
  function (callback) {
    fs.readFile('copyfileAsync3.js', 'utf8', function (err, data) {
      if (err) {
        console.log('讀取檔案出錯')
      } else {
        console.log('讀取完成')
        text = data
        callback()
      }
    })
  },
  function (callback) {
    fs.writeFile('copyfileAsync2.js2', text, function (err, data) {
      if (err) {
        console.log('寫入檔案出錯')
      } else {
        console.log('寫入完成！')
        callback()
      }
    })
  }
)
