const arrayAnalysis = array => ({
  average: array.reduce((sum, value) => sum + value) / array.length,
  min: Math.min(...array),
  max: Math.max(...array),
  length: array.length,
});

module.exports = arrayAnalysis;