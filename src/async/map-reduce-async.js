const Task = require('data.task')
const { List } = require('immutable-ext')
const execTask = require('../helpers/exec')
const mapAsync = require('./map-async')
const reduceAsync = require('./reduce-async')
// const log = require('./logger')

// TYPES:
// Page = Object { url:String, text:String }
// PageRank = Object { url:String, rank:Number }

// fetchPage :: String -> Task Page
const fetchPage = url => Task.of({url, text: url.replace(/[plrc]/, ' ')})

// countWords :: Page -> Task PageRank
const countWords = page => Task.of({url: page.url, rank: page.text.split('').length})

// pageRank :: String -> Task PageRank
const pageRank = url =>
  fetchPage(url)
  .chain(countWords)

const urls = List([
  'http://ya.ru',
  'http://google.com'
])
// const urls = List([])

// calcSum :: PageRank -> PageRank -> Task PageRank
const calcSum = a => b => Task.of(a.rank >= b.rank ? a : b)

// MAIN APP:
const app = mapAsync(urls, pageRank)
  .map(pageRanks => {
    pageRanks.map(pageRank => console.log(pageRank.rank))
    return pageRanks
  })
  .chain(reduceAsync(calcSum)(0))

execTask(app)
