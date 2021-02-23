module.exports = class DepthCalculator {
  calculateDepth(arr) {
      return Array.isArray(arr) ? 1 + Math.max(...arr.map(t => this.calculateDepth(t))) : 0;
    }
};