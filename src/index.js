module.exports = function getZerosCount(number, base) {
  zeroCount = Number.MAX_VALUE; 
  for (var s = 2; s <= base; s++) {
    if (base % s === 0) {
      var count = 0;
      while (base % s === 0) {
         base = base / s;     
         count++;
      }
      var divd = Math.floor(number / s);
      var val = 0;
      while (divd > 0) {
        val += divd;
        divd = Math.floor(divd / s);
      }      
      zeroCount = Math.min(zeroCount, Math.floor(val / count));
    }
  }
  return zeroCount;
}