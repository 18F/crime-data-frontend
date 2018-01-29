/* eslint no-undef: 0 */

import sinon from 'sinon'

import api from '../../../src/util/api/agencies'
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

describe('api utility agencies', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getAgencies()', () => {
    it('should be /agencies', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getAgencies().then(() => {
        const spyArgs = spy.args[0]
        const expectedUrl = '/api-proxy/agencies'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getAgencyDetails()', () => {
    it('should be /agencies/FAKEORI', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getAgencyDetails('FAKEORI').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/agencies/FAKEORI'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getAgencyParticipation()', () => {
    it('should be /agencies/participation', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getAgencyParticipation().then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/agencies/participation'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getAgencySumsByState()', () => {
    it('should be /agencies/count/states/suboffenses/AB', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getAgencySumsByState('AB').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/agencies/count/states/suboffenses/AB'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getAgencySumsByOri()', () => {
    it('should be /agencies/count/states/suboffenses/AB/FAKEORI', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getAgencySumsByOri('AB', 'FAKEORI').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/agencies/count/states/suboffenses/AB/FAKEORI'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getAgencySumsByCounty()', () => {
    it('should be /agencies/count/states/suboffenses/AB/counties/363', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getAgencySumsByCounty('AB', 363).then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/agencies/count/states/suboffenses/AB/counties/363'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getAgencyOffensesByState()', () => {
    it('should be /agencies/count/states/AB/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getAgencyOffensesByState('AB').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/agencies/count/states/AB/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getAgencyOffensesByOri()', () => {
    it('should be /agencies/count/FAKEORI/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getAgencyOffensesByOri('FAKEORI').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/agencies/count/FAKEORI/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getAgencyOffensesByCounty()', () => {
    it('should be /agencies/count/states/offenses/AB/counts/363', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getAgencyOffensesByCounty('AB', 363).then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/agencies/count/states/offenses/AB/counts/363'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })
})
