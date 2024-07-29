module.exports = function reverse(n) {
  let number = n < 0 ? -n : n
  
  return Number(number.toString().split('').reverse().join(''))
}
