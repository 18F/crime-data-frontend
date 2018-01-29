/* eslint no-undef: 0 */

import sinon from 'sinon'

import api from '../../../src/util/api/hatecrime'
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

describe('api utility hate-crime', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getHateCrimeNational()', () => {
    it('should be /hc/count/national/bias_name', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getHateCrimeNational('bias_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/hc/count/national/bias_name'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /hc/count/national/invalid_value', done => {
      api.getHateCrimeNational('invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getHateCrimeByStateId()', () => {
    it('should be /hc/count/states/363/bias_name', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getHateCrimeByStateId(363, 'bias_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/hc/count/states/363/bias_name'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /hc/count/states/363/invalid_value', done => {
      api.getHateCrimeByStateId(363, 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getHateCrimeByStateAbbr()', () => {
    it('should be /hc/count/states/AB/bias_name', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getHateCrimeByStateAbbr('AB', 'bias_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/hc/count/states/AB/bias_name'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /hc/count/states/AB/invalid_value', done => {
      api.getHateCrimeByStateAbbr('AB', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getHateCrimeByOri()', () => {
    it('should be /hc/count/agencies/FAKEORI/bias_name', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getHateCrimeByOri('FAKEORI', 'bias_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/hc/count/agencies/FAKEORI/bias_name'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /hc/count/agencies/FAKEORI/invalid_value', done => {
      api.getHateCrimeByOri('FAKEORI', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getHateCrimeOffensesNational()', () => {
    it('should be /hc/count/national/bias_name/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getHateCrimeOffensesNational('bias_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/hc/count/national/bias_name/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /hc/count/national/invalid_value/offenses', done => {
      api.getHateCrimeOffensesNational('invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getHateCrimeOffensesByStateId()', () => {
    it('should be /hc/count/states/363/bias_name/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getHateCrimeOffensesByStateId(363, 'bias_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/hc/count/states/363/bias_name/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /hc/count/states/363/invalid_value/offenses', done => {
      api.getHateCrimeOffensesByStateId(363, 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getHateCrimeOffensesByStateAbbr()', () => {
    it('should be /hc/count/states/AB/bias_name/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getHateCrimeOffensesByStateAbbr('AB', 'bias_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/hc/count/states/AB/bias_name/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /hc/count/states/AB/invalid_value/offenses', done => {
      api.getHateCrimeOffensesByStateAbbr('AB', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getHateCrimeOffensesByOri()', () => {
    it('should be /hc/count/agencies/FAKEORI/bias_name/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getHateCrimeOffensesByOri('FAKEORI', 'bias_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/hc/count/agencies/FAKEORI/bias_name/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /hc/count/agencies/FAKEORI/invalid_value/offenses', done => {
      api.getHateCrimeOffensesByOri('FAKEORI', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })
})
