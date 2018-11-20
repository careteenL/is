import 'mocha'
import { expect } from 'chai'

import * as Is from '../src/index'

describe('is ', () => {
  it('isUndefined', () => {
    expect(Is.isUndefined(undefined)).to.equal(true)
  })

})
