import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let index = 0
  for (let i = email.length; i >= 0; i--) {
    if (email[i] === '@') {
      index = i
      break
    }
  }
  return email.substring(index + 1, email.length)
}
