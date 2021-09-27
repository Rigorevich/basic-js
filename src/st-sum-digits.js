import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  let temp = 0
  let str = n.toString()
  let bool = true
  while(bool) {
    for (let i = 0; i < str.length; i++) {
      temp += +str[i]
    }
    if (temp / 10 < 1) bool = false
    else {
      str = temp.toString()
      temp = 0
    }
  }
  return temp
}
