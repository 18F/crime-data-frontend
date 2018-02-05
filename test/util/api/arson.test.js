/* eslint no-undef: 0 */

import sinon from 'sinon'

import api from '../../../src/util/api/arson'
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

describe('api utility arson', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getArsonNational()', () => {
    it('should be /arson/national', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getArsonNational().then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/arson/national'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(2)
        done()
      })
    })
  })

  describe('getArsonByRegion()', () => {
    it('should be /arson/region/northeast', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getArsonByRegion('northeast').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/arson/region/northeast'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(2)
        done()
      })
    })
  })

  describe('getArsonByState()', () => {
    it('should be /arson/states/AB', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getArsonByState('AB').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/arson/states/AB'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(2)
        done()
      })
    })
  })
})
