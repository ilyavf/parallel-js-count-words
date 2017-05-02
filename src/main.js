const Task = require('data.task')
const { List } = require('immutable-ext')
const execTask = require('./exec')
const mapper = require('./mapper')
const reducer = require('./reducer')
// const log = require('./logger')

// TYPES:
// Page = Object { url:String, text:String }
// PageRank = Object { url:String, rank:Number }

// getPage :: String -> Task Page
const getPage = url => Task.of({url, text: url.replace(/[plrc]/, ' ')})

// countWords :: Page -> Task PageRank
const countWords = page => Task.of({url: page.url, rank: page.text.split('').length})

// pageRank :: String -> Task PageRank
const pageRank = url =>
  getPage(url)
  .chain(countWords)

const urls = List([
  'http://ya.ru',
  'http://google.com'
])
// const urls = List([])

// calcSum :: PageRank -> PageRank -> Task PageRank
const calcSum = a => b => Task.of(a.rank >= b.rank ? a : b)

// MAIN APP:
const app = mapper(urls, pageRank)
  .map(pageRanks => {
    pageRanks.map(pageRank => console.log(pageRank.rank))
    return pageRanks
  })
  .chain(reducer(calcSum)(0))

execTask(app)
