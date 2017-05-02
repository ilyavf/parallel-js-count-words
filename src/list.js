const Task = require('data.task')
const { List } = require('immutable-ext')
const execTask = require('./exec')
const fs = require('fs')

const arr = [1, 2, 3]

const list = List(arr)

// task :: a -> Task a
const task = a => {
  console.log('task a: ', a)
  return Task.of(a * 2)
}

execTask(list.traverse(Task.of, task))
