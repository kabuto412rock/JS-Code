// plook.js
var dict = {
  '小丸子': {
    age: 86,
    phone: '082312334',
    email: 'won@gmail.com'
  },
  '小古': {
    age: 21,
    phone: '0939575555',
    email: 'kabuto412run@gmail.com'
  }
}

var userName = process.argv[2]
var userData = dict[userName]

if (typeof (userData) === 'undefined') {
  console.log('查不到')
} else {
  console.log('姓名:', userName)
  console.log('年齡:', userData.age)
  console.log('電話:', userData.phone)
  console.log('email:', userData.email)
}
