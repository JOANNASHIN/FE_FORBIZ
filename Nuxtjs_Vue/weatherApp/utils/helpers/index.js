export function isInteger(num) {
  return num !== Infinity && parseInt(num) === num;
}

export function isPositiveInteger(num) {
  return isInteger(num) && num >= 0;
}
