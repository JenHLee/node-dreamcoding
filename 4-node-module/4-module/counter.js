let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

module.exports.getCount = getCount;
module.exports.increase = increase;
console.log(module); //exports: { getCount: [Function: getCount], increase: [Function: increase] }