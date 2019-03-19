module.exports = function getZerosCount(number, base) {
  let zeroCount = Number.MAX_VALUE; 
  for (let s = 2; s <= base; s++) {
    if (base % s === 0) {
      let count = 0;
      while (base % s === 0) {
         base = base / s;     
         count++;
      }
      let divd = Math.floor(number / s);
      let val = 0;
      while (divd > 0) {
        val += divd;
        divd = Math.floor(divd / s);
      }      
      zeroCount = Math.min(zeroCount, Math.floor(val / count));
    }
  }
  return zeroCount;
}