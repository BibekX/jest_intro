let customMatcher = expect.extend({
  timesTen(received, result1) {
    if (received * 10 === result1) {
      return {
        pass: true,
        message: () => `Expected ${received} to not equal to ${result1}`,
      };
    } else {
      return {
        pass: false,
        message: () => `Expected ${received} to equal to ${received * 10}`,
      };
    }
  },
});

module.exports = customMatcher;
