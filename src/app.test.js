const app = require('./app');

test('should return greeting message', () => {
  const result = app('Test');
  expect(result).toBe('Hello, Test');
});