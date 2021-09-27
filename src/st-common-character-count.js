import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {

  const one = {}, two  = {}

  for (let i = 0; i < s1.length; i++) {
    if (!one[s1[i]]) one[s1[i]] = 0
    one[s1[i]]++
  }
  for (let i = 0; i < s2.length; i++) {
    if (!two[s2[i]]) two[s2[i]] = 0
    two[s2[i]]++
  }

  let result = 0
  Object.keys(one).forEach((el) => {
    if (two[el])
      result += Math.min(two[el], one[el])
  })

  return result
}
