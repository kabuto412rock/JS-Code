// 會出錯，因為匿名函數指派給變數，必須在呼叫前指派給某變數。
// 否則該行呼叫時，會找不到函數產生錯誤
console.log('add(3,5) =', add(3, 5))

var add = function (a, b) {
  return a + b
}
