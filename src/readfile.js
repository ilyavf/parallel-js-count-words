const Task = require('data.task')
const futurize = require('futurize').futurize(Task)
const { List } = require('immutable-ext')
const execTask = require('./exec')
const fs = require('fs')
const path = require('path')

const readFile = futurize(fs.readFile)
const files = [
  path.join(__dirname, '/exec.js'),
  path.join(__dirname, '/task.js')
]
const list = List(files)

// const res = files.map(fileName => readFile(fileName, 'utf-8'))
// console.log(res)
const res = list.traverse(Task.of, readFile)

execTask(res)
