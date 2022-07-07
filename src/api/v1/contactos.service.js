module.exports = {
    name: 'calc-service',
    version: '1.0.0',
    init: () => {
      // each exposed APIs could also return a promise/be async
      add: (a, b) => a + b,
      subtract: (a, b) => a - b
    }
  }