const async = require('async');

async.parallel([
  function(callback) {
    setTimeout(function() {
      console.log('Task one');
      callback(null, 1);
    }, 200);
  },

  function(callback) {
    setTimeout(function() {
      console.log('Task two');
      callback(null, 2);
    }, 100);
  }
],
function(err, results) {
  console.log(results);
});