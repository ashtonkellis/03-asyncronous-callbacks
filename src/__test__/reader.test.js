'use strict';

const fs = require('fs');
const reader = require('./../lib/reader');

const mockText1 = `${__dirname}/./mock-assets/1.txt`;
const mockText2 = `${__dirname}/./mock-assets/2.txt`;
const mockText3 = `${__dirname}/./mock-assets/3.txt`;

describe('#READER: file reader module that reads exactly tree files', () => {
  let mockData;
  beforeAll(() => {
    mockData = [
      fs.readFileSync(mockText1, { encoding: 'utf-8' }),
      fs.readFileSync(mockText2, { encoding: 'utf-8' }),
      fs.readFileSync(mockText3, { encoding: 'utf-8' }),
    ];
  });

  test('#READER: returns the mock data in the correct order', () => {
    const testPaths = [mockText1, mockText2, mockText3];
    reader(testPaths, (err, data1, data2, data3) => {
      expect(data1).toEqual(mockData[0]);
      expect(data2).toEqual(mockData[1]);
      expect(data3).toEqual(mockData[2]);
    });
  });
});

// Testing
// File Reader Module Tests
// Use describe and it (or test) methods to define descriptive tests and increase readability
// Each it callback should aim to test a small, well defined, feature of a function
// Write tests to ensure that the reader function rejects errors with invalid file paths
// Write tests to ensure that the reader function correctly resolves mapped string data for an array of file paths
// Feature Tasks
// File Reader Module
// In the lib/ directory create a reader.js module that exports a single function. The reader module should take an array of three file paths and resolve a mapped array of strings loaded from each file using an error-first callback. The string data should be in the same order as the file path data (mapped). If an error occurs, it should immediately reject the error using the callback and stop execution.
