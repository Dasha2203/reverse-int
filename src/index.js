module.exports = function reverse (n) {
    let result = String(n).split("");
    if (result[0] === '-') {
        result.shift();
    }
  return Number(result.reverse().join(""))
}
