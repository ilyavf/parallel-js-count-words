// log :: a -> a
const log = msg => a => {
  console.log('log: ' + msg, a)
  return a
}
module.exports = log
