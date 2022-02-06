import fetch from 'node-fetch';

const promise = fetch('https://eloux.com/async_js/examples/1.json');

promise.then(result => {
  // process;
  const response = result.json();
  return response;
}).catch(err => {
  console.error(err);
});

