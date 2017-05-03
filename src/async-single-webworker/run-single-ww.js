const { List } = require('immutable-ext')
const mapReduceWorker = require('./map-reduce-worker')
// const mapper = require('../async/mapper-fetch-rank')
const reducer = require('../async/reducer-calc-sum')
const execTask = require('../helpers/exec')
// const log = require('../helpers/logger')

const mapperUrl = 'src/async/mapper-fetch-rank'

const list = List([
  'http://google.com',
  'http://ya.ru'
])

const app = mapReduceWorker(mapperUrl, reducer, list)

execTask(app)
