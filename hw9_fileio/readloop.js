var readline = require('readline')
var rl = readline.createInterface({input: process.stdin, output: process.stdout})

rl.setPrompt('小波流> ')
rl.prompt()

rl.on('line', function (line) {
  switch (line.trim()) {
    case 'hello':
      console.log('world!')
      break
    default:
      console.log('Say what? I might have heard `' + line.trim() + '`')
      break
  }
  rl.prompt()
}).on('close', function () {
  console.log('Have a good day!')
  process.exit(0)
})
