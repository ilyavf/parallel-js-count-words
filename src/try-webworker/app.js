function makeWorker(){
  return worker = new Worker(System.stealURL + "?main=src/try-webworker/worker");
}

const w1 = makeWorker();
const w2 = makeWorker();

w1.onmessage = function(ev) {
  console.log('Worker 1 said: ', ev.data);
  if (ev.data === 'ready'){
    w1.postMessage('hey worker 1!')
  }
}
w2.onmessage = function(event) {
  console.log('Worker 2 said: ', event.data);
}
