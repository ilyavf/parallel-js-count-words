const Task = require('data.task');
const futurize = require('futurize').futurize(Task)
const { List } = require('immutable-ext')
const execTask = require('./exec');
const fs = require('fs');

const readFile = futurize(fs.readFile)
const files = [
  __dirname + '/exec.js',
  __dirname + '/task.js'
]
const list = List(files)

// const res = files.map(fileName => execTask(readFile(fileName, 'utf-8')))
const res = list.traverse(Task.of, readFile)

execTask(res)
