var fs = require('fs')
var path = require('path')

function listDir (dir) {
  fs.readdir(dir, function (err, files) {
    if (err) throw err

    files.forEach(function (file, index, array) {
      // 檔案的完整路徑
      var FULL_FILE_PATH = path.join(dir, file)
      // 判斷是否為 目錄 or 檔案
      fs.stat(FULL_FILE_PATH, function (err, stats) {
        if (index === 0) {
          console.log('[dir] %s', dir)
        }
        if (err) throw err
        if (stats.isDirectory()) {
          // 列出該目錄的列表
          console.log('\t[dir] %s', file)
          listDir(FULL_FILE_PATH)
        } else {
          console.log('\t%s', file)
        }
      })
    })
  })
}

listDir(process.argv[2])
