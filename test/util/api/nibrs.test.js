/* eslint no-undef: 0 */

import sinon from 'sinon'

import api from '../../../src/util/api/nibrs'
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

describe('api utility nibrs', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getNibrsVictimNational()', () => {
      it('should be /nibrs/victim/count/national', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        api.getNibrsVictimNational().then(() => {
          const spyArgs = spy.args[0];
          const expectedUrl = '/api-proxy/nibrs/victim/count/national'
          expect(spyArgs[0]).toEqual(expectedUrl)
          expect(spyArgs.length).toEqual(2)
          done()
        })
      })
    })

    describe('getNibrsVictimNationalByFilter()', () => {
      it('should be /nibrs/victim/count/national/sex', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        api.getNibrsVictimNationalByFilter('sex').then(() => {
          const spyArgs = spy.args[0];
          const expectedUrl = '/api-proxy/nibrs/victim/count/national/sex'
          expect(spyArgs[0]).toEqual(expectedUrl)
          expect(spyArgs.length).toEqual(2)
          done()
        })
      })
      it('should be Bad Request /nibrs/victim/count/national/invalid_value', done => {
        api.getNibrsVictimNationalByFilter('invalid_value').catch(p => {
          expect(p.message).toEqual('Bad Request')
          done();
        })
      })
    })

    describe('getNibrsVictimByStateAbbr()', () => {
      it('should be /nibrs/victim/count/states/AB', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        api.getNibrsVictimByStateAbbr('AB').then(() => {
          const spyArgs = spy.args[0];
          const expectedUrl = '/api-proxy/nibrs/victim/count/states/AB'
          expect(spyArgs[0]).toEqual(expectedUrl)
          expect(spyArgs.length).toEqual(2)
          done()
        })
      })
    })

    describe('getNibrsVictimByStateAbbrAndFilter()', () => {
      it('should be /nibrs/victim/count/states/AB/sex', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        api.getNibrsVictimByStateAbbrAndFilter('AB', 'sex').then(() => {
          const spyArgs = spy.args[0];
          const expectedUrl = '/api-proxy/nibrs/victim/count/states/AB/sex'
          expect(spyArgs[0]).toEqual(expectedUrl)
          expect(spyArgs.length).toEqual(2)
          done()
        })
      })
      it('should be Bad Request /nibrs/victim/count/states/AB/invalid_value', done => {
        api.getNibrsVictimByStateAbbrAndFilter('AB', 'invalid_value').catch(p => {
          expect(p.message).toEqual('Bad Request')
          done();
        })
      })
    })

    describe('getNibrsVictimByOri()', () => {
      it('should be /nibrs/victim/count/agencies/FAKEORI', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        api.getNibrsVictimByOri('FAKEORI').then(() => {
          const spyArgs = spy.args[0];
          const expectedUrl = '/api-proxy/nibrs/victim/count/agencies/FAKEORI'
          expect(spyArgs[0]).toEqual(expectedUrl)
          expect(spyArgs.length).toEqual(2)
          done()
        })
      })
    })

    describe('getNibrsVictimByOriAndFilter()', () => {
      it('should be /nibrs/victim/count/agencies/FAKEORI/sex', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        api.getNibrsVictimByOriAndFilter('FAKEORI', 'sex').then(() => {
          const spyArgs = spy.args[0];
          const expectedUrl = '/api-proxy/nibrs/victim/count/agencies/FAKEORI/sex'
          expect(spyArgs[0]).toEqual(expectedUrl)
          expect(spyArgs.length).toEqual(2)
          done()
        })
      })
      it('should be Bad Request /nibrs/victim/count/agencies/FAKEORI/invalid_value', done => {
        api.getNibrsVictimByOriAndFilter('FAKEORI', 'invalid_value').catch(p => {
          expect(p.message).toEqual('Bad Request')
          done();
        })
      })
    })

    describe('getNibrsOffenderNational()', () => {
      it('should be /nibrs/offender/count/national', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        api.getNibrsOffenderNational().then(() => {
          const spyArgs = spy.args[0];
          const expectedUrl = '/api-proxy/nibrs/offender/count/national'
          expect(spyArgs[0]).toEqual(expectedUrl)
          expect(spyArgs.length).toEqual(2)
          done()
        })
      })
    })

    describe('getNibrsOffenderNationalByFilter()', () => {
      it('should be /nibrs/offender/count/national/sex', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        api.getNibrsOffenderNationalByFilter('sex').then(() => {
          const spyArgs = spy.args[0];
          const expectedUrl = '/api-proxy/nibrs/offender/count/national/sex'
          expect(spyArgs[0]).toEqual(expectedUrl)
          expect(spyArgs.length).toEqual(2)
          done()
        })
      })
      it('should be Bad Request /nibrs/offender/count/national/invalid_value', done => {
        api.getNibrsOffenderNationalByFilter('invalid_value').catch(p => {
          expect(p.message).toEqual('Bad Request')
          done();
        })
      })
    })

    describe('getNibrsOffenderByStateAbbr()', () => {
      it('should be /nibrs/offender/count/states/AB', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        api.getNibrsOffenderByStateAbbr('AB').then(() => {
          const spyArgs = spy.args[0];
          const expectedUrl = '/api-proxy/nibrs/offender/count/states/AB'
          expect(spyArgs[0]).toEqual(expectedUrl)
          expect(spyArgs.length).toEqual(2)
          done()
        })
      })
    })

    describe('getNibrsOffenderByStateAbbrAndFilter()', () => {
      it('should be /nibrs/offender/count/states/AB/sex', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        api.getNibrsOffenderByStateAbbrAndFilter('AB', 'sex').then(() => {
          const spyArgs = spy.args[0];
          const expectedUrl = '/api-proxy/nibrs/offender/count/states/AB/sex'
          expect(spyArgs[0]).toEqual(expectedUrl)
          expect(spyArgs.length).toEqual(2)
          done()
        })
      })
    })

    describe('getNibrsOffenderByOri()', () => {
      it('should be /nibrs/offender/count/agencies/FAKEORI', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        api.getNibrsOffenderByOri('FAKEORI').then(() => {
          const spyArgs = spy.args[0];
          const expectedUrl = '/api-proxy/nibrs/offender/count/agencies/FAKEORI'
          expect(spyArgs[0]).toEqual(expectedUrl)
          expect(spyArgs.length).toEqual(2)
          done()
        })
      })
    })

    describe('getNibrsOffenderByOriAndFilter()', () => {
      it('should be /nibrs/offender/count/agencies/FAKEORI/sex', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        api.getNibrsOffenderByOriAndFilter('FAKEORI', 'sex').then(() => {
          const spyArgs = spy.args[0];
          const expectedUrl = '/api-proxy/nibrs/offender/count/agencies/FAKEORI/sex'
          expect(spyArgs[0]).toEqual(expectedUrl)
          expect(spyArgs.length).toEqual(2)
          done()
        })
      })
    })

    describe('getNibrsVictimOffenderRelNational()', () => {
      it('should be /nibrs/victim/count/national/relationships', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        api.getNibrsVictimOffenderRelNational().then(() => {
          const spyArgs = spy.args[0];
          const expectedUrl = '/api-proxy/nibrs/victim/count/national/relationships'
          expect(spyArgs[0]).toEqual(expectedUrl)
          expect(spyArgs.length).toEqual(2)
          done()
        })
      })
    })

    describe('getNibrsVictimOffenderRelByStateAbbr()', () => {
      it('should be /nibrs/victim/count/states/AB/relationships', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        api.getNibrsVictimOffenderRelByStateAbbr('AB').then(() => {
          const spyArgs = spy.args[0];
          const expectedUrl = '/api-proxy/nibrs/victim/count/states/AB/relationships'
          expect(spyArgs[0]).toEqual(expectedUrl)
          expect(spyArgs.length).toEqual(2)
          done()
        })
      })
    })

    describe('getNibrsVictimOffenderRelByOri()', () => {
      it('should be /nibrs/victim/count/agencies/FAKEORI/relationships', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        api.getNibrsVictimOffenderRelByOri('FAKEORI').then(() => {
          const spyArgs = spy.args[0];
          const expectedUrl = '/api-proxy/nibrs/victim/count/agencies/FAKEORI/relationships'
          expect(spyArgs[0]).toEqual(expectedUrl)
          expect(spyArgs.length).toEqual(2)
          done()
        })
      })
    })

    describe('getNibrsOffenseNational()', () => {
      it('should be /nibrs/offense/count/national/relationships', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        api.getNibrsOffenseNational().then(() => {
          const spyArgs = spy.args[0];
          const expectedUrl = '/api-proxy/nibrs/offense/count/national'
          expect(spyArgs[0]).toEqual(expectedUrl)
          expect(spyArgs.length).toEqual(2)
          done()
        })
      })
    })

    describe('getNibrsOffenseByStateAbbr()', () => {
      it('should be /nibrs/offense/count/states/AB/relationships', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        api.getNibrsOffenseByStateAbbr('AB').then(() => {
          const spyArgs = spy.args[0];
          const expectedUrl = '/api-proxy/nibrs/offense/count/states/AB'
          expect(spyArgs[0]).toEqual(expectedUrl)
          expect(spyArgs.length).toEqual(2)
          done()
        })
      })
    })

    describe('getNibrsOffenseByOri()', () => {
      it('should be /nibrs/offense/count/agencies/FAKEORI', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        api.getNibrsOffenseByOri('FAKEORI').then(() => {
          const spyArgs = spy.args[0];
          const expectedUrl = '/api-proxy/nibrs/offense/count/agencies/FAKEORI'
          expect(spyArgs[0]).toEqual(expectedUrl)
          expect(spyArgs.length).toEqual(2)
          done()
        })
      })
    })
})
