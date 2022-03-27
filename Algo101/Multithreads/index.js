const worker = new Worker('./worker.js');
worker.postMessage('Hello, world!');