let Task = require('data.task')

console.log('Worker app loaded!')

console.log('Task is ' + typeof Task);

onmessage = function(ev) {
  console.log('Worker received a message: ',  ev);
};

postMessage('ready');