/* eslint no-undef: 0 */

import sinon from 'sinon'

import api from '../../../src/actions/api/nibrs'
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

describe('nibrs api utility', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('nibrs actions api', () => {
    // describe('getNibrsRequests', () => {
    // })
    describe('getNibrsCountsRequests', () => {
      it('should do nibrs counts on national level', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        const a = api.getNibrsCountsRequests({})
        Promise.all(a).then(() => {
            // expect(spy.calledWith('/api-proxy/estimates/national')).toEqual(true)
            // expect(spy.calledWith('/api-proxy/arson/national')).toEqual(true)
            expect(spy.callCount).toEqual(13)
            done()
        })
      })
      it('should do nibrs counts on state level', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        const a = api.getNibrsCountsRequests({ place: 'kentucky', placeId: 'ky', placeType: 'state' })
        Promise.all(a).then(() => {
            // expect(spy.calledWith('/api-proxy/estimates/national')).toEqual(true)
            // expect(spy.calledWith('/api-proxy/arson/national')).toEqual(true)
            expect(spy.callCount).toEqual(13)
            done()
        })
      })
      it('should do nibrs counts on agency level', done => {
        const spy = sandbox.stub(http, 'get', () => createPromise(success))
        const a = api.getNibrsCountsRequests({ place: 'KY123456', placeId: 'ky', placeType: 'agency' })
        Promise.all(a).then(() => {
            // expect(spy.calledWith('/api-proxy/estimates/national')).toEqual(true)
            // expect(spy.calledWith('/api-proxy/arson/national')).toEqual(true)
            expect(spy.callCount).toEqual(13)
            done()
        })
      })
    })
  })
})
