/**
 * Asynchronous map-reduce with a Web Worker
 *
 * @param Function mapper
 * @param Function reducer
 * @param List arr Input array data
 *
 * TYPES:
 *    Mapper a b :: a -> Task b
 *    Reducer a b :: b -> a -> Task b
 *    Input a :: List a
 */
const mapWorker = require('./map-worker')
const reduceAsync = require('../async/reduce-async')

// mapReduceWorker :: String -> Reducer -> Input
const mapReduceWorker = (mapperUrl, reducer, list) =>
  reduceAsync(reducer, mapWorker(mapperUrl, list))

module.exports = mapReduceWorker