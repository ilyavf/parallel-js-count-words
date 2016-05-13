# Parallel JS - Count words

Exercise: count words on the fetched pages
- given a list of URLs
- fetch each URL
- count words on each page
- reduce to the list ordered by the word count number

Plan:
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

