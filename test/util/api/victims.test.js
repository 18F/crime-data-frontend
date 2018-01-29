/* eslint no-undef: 0 */

import sinon from 'sinon'

import api from '../../../src/util/api/victims'
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

describe('api utility victims', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getVictimsNational()', () => {
    it('should be /victims/count/national/sex_code', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getVictimsNational('sex_code').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/victims/count/national/sex_code'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /victims/count/national/invalid_value', done => {
      api.getVictimsNational('invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getVictimsByStateId()', () => {
    it('should be /victims/count/states/363/sex_code', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getVictimsByStateId(363, 'sex_code').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/victims/count/states/363/sex_code'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /victims/count/states/363/invalid_value', done => {
      api.getVictimsByStateId(363, 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getVictimsByStateAbbr()', () => {
    it('should be /victims/count/states/AB/sex_code', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getVictimsByStateAbbr('AB', 'sex_code').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/victims/count/states/AB/sex_code'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /victims/count/states/AB/invalid_value', done => {
      api.getVictimsByStateAbbr('AB', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getVictimsByOri()', () => {
    it('should be /victims/count/agencies/FAKEORI/sex_code', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getVictimsByOri('FAKEORI', 'sex_code').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/victims/count/agencies/FAKEORI/sex_code'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /victims/count/agencies/FAKEORI/invalid_value', done => {
      api.getVictimsByOri('FAKEORI', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getVictimOffensesNational()', () => {
    it('should be /victims/count/national/sex_code/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getVictimOffensesNational('sex_code').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/victims/count/national/sex_code/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /victims/count/national/invalid_value/offenses', done => {
      api.getVictimOffensesNational('invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getVictimOffensesByStateId()', () => {
    it('should be /victims/count/states/363/sex_code/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getVictimOffensesByStateId(363, 'sex_code').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/victims/count/states/363/sex_code/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /victims/count/states/363/invalid_value/offenses', done => {
      api.getVictimOffensesByStateId(363, 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getVictimOffensesByStateAbbr()', () => {
    it('should be /victims/count/states/AB/sex_code/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getVictimOffensesByStateAbbr('AB', 'sex_code').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/victims/count/states/AB/sex_code/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /victims/count/states/AB/invalid_value/offenses', done => {
      api.getVictimOffensesByStateAbbr('AB', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })

  describe('getVictimOffensesByOri()', () => {
    it('should be /victims/count/agencies/FAKEORI/sex_code/offenses', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getVictimOffensesByOri('FAKEORI', 'sex_code').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/victims/count/agencies/FAKEORI/sex_code/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
    it('should be Bad Request /victims/count/agencies/FAKEORI/invalid_value/offenses', done => {
      api.getVictimOffensesByOri('FAKEORI', 'invalid_value').catch(p => {
        expect(p.message).toEqual('Bad Request')
        done();
      })
    })
  })
})
