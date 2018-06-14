'use strict';

const fs = require('fs');

const reader = module.exports = (paths, callback) => { // eslint-disable-line
  const filePath1 = paths[0];
  const filePath2 = paths[1];
  const filePath3 = paths[2];
  
  return fs.readFile(filePath1, (err1, data1) => {
    if (err1) return callback(err1);
    return fs.readFile(filePath2, (err2, data2) => {
      if (err2) return callback(err2);
      return fs.readFile(filePath3, (err3, data3) => {
        if (err3) return callback(err3);
        return callback(null, data1.toString(), data2.toString(), data3.toString());
      });
    });
  });
};

// The reader module should take an array of three file paths and resolve a mapped array of strings loaded from each file using an error-first callback. 
// The string data should be in the same order as the file path data (mapped). 
// If an error occurs, it should immediately reject the error using the callback and stop execution.

// The file reader module should have the function signature (paths, callback) => undefined
// On failure, the file reader module should invoke the callback with an error callback(error)
// On success, the file reader module should invoke the callback with null as the first parameter and the result as the second parameter - callback(null, result)

