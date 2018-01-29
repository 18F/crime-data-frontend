/* eslint no-undef: 0 */

import sinon from 'sinon'

import api from '../../../src/util/api/offenses'
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

describe('api utility offenses', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getOffensesNational()', () => {
    it('should be /offenses/count/national/location_name', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getOffensesNational('location_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/offenses/count/national/location_name'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /offenses/count/national/invalid_value', done => {
      api.getOffensesNational('invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getOffensesByStateId()', () => {
    it('should be /offenses/count/states/363/location_name', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getOffensesByStateId(363, 'location_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/offenses/count/states/363/location_name'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /offenses/count/states/363/invalid_value', done => {
      api.getOffensesByStateId(363, 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getOffensesByStateAbbr()', () => {
    it('should be /offenses/count/states/AB/location_name', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getOffensesByStateAbbr('AB', 'location_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/offenses/count/states/AB/location_name'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /offenses/count/states/WV/invalid_value', done => {
      api.getOffensesByStateAbbr('WV', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getOffensesByOri()', () => {
    it('should be /offenses/count/agencies/FAKEORI/location_name', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getOffensesByOri('FAKEORI', 'location_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/offenses/count/agencies/FAKEORI/location_name'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /offenses/count/agencies/FAKEORI/invalid_value', done => {
      api.getOffensesByStateAbbr('FAKEORI', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getOffensesByOffenseNational()', () => {
    it('should be /offenses/count/national/location_name/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getOffensesByOffenseNational('location_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/offenses/count/national/location_name/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /offenses/count/national/invalid_value/offenses', done => {
      api.getOffensesByOffenseNational('invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getOffensesByOffenseByStateId()', () => {
    it('should be /offenses/count/states/363/location_name/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getOffensesByOffenseByStateId(363, 'location_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/offenses/count/states/363/location_name/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /offenses/count/states/363/invalid_value/offenses', done => {
      api.getOffensesByOffenseByStateId(363, 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getOffensesByOffenseByStateAbbr()', () => {
    it('should be /offenses/count/states/AB/location_name/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getOffensesByOffenseByStateAbbr('AB', 'location_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/offenses/count/states/AB/location_name/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /offenses/count/states/WV/invalid_value/offenses', done => {
      api.getOffensesByOffenseByStateAbbr('WV', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getOffensesByOffenseByOri()', () => {
    it('should be /offenses/count/agencies/FAKEORI/location_name/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getOffensesByOffenseByOri('FAKEORI', 'location_name').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/offenses/count/agencies/FAKEORI/location_name/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /offenses/count/agencies/FAKEORI/invalid_value/offenses', done => {
      api.getOffensesByOffenseByOri('FAKEORI', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })
})
