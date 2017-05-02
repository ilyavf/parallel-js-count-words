function makeWorker(){
  return worker = new Worker(System.stealURL + "?main=src/try-webworker/worker");
}

const w1 = makeWorker();
const w2 = makeWorker();

w1.onmessage = function(event) {
  console.log('Worker 1 said: ', event.data);
}
w2.onmessage = function(event) {
  console.log('Worker 2 said: ', event.data);
}