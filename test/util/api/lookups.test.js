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
      api.getLookupRegion().then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/lookup/region'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getLookupState()', () => {
    it('should be /lookup/state?per_page=100', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getLookupState(100).then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/lookup/state?per_page=100'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })
})