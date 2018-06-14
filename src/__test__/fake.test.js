'use strict';

const fake = require('./../lib/fake');

describe('testing links', () => {
  test('fake function', () => {
    expect(fake()).toBe('working');
  });
});
