const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Lucas',
      profession: 'developer',
    };

    queryString(obj);
    expect(queryString(obj)).toBe('name=Lucas&profession=developer');
  });
});

it('should create a valid query string even when an array is passed as value', () => {
  const obj = {
    name: 'Lucas',
    abilities: ['JS', 'Vue.js'],
  };

  expect(queryString(obj)).toBe('name=Lucas&abilities=JS,Vue.js');
});

it('should throw an error when an object is passed as value', () => {
  const obj = {
    name: 'Lucas',
    abilities: {
      first: 'JS',
      second: 'Vue.js',
    },
  };

  expect(() => {
    queryString(obj);
  }).toThrowError();
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Lucas&profession=developer';
    expect(parse(qs)).toEqual({
      name: 'Lucas',
      profession: 'developer',
    });
  });
  it('should convert a query string of a single key-value pair to object', () => {
    const qs = 'name=Lucas';
    expect(parse(qs)).toEqual({
      name: 'Lucas',
    });
  });
});
