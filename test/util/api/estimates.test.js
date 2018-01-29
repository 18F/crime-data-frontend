/* eslint no-undef: 0 */

import sinon from 'sinon'

import api from '../../../src/util/api/estimates'
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

describe('api utility estimates', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getEstimatesNational()', () => {
    it('should be /estimates/national', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getEstimatesNational().then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/estimates/national'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getEstimatesByRegion()', () => {
    it('should be /estimates/regions/northeast', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getEstimatesByRegion('northeast').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/estimates/regions/northeast'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getEstimatesByState()', () => {
    it('should be /estimates/states/AB', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getEstimatesByState('AB').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/estimates/states/AB'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })
})
