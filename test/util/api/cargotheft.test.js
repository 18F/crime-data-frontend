/* eslint no-undef: 0 */

import sinon from 'sinon'

import api from '../../../src/util/api/cargotheft'
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

describe('api utility cargo-theft', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getCargoTheftNational()', () => {
    it('should be /ct/count/national/location_name', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getCargoTheftNational('location_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/ct/count/national/location_name'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /ct/count/national/invalid_value', done => {
      api.getCargoTheftNational('invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getCargoTheftByStateId()', () => {
    it('should be /ct/count/states/3/location_name', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getCargoTheftByStateId(3, 'location_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/ct/count/states/3/location_name'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /ct/count/states/3/invalid_value', done => {
      api.getCargoTheftByStateId(3, 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getCargoTheftByStateAbbr()', () => {
    it('should be /ct/count/states/AB/location_name', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getCargoTheftByStateAbbr('AB', 'location_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/ct/count/states/AB/location_name'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /ct/count/states/AB/invalid_value', done => {
      api.getCargoTheftByStateAbbr('AB', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getCargoTheftByOri()', () => {
    it('should be /ct/count/agencies/FAKEORI/location_name', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getCargoTheftByOri('FAKEORI', 'location_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/ct/count/agencies/FAKEORI/location_name'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /ct/count/agencies/FAKEORI/invalid_value', done => {
      api.getCargoTheftByOri('FAKEORI', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getCargoTheftOffensesNational()', () => {
    it('should be /ct/count/national/location_name/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getCargoTheftOffensesNational('location_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/ct/count/national/location_name/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /ct/count/national/invalid_value/offenses', done => {
      api.getCargoTheftNational('invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getCargoTheftOffensesByStateId()', () => {
    it('should be /ct/count/states/3/location_name/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getCargoTheftOffensesByStateId(3, 'location_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/ct/count/states/3/location_name/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /ct/count/states/3/invalid_value/offenses', done => {
      api.getCargoTheftOffensesByStateId(3, 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getCargoTheftOffensesByStateAbbr()', () => {
    it('should be /ct/count/states/AB/location_name/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getCargoTheftOffensesByStateAbbr('AB', 'location_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/ct/count/states/AB/location_name/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /ct/count/states/AB/invalid_value/offenses', done => {
      api.getCargoTheftOffensesByStateAbbr('AB', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getCargoTheftOffensesByOri()', () => {
    it('should be /ct/count/agencies/FAKEORI/location_name/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getCargoTheftOffensesByOri('FAKEORI', 'location_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/ct/count/agencies/FAKEORI/location_name/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /ct/count/agencies/FAKEORI/invalid_value/offenses', done => {
      api.getCargoTheftOffensesByOri('FAKEORI', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })
})
