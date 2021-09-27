import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chainMaker: [],

  getLength() {
    return this.chainMaker.length
  },

  addLink(value) {
    if (String(value) ) {
      this.chainMaker.push(`( ${value} )`);
    } else {
      this.chainMaker.push(`( )`);
    }
    return this;
  },

  removeLink(position) {
    if (position > this.chainMaker.length || position <= 0 || typeof position !== 'number') {
      this.chainMaker = []
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chainMaker.splice(position - 1, 1)
    return this
  },

  reverseChain() {
    this.chainMaker.reverse()
    return this
  },

  finishChain() {
    const result = this.chainMaker.join('~~')
    this.chainMaker = []
    return result
  }
};
