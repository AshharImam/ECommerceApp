import {jest} from '@jest/globals';
import {products} from './constants';

var customFetch = jest.fn((url = '', config) => {
  return new Promise((resolve, reject) => {
    const isProducts = /products/.test(url);
    if (isProducts) {
      process.nextTick(() =>
        resolve({
          status: 200,
          json: () => {
            return products;
          },
        }),
      );
    }
  });
});

module.exports = customFetch;
