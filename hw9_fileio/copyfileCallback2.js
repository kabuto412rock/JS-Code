var fs = require('fs')
var print = console.log

fs.readFile('copyfileCallback2.js', 'utf8', function (err, data) {
  if (err) {
    return print('第一次讀取出錯')
  }
  print('讀取完成')
  fs.writeFile('copyfileCallback2.js2', data, function (err) {
    if (err) {
      return print('第一次寫入檔案出錯')
    }
    print('寫入完成')
    fs.readFile('copyfileCallback2.js2', 'utf8', function (err, data) {
      if (err) {
        return print('第二次讀取出錯')
      }
      print('又讀取完成')
      fs.writeFile('copyfileCallback2.js3', data, function (err) {
        if (err) {
          return print('第二次寫入檔案出錯')
        }
        print('又寫入完成')
        print('data:', data)
      })
    })
  })
})
