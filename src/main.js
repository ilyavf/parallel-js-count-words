const Task = require('data.task');

// mockTask :: _ -> Task
const mockTask = (result = 'mocked task') => new Task((rej, res) => res(result))

// getPage :: String -> Task
const getPage = url => mockTask('some text here')

// countWords :: String -> Task
const countWords = text => mockTask(text.split(' ').length)

let url = 'http://google.com'

const app =
  getPage(url)
  .chain(countWords)

app.fork(e => console.log('error: ', e),
         x => console.log('x: ', x))