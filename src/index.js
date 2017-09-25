function makeFactorArr(factorial, decrement){
    const factorArr = [];
    for (let i = factorial; i >= 1; i-=decrement) {
        factorArr.push(i);
    }
    return factorArr;
}

function getFactorQty(factorArr, targetFactor) {
    let targetFactorQty = 0;
    factorArr.forEach(factor => {
        if (factor === targetFactor) {
            targetFactorQty = targetFactorQty + 1;
        } else if (!(factor % targetFactor) && factor > targetFactor){
            return targetFactorQty = targetFactorQty + getFactorQty([factor/targetFactor, targetFactor], targetFactor);
        }
    });
    return targetFactorQty;
}

module.exports = function zeros(expression) {
  const factorialArr = expression.split('*');
  let deuces = 0;
  let fives = 0;

  factorialArr.forEach(factor => {
      let factorArr = [];
      if(factor.match(/\d+!{2}/)) {
          const factorNumber = parseInt(factor.slice(0, -2));
          factorArr = makeFactorArr(factorNumber, 2);
      } else {
          const factorNumber = parseInt(factor.slice(0, -1));
          factorArr = makeFactorArr(factorNumber, 1);
      }
      fives  = fives + getFactorQty(factorArr, 5);
      deuces = deuces + getFactorQty(factorArr, 2);
  });

    return Math.min(deuces, fives);
};
