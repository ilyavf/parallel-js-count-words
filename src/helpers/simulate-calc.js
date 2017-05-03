module.exports = t => {
  const start = Date.now()
  while (Date.now() - start < t * 1000) {}
}