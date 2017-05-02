const { List } = require('immutable-ext')
const mapReduceAsync = require('./map-reduce-async')
const mapper = require('./mapper-fetch-rank')
const reducer = require('./reducer-calc-sum')
const execTask = require('../helpers/exec')
// const log = require('../helpers/logger')

const list = List([
  'http://google.com',
  'http://ya.ru'
])

const app = mapReduceAsync(mapper, reducer, list)

execTask(app)