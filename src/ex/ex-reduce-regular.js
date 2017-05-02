// asyncSum :: Num -> Num -> Promise
function asyncSum (acc, a) {
  return new Promise(function (resolve, reject) {
    resolve(acc + a)
  })
}

let arr = [1, 2, 3]

// reduce :: List -> (a -> Promise a) -> a -> Promise a
let reduce = (arr, asyncFn, initValue) =>
  arr.length === 0
    ? Promise.resolve(initValue)
    : asyncFn(initValue, arr[0]).then(
      a => reduce(arr.slice(1, arr.length), asyncFn, a)
    )

reduce(arr, asyncSum, 0).then(a => console.log('Result: ' + a))
