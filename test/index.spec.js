import 'mocha'
import { expect } from 'chai'

import * as Is from '../src/index'

describe('is ', () => {
  it('isUndefined', () => {
    expect(Is.isUndefined(undefined)).to.equal(true)
  })

  it('isEqual', () => {
    const preData = {
      name: 'careteen',
      age: 22
    }
    const expectData = {
      name: 'careteen',
      age: 22
    }  
    expect(Is.isEqual(preData, expectData)).to.equal(true)
  })  

})
