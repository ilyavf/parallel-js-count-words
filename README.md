# Parallel JS - Count words

## Intro

### Exercise: count words on the fetched pages
- given a list of URLs
- fetch each URL
- count words on each page
- reduce to the list ordered by the word count number

### Plan:
- tasks:
    - create basics without parallelization;
    - replace map with parMap
    - compare performance
- main:
    - mapReduce(fn1, fn2, list)
    - map(fn, list)
    - reduce(fn, list)
    - parMap
- primitives:
    - createWebworker

### Modules:
- Main module: `worker-map-reduce`
- Web worker task runner: `worker-task-runner`
  - make two versions: Task and Promise based

## Test

### To test the asynchronous version:
```
$ node src/async/run-async.js
[reduceAsync]
...
Exec: took 10.002 seconds.
Result:  { url: 'http://google.com', text: 'htt //goog . m', rank: 4 }
```

### To test mapping with workers open in browser:
`http://localhost:8080/src/async-single-webworker/test.html`

The output in console:
```
[mapReduceWorker] starting...
createWorkerPool (5)
scheduleWorkers (src/async/mapper-fetch-rank, data=5, workers=5)
...
Exec: took 2.355 seconds.
Result:  Object {url: "http://google.com", text: "htt //goog . m", rank: 4}
```
