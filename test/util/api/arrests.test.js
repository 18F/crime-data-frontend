/* eslint no-undef: 0 */

import sinon from 'sinon'

import api from '../../../src/util/api/arrests'
import * as http from '../../../src/util/http'

const createPromise = (res, err) => {
  if (!err) return Promise.resolve(res)
  return Promise.reject(err)
}

const success = {
  pagination: {
    page: 1,
    pages: 5,
  },
  results: [{ type: 'fake' }],
}

describe('api utility codes', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getArrestsNational()', () => {
    it('should be /arrests/national', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getArrestsNational().then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/arrests/national'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })
})
