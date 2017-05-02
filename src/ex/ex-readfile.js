const Task = require('data.task')
const futurize = require('futurize').futurize(Task)
const { List } = require('immutable-ext')
const execTask = require('../helpers/exec')
const fs = require('fs')
const path = require('path')

const readFile = futurize(fs.readFile)
const files = [
  path.join(__dirname, '/../helpers/exec.js'),
  path.join(__dirname, '/../helpers/logger.js')
]
const list = List(files)

// const res = files.map(fileName => readFile(fileName, 'utf-8'))
// console.log(res)
const res = list.traverse(Task.of, readFile)

execTask(res)
