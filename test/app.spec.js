import {assert} from 'chai';
import {expect} from 'chai';
import add from '../src/add';

describe('dummy test suite',() => {
   it('true equals true',() => {
     assert(true, true);
   });

   it('should add two number',() => {
     expect(add(3,4)).to.be.equal(7);
   });
});