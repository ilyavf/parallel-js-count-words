var worker = new Worker(System.stealURL + "?main=src/try-webworker/worker");

worker.onmessage = function(event) {
  console.log('Worder said: ', event.data);
}