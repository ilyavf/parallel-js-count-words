let Task = require('data.task')

console.log('Worker app loaded!')

console.log('Task is ' + typeof Task);

postMessage('Hello from Worker!');