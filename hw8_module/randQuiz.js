var R = require('./randomLib')

/*
問題:   小華有6個蘋果
        給了大雄3個
        又給了小明2個
        請問小華還有幾個蘋果?

答案:   1個
*/
var peoples = ['小明', '小華', '小莉', '大雄']
var objects = ['蘋果', '橘子', '柳丁', '番茄']
var owner = People()
var object = Object()
var nOwn = R.randomInt(3, 20)

remove(peoples, owner)

function remove (array, item) {
  array.splice(array.indexOf(item), 1)
}
function MathTest () {
  return '問題:\t' + Own() + '\n\t' + Give() +
    '\n\t又' + Give() + '\n\t' + Question()
}
function Own () {
  return owner + '有' + nOwn + '個' + object
}

function Give () {
  var nGive = R.randomInt(1, nOwn)
  nOwn -= nGive
  return '給了' + People() + nGive + '個' + object
}

function Question () {
  return '請問' + owner + '還有幾個' + object + '?'
}

function People () {
  return R.sample(peoples)
}

function Object () {
  return R.sample(objects)
}

console.log(MathTest())
console.log('答案:\t%d個', nOwn)
