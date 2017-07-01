// arr1_2.js
// 請用二分搜尋法搜尋一個已經排好序的陣列。
// find([ 1, 4, 5, 8, 9], 5) => 2 ,找不到時傳回 -1

var find = (arr, n) => {
  var start = 0
  var end = arr.length - 1

  while (start <= end) {
    var mid = Math.floor((start + end) / 2)
    console.log('start = %d, end = %d, mid = %d', start, end, mid)
    if (arr[mid] === n) {
      return mid
    } else if (arr[mid] > n) {
      end = mid - 1
    } else if (arr[mid] < n) {
      start = mid + 1
    }
  }
  return -1
}

var result = find([1, 4, 5, 8, 9], 6)
console.log('result =', result)
