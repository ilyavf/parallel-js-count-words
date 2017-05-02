const Task = require('data.task')
const { List } = require('immutable-ext')
const execTask = require('./exec')

// log :: a -> a
const log = a => {
  console.log('log: ', a)
  return a
}

// getPage :: String -> Task(String)
const getPage = url => Task.of('some text here')

// countWords :: String -> Task(Number)
const countWords = text => Task.of(text.split(' ').length)

// appCount :: String -> Task(Number)
const appCount = url =>
  getPage(url)
  .chain(countWords)

const urls = List([
  'http://google.com',
  'http://ya.ru'
])

// mapper :: Array(String) -> (String -> Task(Number)) -> Task(Array(Number))
const mapper = (list, fTask) =>
  list.traverse(Task.of, fTask)

// MAIN APP:
const app = mapper(urls, appCount)

execTask(app)
