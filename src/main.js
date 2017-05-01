const Task = require('data.task');

// toTask :: a -> Task(a)
const toTask = (result = 'mocked task') => new Task((rej, res) => res(result))

// getPage :: String -> Task(String)
const getPage = url => toTask('some text here')

// countWords :: String -> Task(Number)
const countWords = text => toTask(text.split(' ').length)

let url = 'http://google.com'

// appCount :: String -> Task(Number)
const appCount = url =>
  getPage(url)
  .chain(countWords)

// execTask :: Task(a) -> IO()
const execTask = t =>
  t.fork(e => console.log('error: ', e),
    x => console.log('x: ', x))

execTask(appCount(url))

const urls = [
  'http://google.com',
  'http://ya.ru'
]

// mapper :: Array(String) -> (String -> Task(Number)) -> Task(Array(Number))
const mapper = (arr, func) =>
  arr.map(func)

const app = mapper(urls, appCount)
