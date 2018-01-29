/* eslint no-undef: 0 */

import sinon from 'sinon'

import api from '../../../src/util/api/policeemployment'
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

describe('api utility police-employment', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getPoliceEmploymentNational()', () => {
    it('should be /police-employment/national', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getPoliceEmploymentNational().then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/police-employment/national'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getPoliceEmploymentByRegion()', () => {
    it('should be /police-employment/regions/northeast', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getPoliceEmploymentByRegion('northeast').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/police-employment/region/northeast'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getPoliceEmploymentByStateAbbr()', () => {
    it('should be /police-employment/states/AB', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getPoliceEmploymentByStateAbbr('AB').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/police-employment/states/AB'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getPoliceEmploymentByOri()', () => {
    it('should be /police-employment/agencies/FAKEORI', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getPoliceEmploymentByOri('FAKEORI').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/police-employment/agencies/FAKEORI'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })
})
