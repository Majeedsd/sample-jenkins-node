const { sum } = require('./sum');

function main() {
  console.log("Sum of 2 and 3 is:", sum(2, 3));
}

if (require.main === module) {
  main();
}

module.exports = { main };
