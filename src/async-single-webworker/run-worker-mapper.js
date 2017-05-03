// Note: steal adds `process` to global, and Task checks it.
window.process.nextTick = setTimeout

const { List } = require('immutable-ext')
const mapReduceWorker = require('./map-reduce-worker')
// const mapper = require('../async/mapper-fetch-rank')
const reducer = require('../async/reducer-calc-sum')
const execTask = require('../helpers/exec')
const testData = require('../async/data')
// const log = require('../helpers/logger')

const mapperUrl = 'src/async/mapper-fetch-rank'

const list = List(testData)

const app = mapReduceWorker(mapperUrl, reducer, list)

execTask(app)
