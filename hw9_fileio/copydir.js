var fs = require('fs')
var path = require('path')

function copyDir (fromdir, todir) {
  // 如果目標資料夾不存在，就新建一個
  fs.stat(todir, function (err, stats) {
    if (err) {
      fs.mkdirSync(todir)
    }
  })

  fs.readdir(fromdir, function (err, files) {
    if (err) {
      console.error(err)
    }
    if (files.length === 0) { // 此目錄內是空的，在此印出
      // console.log('[%s] 空目錄', fromdir)
    } else {
      // 迭代該目錄底下的所有檔案/目錄
      files.forEach(function (file, index, array) {
        // 檔案的完整路徑
        var FULL_FILE_PATH = path.join(fromdir, file)
        var TODIR_FILE_PATH = path.join(todir, file)
        // 判斷名稱為 目錄 or 檔案
        fs.stat(FULL_FILE_PATH, function (err, stats) {
          if (err) throw err

          if (stats.isDirectory()) {
            // 該名稱為目錄
            // console.log('\t目錄', file)
            copyDir(FULL_FILE_PATH, TODIR_FILE_PATH)
          } else {
            // 該名稱為檔案
            // console.log('\t%s', file)
            fs.createReadStream(FULL_FILE_PATH).pipe(fs.createWriteStream(TODIR_FILE_PATH))
          }
        })
      })
    }
  })
}

copyDir(process.argv[2], process.argv[3])
