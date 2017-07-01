// 電腦隨機產生一個 n*n 的二維布爾值陣列。用程式檢驗該二維字元陣列中，縱行、橫列及兩條對角線，
// 「O(true)的bingo線」及「X(false)的bingo線」分別有多少條。
// 輸入 input：一個隨機產生的尺寸 n*n 之二維 Boolean 陣列；
// 輸出 output：兩個 integers 。

function creatArray (n) {
  var nArr = []
  for (var i = 0; i < n; i++) {
    var rArr = []
    for (var j = 0; j < n; j++) {
      if (Math.random() > 0.5) {
        rArr.push(true)
      } else {
        rArr.push(false)
      }
    }
    nArr.push(rArr)
  }
  return nArr
}

function bingoFind (arr) {
  var n = arr.length
  var i, j
  var bingoLines = [0, 0] // true bingo lines, false bingo lines

  // 每個row
  for (i = 0; i < n; i++) {
    var trueSum = 0
    var falseSum = 0
    for (j = 0; j < n; j++) {
      if (arr[i][j] === true) {
        trueSum++
      } else {
        falseSum++
      }
    }
    if (trueSum === n) {
      bingoLines[0] += 1
    } else if (falseSum === n) {
      bingoLines[1] += 1
    }
  }
  // 每個column
  for (i = 0; i < n; i++) {
    var trueSum = 0
    var falseSum = 0
    for (j = 0; j < n; j++) {
      if (arr[j][i] === true) {
        trueSum++
      } else {
        falseSum++
      }
    }
    if (trueSum === n) {
      bingoLines[0] += 1
    } else if (falseSum === n) {
      bingoLines[1] += 1
    }
  }
  // 左上到右下的對角線檢查
  var trueSum = 0
  var falseSum = 0
  for (i = 0; i < n; i++) {
    if (arr[i][i] === true) {
      trueSum++
    } else {
      falseSum++
    }
  }
  if (trueSum === n) {
    bingoLines[0] += 1
  } else if (falseSum === n) {
    bingoLines[1] += 1
  }
  // 右上到左下的對角線檢查
  trueSum = 0
  falseSum = 0
  for (i = 0; i < n; i++) {
    if (arr[i][arr.length - i - 1] === true) {
      trueSum++
    } else {
      falseSum++
    }
  }
  if (trueSum === n) {
    bingoLines[0] += 1
  } else if (falseSum === n) {
    bingoLines[1] += 1
  }
  return bingoLines
}

var input = creatArray(3)
console.log('input:\n', input)
console.log('output:\n', bingoFind(input))
