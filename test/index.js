import fetch from 'node-fetch';
import assert from 'assert';

describe('Wat', () => {
  beforeEach(() => require('babel-polyfill'));

  it('should return 200', () => {
    return fetch('http://127.0.0.1:1337')
    .then((res) => {
      assert.equal(200, res.status);
    });
  });
});
