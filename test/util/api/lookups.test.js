/* eslint no-undef: 0 */

import sinon from 'sinon'

import api from '../../../src/util/api/lookups'
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

describe('api utility lookups', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getLookupRegion()', () => {
    it('should be /lookup/region', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getLookupRegion({ per_page: 100 }).then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/lookup/region'
        expect(spyArgs[0]).toContain(expectedUrl)
        expect(spyArgs.length).toEqual(2)
        done()
      })
    })
  })

  describe('getLookupState()', () => {
    it('should be /lookup/state', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getLookupState({ per_page: 100 }).then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/lookup/state'
        expect(spyArgs[0]).toContain(expectedUrl)
        expect(spyArgs.length).toEqual(2)
        done()
      })
    })
  })
})
