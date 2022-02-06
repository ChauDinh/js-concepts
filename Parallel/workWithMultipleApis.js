/**
 * Retrieving URLs separately
 */

import fetch from 'node-fetch';

const srcArr = [
  'https://eloux.com/async_js/examples/1.json',
  'https://eloux.com/async_js/examples/2.json',
  'https://eloux.com/async_js/examples/3.json',
];

srcArr[Symbol.asyncIterator] = function() {
  let i = 0;
  return {
    async next() {
      if (i === srcArr.length) {
        return {
          done: true
        }
      } else {
        const url = srcArr[i++];
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Unable to retrieve URL: ' + url);
        }

        return {
          value: await response.json(),
          done: false
        }
      }
    }
  }
}

const iterator = srcArr[Symbol.asyncIterator]();

iterator.next().then(result => {
  console.log(result.value.firstName);
});

iterator.next().then(result => {
  console.log(result.value.firstName);
});

iterator.next().then(result => {
  console.log(result.value.firstName);
});