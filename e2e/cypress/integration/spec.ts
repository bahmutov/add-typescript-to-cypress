/// <reference types="cypress" />
import {foo} from './utils/foo'
import {foo as bar} from "@utils/foo"

it('works', () => {
  expect(2).to.equal(2)
  expect(foo).to.equal('foo')
  expect(bar).to.equal('foo')
})
