/* eslint no-undef: 0 */

import sinon from 'sinon'

import api from '../../../src/util/api/geo'
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

describe('api utility geo codes', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getGeoByState()', () => {
    it('should be /geo/states/AB', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getGeoByState('AB').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/geo/states/AB'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getGeoByCounty()', () => {
    it('should be /geo/counties/54033', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getGeoByCounty(54033).then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/geo/counties/54033'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })
})
