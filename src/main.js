const Task = require('data.task')
const { List } = require('immutable-ext')
const execTask = require('./exec')
const mapper = require('./mapper')
// const log = require('./logger')


// getPage :: String -> Task String
const getPage = url => Task.of(url)

// countWords :: String -> Task Number
const countWords = text => Task.of(text.split('').length)

// appCount :: String -> Task Number
const appCount = url =>
  getPage(url)
  .chain(countWords)

const urls = List([
  'http://google.com',
  'http://ya.ru'
])

// calcSum :: Number -> Number -> Task Number
const calcSum = a => b => Task.of(a + b)

// MAIN APP:
const app = mapper(urls, appCount)
  .chain(reducer(calcSum))

execTask(app)
