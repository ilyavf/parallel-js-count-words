/**
 Exercise: count words on the fetched pages
 - given a list of URLs
 - fetch each URL
 - count words on each page
 - reduce to the list ordered by the word count number
 */

var URLs = [
  'https://www.google.ca/?gws_rd=ssl',
  'https://ca.yahoo.com/',
  'http://www.bing.com/?cc=ca'
]

function main () {
  mapReduce(fetchAndCount, sortByCount, URLs).then(res => {
    console.log('asyncMapReduce: \n' + res)
  })
}

// mapReduce :: (a -> promise<b>) -> ([b] -> promise<c>) -> [a] -> promise<c>
function mapReduce (mapper, reducer, list) {
  return new Promise((resolve, reject) => {
    Promise.all(list.map(mapper)).then(results => {
      reducer(results).then(resolve)
    })
  })
}

function asyncMap (fn, list) {

}

function parMap () {

}

// fetchAndCount :: string -> promise<string,integer>
function fetchAndCount (url) {
  return new Promise((resolve, reject) => {
    resolve({
      url: url,
      count: parseInt(Math.random(10) * 1000)
    })
  })
}

// sortByCount :: [b] -> promise<c>
function sortByCount (list) {
  return new Promise((resolve, reject) => {
    resolve(
      list.sort((a, b) => { return a.count < b.count ? 1 : (a.count > b.count ? -1 : 1) })
        .map(a => `${a.count}:${a.url}`)
        .join(', \n')
    )
  })
}

// generateWord :: () -> string
function generateWord () {
  let words = ['hello', 'world', 'foo', 'bar', 'baz']
  return words[Math.round(Math.random() * 10) % words.length]
}
