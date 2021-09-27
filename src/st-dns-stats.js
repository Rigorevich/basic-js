import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let dns = {}, key = ''
  for (let i = 0; i < domains.length; i++) {
    const current = domains[i].split('.')
    for (let k = current.length - 1; k >= 0; k--) {
      key += `.${current[k]}`
      if (!dns[key]) {
        dns[key] = 0
        dns[key]++
      } else dns[key]++
    }
    key = ''
  }
  return dns
}

console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']))
