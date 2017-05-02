/**
 * Sequential map-reduce (synchronous)
 *
 * @param Function mapper
 * @param Function reducer
 * @param Array arr Input array data
 *
 * TYPES:
 *    Mapper a b :: a -> b
 *    Reducer a b :: b -> a -> b
 *    Input a :: List a
 */

// map_reduce_seq :: Mapper a b -> Reducer c b -> Input c
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