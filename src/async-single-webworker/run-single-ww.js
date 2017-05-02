const { List } = require('immutable-ext')
const mapReduceAsync = require('../async/map-reduce-async')
const mapper = require('../async/mapper-fetch-rank')
const reducer = require('../async/reducer-calc-sum')
const execTask = require('../helpers/exec')
const log = require('../helpers/logger')

const list = List([
  'http://google.com',
  'http://ya.ru'
])

const app = mapReduceAsync(a => mapper(a).map(log('map')), reducer, list)

execTask(app)