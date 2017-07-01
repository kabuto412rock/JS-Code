// 請在一個已經排序的陣列中之正確位置插入一個數值。
var insert = (arr, n) => {
  for (var i = 0; i < arr.length; i++) {
    if (n < arr[i]) {
      // i 擺前面
      arr.splice(i, 0, n)
      break
    }
  }
  return arr
}

var result = insert([1, 2, 5, 6, 7], 3)
console.log('result = ', result)
