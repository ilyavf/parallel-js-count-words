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

// mapperSeq :: (a -> b) -> List a -> List b
const mapperSeq = (mapper, arr) =>
  arr.map(mapper)

// reduceSeq :: Reducer a b -> List a -> b
const reduceSeq = (reducer, arr) =>
  arr.reduce(reducer)

// mapperMult :: a -> a
const mapperMult = el => el * 5

// reducerSum :: a -> a -> a
const reducerSum = (acc, el) => acc + el

// mapReduceSeq :: Mapper a b -> Reducer c b -> Input c
const mapReduceSeq = (mapper, reducer, arr) =>
  reduceSeq(reducer, mapperSeq(mapper, arr))

const arr = [1, 2, 3]
const res = mapReduceSeq(mapperMult, reducerSum, arr)
console.log(res)
