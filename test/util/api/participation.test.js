/* eslint no-undef: 0 */

import sinon from 'sinon'

import api from '../../../src/util/api/participation'
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

describe('api utility participation', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getParticipationNational()', () => {
    it('should be /participation/national', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getParticipationNational().then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/participation/national'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getParticipationByRegion()', () => {
    it('should be /participation/regions/northeast', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getParticipationByRegion('northeast').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/participation/regions/northeast'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getParticipationByState()', () => {
    it('should be /participation/states/AB', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getParticipationByState('AB').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/participation/states/AB'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })
})
