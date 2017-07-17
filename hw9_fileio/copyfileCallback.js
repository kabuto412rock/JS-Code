var fs = require('fs')
var log = console.log

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    return log('讀取檔案失敗...')
  }
  log('讀取檔案完成...')
  log('data:', data)
  fs.writeFile(process.argv[3], data, (err) => {
    if (err) {
      return log('寫入檔案失敗...')
    }
    log('檔案寫入完成')
  })
}
)
