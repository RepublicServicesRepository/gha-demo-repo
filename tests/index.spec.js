const { run } = require('../src/index.js');

test('Logs correct message', () => {
  //prepare
  console.log = jest.fn();

  //execute
  run();
  
  //assert
  expect(console.log)
    .toHaveBeenCalledWith('Hello There!');
});
