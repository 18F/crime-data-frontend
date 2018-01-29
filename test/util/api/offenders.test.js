/* eslint no-undef: 0 */

import sinon from 'sinon'

import api from '../../../src/util/api/offenders'
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

describe('api utility offenders', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getOffendersNational()', () => {
    it('should be /offenders/count/national/sex_code', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getOffendersNational('sex_code').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/offenders/count/national/sex_code'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /offenders/count/national/invalid_value', done => {
      api.getOffendersNational('invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getOffendersByStateId()', () => {
    it('should be /offenders/count/states/363/sex_code', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getOffendersByStateId(363, 'sex_code').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/offenders/count/states/363/sex_code'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /offenders/count/states/363/invalid_value', done => {
      api.getOffendersByStateId(363, 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getOffendersByStateAbbr()', () => {
    it('should be /offenders/count/states/AB/sex_code', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getOffendersByStateAbbr('AB', 'sex_code').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/offenders/count/states/AB/sex_code'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /offenders/count/states/AB/invalid_value', done => {
      api.getOffendersByStateAbbr('AB', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getOffendersByOri()', () => {
    it('should be /offenders/count/agencies/FAKEORI/sex_code', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getOffendersByOri('FAKEORI', 'sex_code').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/offenders/count/agencies/FAKEORI/sex_code'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /offenders/count/agencies/FAKEORI/invalid_value', done => {
      api.getOffendersByOri('FAKEORI', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getOffenderOffensesNational()', () => {
    it('should be /offenders/count/national/sex_code/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getOffenderOffensesNational('sex_code').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/offenders/count/national/sex_code/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /offenders/count/national/invalid_value/offenses', done => {
      api.getOffenderOffensesNational('invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getOffenderOffensesByStateId()', () => {
    it('should be /offenders/count/states/363/sex_code/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getOffenderOffensesByStateId(363, 'sex_code').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/offenders/count/states/363/sex_code/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /offenders/count/states/363/invalid_value/offenses', done => {
      api.getOffenderOffensesByStateId(363, 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getOffenderOffensesByStateAbbr()', () => {
    it('should be /offenders/count/states/AB/sex_code/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getOffenderOffensesByStateAbbr('AB', 'sex_code').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/offenders/count/states/AB/sex_code/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /offenders/count/states/AB/invalid_value/offenses', done => {
      api.getOffenderOffensesByStateAbbr('AB', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getOffenderOffensesByOri()', () => {
    it('should be /offenders/count/agencies/FAKEORI/sex_code/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getOffenderOffensesByOri('FAKEORI', 'sex_code').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/offenders/count/agencies/FAKEORI/sex_code/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /offenders/count/agencies/FAKEORI/invalid_value/offenses', done => {
      api.getOffenderOffensesByOri('FAKEORI', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })
})
