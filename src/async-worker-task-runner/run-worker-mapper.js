// Note: steal adds `process` to global, and Task checks it.
window.process.nextTick = setTimeout

const { List } = require('immutable-ext')
const mapReduceWorker = require('./map-reduce-worker')
const reducer = require('../async/reducer-calc-sum')
const { execTask } = require('worker-task-runner/src/helpers')
const testData = require('../async/data')

const mapperUrl = 'src/async/mapper-fetch-rank'

const list = List(testData)

const app = mapReduceWorker(mapperUrl, reducer, list)

execTask(app)
