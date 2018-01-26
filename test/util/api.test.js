/* eslint no-undef: 0 */

import sinon from 'sinon'

import api, { formatError } from '../../src/util/api'
import * as http from '../../src/util/http'

const createPromise = (res, err) => {
  if (!err) return Promise.resolve(res)
  return Promise.reject(err)
}

const params = {
  crime: 'homicide',
  place: 'california',
  placeType: 'state',
  placeId: 'ca',
  since: 2004,
  until: 2014,
}

const success = {
  pagination: {
    page: 1,
    pages: 5,
  },
  results: [{ type: 'fake' }],
}

describe('api utility', () => {
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

  describe('getArrestsNational()', () => {
    it('should be /arrests/national', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getArrestsNational().then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/arrests/national'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getArsonNational()', () => {
    it('should be /arson/national', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getArsonNational().then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/arson/national'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getArsonByRegion()', () => {
    it('should be /arson/region/northeast', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getArsonByRegion('northeast').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/arson/region/northeast'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getArsonByState()', () => {
    it('should be /arson/state/AB', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getArsonByState('AB').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/arson/state/AB'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getCodeTypes()', () => {
    it('should be /codes', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getCodeTypes().then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/codes'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getCodes()', () => {
    it('should be /codes/ref_country', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getCodes('ref_country').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/codes/ref_country'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
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

  describe('getEstimatesNational()', () => {
    it('should be /estimates/national', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getEstimatesNational().then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/estimates/national'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getEstimatesByRegion()', () => {
    it('should be /estimates/regions/northeast', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getEstimatesByRegion('northeast').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/estimates/regions/northeast'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getEstimatesByState()', () => {
    it('should be /estimates/states/AB', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getEstimatesByState('AB').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/estimates/states/AB'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getGeoByState()', () => {
    it('should be /geo/states/AB', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getGeoByState('AB').then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/geo/states/AB'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getGeoByCounty()', () => {
    it('should be /geo/counties/54033', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getGeoByCounty(54033).then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/geo/counties/54033'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
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

  describe('getHumanTrafficAgencies()', () => {
    it('should be /ht/agencies', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getHumanTrafficAgencies().then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/ht/agencies'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getHumanTrafficStates()', () => {
    it('should be /ht/states', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getHumanTrafficStates().then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/ht/states'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
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

  describe('getLookupRegion()', () => {
    it('should be /lookup/region', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getLookupRegion().then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/lookup/region'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getLookupState()', () => {
    it('should be /lookup/state', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getLookupState().then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/lookup/state'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
  })

  describe('getNibrsVictimNational()', () => {
    it('should be /nibrs/victim/count/national', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getNibrsVictimNational().then(() => {
        const spyArgs = spy.args[0];
        const expectedUrl = '/api-proxy/nibrs/victim/count/national'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs.length).toEqual(1)
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
        expect(spyArgs.length).toEqual(1)
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
        expect(spyArgs.length).toEqual(1)
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
        expect(spyArgs.length).toEqual(1)
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
        expect(spyArgs.length).toEqual(1)
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
        expect(spyArgs.length).toEqual(1)
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
        expect(spyArgs.length).toEqual(1)
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
        expect(spyArgs.length).toEqual(1)
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
        expect(spyArgs.length).toEqual(1)
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
        expect(spyArgs.length).toEqual(1)
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
        expect(spyArgs.length).toEqual(1)
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
        expect(spyArgs.length).toEqual(1)
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
        expect(spyArgs.length).toEqual(1)
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
        expect(spyArgs.length).toEqual(1)
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
        expect(spyArgs.length).toEqual(1)
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
        expect(spyArgs.length).toEqual(1)
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
        expect(spyArgs.length).toEqual(1)
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
        expect(spyArgs.length).toEqual(1)
        done()
      })
    })
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

  describe('formatError()', () => {
    it('should reshape the fetch error object', () => {
      const fakeError = {
        response: { status: 400 },
        message: 'fake error',
        config: { url: 'fake/url' },
      }
      const actual = formatError(fakeError)
      expect(actual.code).toEqual(400)
      expect(actual.message).toEqual('fake error')
      expect(actual.url).toEqual('fake/url')
    })
  })

  describe('fetchNibrs()', () => {
    it('should call the /offenders/count/states/:postal_abbr/:dim/offenses endpoint', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      const args = { ...params, type: 'offender', dim: 'sexCode' }
      api.fetchNibrs(args).then(() => {
        const spyArgs = spy.args[0]
        const expectedUrl =
          '/api-proxy/offenders/count/states/ca/sex_code/offenses'
        expect(spyArgs[0]).toEqual(expectedUrl)
        expect(spyArgs[1].explorer_offense).toEqual(params.crime)
        done()
      })
    })

    it('should return a data structure with a key and data', done => {
      sandbox.stub(http, 'get', () => createPromise(success))
      const args = { ...params, type: 'offender', dim: 'sexCode' }
      api.fetchNibrs(args).then(d => {
        expect(d.key).toEqual('offenderSexCode')
        expect(d.data).toEqual(success.results)
        done()
      })
    })
  })

  describe('getNibrsRequests()', () => {
    it('should call getNibrs 11 times', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      Promise.all(api.getNibrsRequests(params)).then(() => {
        expect(spy.callCount).toEqual(11)
        done()
      })
    })
  })

  describe('fetching summary data', () => {
    it('should request /estimates/national for national', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.fetchAggregates().then(() => {
        const url = spy.args[0].pop()
        expect(url.includes('/estimates/national')).toEqual(true)
        done()
      })
    })

    it('should request /estimates/states/:state if place is a state', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.fetchAggregates('california', 'state', 'ca').then(() => {
        const url = spy.args[0].pop()
        expect(url.includes('/estimates/states/ca')).toEqual(true)
        done()
      })
    })

    it('should request */agencies/count/* if place is an agency', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.fetchAgencyAggregates('NJ123', 'robbery').then(() => {
        const url = spy.args[0][0]
        const pathPartial = '/agencies/count/NJ123'
        expect(url.includes(pathPartial)).toEqual(true)
        done()
      })
    })

    it('should return a data structure with key and results', done => {
      sandbox.stub(http, 'get', () => createPromise(success))
      api.fetchAggregates('california').then(data => {
        expect(data.key).toEqual('california')
        expect(data.results).toEqual(success.results)
        done()
      })
    })
  })

  describe('getUcrParticipation()', () => {
    it('should call the /participation/states/:id endpoint', done => {
      const spy = sandbox.stub(http, 'get', () => createPromise(success))
      api.getUcrParticipation('california', 'ca', 'state').then(() => {
        const url = spy.args[0].pop()
        expect(url.includes('/participation/states')).toEqual(true)
        done()
      })
    })

    it('should return a data structure with the place and the results', done => {
      sandbox.stub(http, 'get', () => createPromise(success))
      api.getUcrParticipation('california').then(data => {
        expect(data.place).toEqual('california')
        expect(data.results).toEqual(success.results)
        done()
      })
    })
  })
})
