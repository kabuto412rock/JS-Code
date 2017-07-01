var e2c = {dog: '狗', cat: '貓', a: '一隻', chase: '追', eat: '吃'}

function look (e) {
  return e2c[e]
}

var e = process.argv[2]
var c = look(e)
console.log(e + '=' + c)
