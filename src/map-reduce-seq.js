// map_reduce_seq :: Mapper -> Reducer -> Input
const map_reduce_seq = (mapper, reducer, arr) =>
  reduce_seq(reducer, arr.map(mapper))

// reduce_seq :: Reducer -> Input -> Output
const reduce_seq = (reducer, arr) =>
  arr.reduce(reducer)

const arr = [1, 2, 3]

const mapperMult = el => el * 5

const reducerSum = (acc, el) => acc + el

const res = map_reduce_seq(mapperMult, reducerSum, arr)

console.log(res);