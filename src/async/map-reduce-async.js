/**
 * Asynchronous map-reduce
 */

const mapAsync = require('./map-async')
const reduceAsync = require('./reduce-async')

// mapReduceAsync :: Mapper -> Reducer -> Input
const mapReduceAsync = (mapper, reducer, arr) =>
  reduceAsync(reducer, mapAsync(mapper))