/* eslint no-undef: 0 */

import sinon from 'sinon'

import api from '../../../src/util/api/leoka'
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

describe('api utility leoka', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getLeokaAssaultNational()', () => {
    it('should be /leoka/assault/national/weapon', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getLeokaAssaultNational('weapon').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/leoka/assault/national/weapon'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /leoka/assault/national/invalid_value', done => {
      api.getLeokaAssaultNational('invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getLeokaAssaultByRegion()', () => {
    it('should be /leoka/assault/region/northeast/weapon', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getLeokaAssaultByRegion('northeast', 'weapon').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/leoka/assault/region/northeast/weapon'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /leoka/assault/region/northeast/invalid_value', done => {
      api.getLeokaAssaultByRegion('northeast', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getLeokaAssaultByState()', () => {
    it('should be /leoka/assault/states/AB/weapon', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getLeokaAssaultByState('AB', 'weapon').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/leoka/assault/states/AB/weapon'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /leoka/assault/states/AB/invalid_value', done => {
      api.getLeokaAssaultByState('AB', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getLeokaAssaultByOri()', () => {
    it('should be /leoka/assault/agencies/FAKEORI/weapon', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getLeokaAssaultByOri('FAKEORI', 'weapon').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/leoka/assault/agencies/FAKEORI/weapon'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /leoka/assault/agencies/FAKEORI/invalid_value', done => {
      api.getLeokaAssaultByOri('FAKEORI', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getLeokaAssaultTimeDist()', () => {
    it('should be /leoka/assault/time-distribution', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getLeokaAssaultTimeDist().then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/leoka/assault/time-distribution'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })
})
