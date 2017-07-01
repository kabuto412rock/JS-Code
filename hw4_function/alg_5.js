// 請上網查詢何謂《泡沫排序法》，然後寫一個 javascript 程式可以用《泡沫排序法》對陣列進行排序。
// 範例： bobbleSort([1,7,2,8,5]) => [1,2,5,7,8]
function bobbleSort (arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr
}

console.log('bobbleSort([1,7,2,8,5]) =', bobbleSort([1, 7, 2, 8, 5]))
