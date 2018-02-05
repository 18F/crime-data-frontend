/* eslint no-undef: 0 */

import sinon from 'sinon'

import api from '../../../src/actions/api/summary'
import { nationalKey } from '../../../src/util/usa'
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

describe('summary api utility', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('summary actions api', () => {
    describe('getSummaryRequests', () => {
      it('should request /estimates/national and /arson/national not once but twice', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        const a = api.getSummaryRequests({})
        expect(a.length).toEqual(2)
        Promise.all(a).then(() => {
            expect(spy.calledWith('/api-proxy/estimates/national')).toEqual(true)
            expect(spy.calledWith('/api-proxy/arson/national')).toEqual(true)
            expect(spy.callCount).toEqual(4)
            done()
        })
      })
      it('should request /estimates/states/california and /estimates/national', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        const a = api.getSummaryRequests({ place: 'california', placeType: 'state', placeId: 'ca' })
        expect(a.length).toEqual(2)
        Promise.all(a).then(() => {
          expect(spy.calledWith('/api-proxy/estimates/states/california')).toEqual(true)
          expect(spy.calledWith('/api-proxy/arson/states/california')).toEqual(true)
          expect(spy.calledWith('/api-proxy/estimates/national')).toEqual(true)
          expect(spy.calledWith('/api-proxy/arson/national')).toEqual(true)
          expect(spy.callCount).toEqual(4)
          done()
        })
      })
      it('should request /agencies/count/ori/offenses and /[estimates|arson]/states/kentucky and /[estimates|arson]/national', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        const a = api.getSummaryRequests({ crime: 'robbery', place: 'KY123456', placeType: 'agency', placeId: 'ky' })
        expect(a.length).toEqual(3)
        Promise.all(a).then(() => {
          expect(spy.calledWith('/api-proxy/estimates/states/kentucky')).toEqual(true)
          expect(spy.calledWith('/api-proxy/arson/states/kentucky')).toEqual(true)
          expect(spy.calledWith('/api-proxy/estimates/national')).toEqual(true)
          expect(spy.calledWith('/api-proxy/arson/national')).toEqual(true)
          expect(spy.calledWith('/api-proxy/agencies/count/KY123456/offenses')).toEqual(true)
          expect(spy.callCount).toEqual(5)
          done()
        })
      })
      it('should return a data structure with key and results', done => {
        sandbox.stub(http, 'get', () => createPromise(success))
        const a = api.getSummaryRequests({ place: 'california', placeType: 'state', placeId: 'ca' })
        expect(a.length).toEqual(2)
        Promise.all(a).then(data => {
          expect(data.length).toEqual(2)
          expect(data[0].key).toEqual('california')
          expect(data[0].results).toEqual(success.results)
          expect(data[1].key).toEqual(nationalKey)
          expect(data[1].results).toEqual(success.results)
          done()
        })
      })
    })
  })
})
