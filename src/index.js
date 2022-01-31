function run() {
  console.log('Hello World!');
}

if (require.main === module) {
  run();
}

module.exports = { run };