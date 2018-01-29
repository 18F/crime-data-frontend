/* eslint no-undef: 0 */

import sinon from 'sinon'

import api from '../../../src/util/api/humantraffic'
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

describe('api utility human-traffic', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getHumanTrafficAgencies()', () => {
    it('should be /ht/agencies', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getHumanTrafficAgencies().then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/ht/agencies'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getHumanTrafficStates()', () => {
    it('should be /ht/states', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getHumanTrafficStates().then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/ht/states'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })
})
