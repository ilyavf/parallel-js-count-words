/**
 * Sequential map-reduce (synchronous)
 * @param Function mapper
 * @param Function reducer
 * @param Array arr Input arrayt data
 */

// map_reduce_seq :: Mapper -> Reducer -> Input
const map_reduce_seq = (mapper, reducer, arr) =>
  reduce_seq(reducer, mapper_seq(mapper, arr))

// mapper_seq :: (a -> b) -> List a -> List b
mapper_seq = (mapper, arr) =>
  arr.map(mapper)

// reduce_seq :: Reducer a b -> List a -> b
const reduce_seq = (reducer, arr) =>
  arr.reduce(reducer)

// mapperMult :: a -> a
const mapperMult = el => el * 5

// reducerSum :: a -> a -> a
const reducerSum = (acc, el) => acc + el

const arr = [1, 2, 3]
const res = map_reduce_seq(mapperMult, reducerSum, arr)
console.log(res);