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
];

function main(){
  asyncMapReduce(fetchAndCount, sortByCount, URLs).then(res => {
    console.log('asyncMapReduce', res);
  });
}

// sync:
function mapReduce(fn1, fn2, list){
  return list.map(fn1).reduce(fn2);
}

//async:
function asyncMapReduce(fn1, fn2, list){
  return new Promise((resolve, reject) => {
    Promise.all(list.map(fn1)).then(results => {
      resolve(results.reduce(fn2));
    });
  });
}

function asyncMap(fn, list){

}

function parMap(){

}

// fetchAndCount :: string -> promise<string,integer>
function fetchAndCount(url){
  return new Promise((resolve, reject) => {
    resolve({
      url: url,
      count: parseInt(Math.random(10)*1000)
    });
  });
}

function sortByCount(acc, list){

}