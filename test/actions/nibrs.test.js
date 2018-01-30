/* eslint no-undef: 0, no-console: 0 */

import sinon from 'sinon'

import {
  NIBRS_FAILED,
  NIBRS_FETCHING,
  NIBRS_RECEIVED,
} from '../../src/actions/constants'
import {
  failedNibrs,
  fetchNibrs,
  fetchingNibrs,
  receivedNibrs,
} from '../../src/actions/nibrs'
import api from '../../src/actions/api/nibrs'

const createPromise = (res, err) => {
  if (!err) return Promise.resolve(res)
  return Promise.reject(err)
}

const success = {
  results: [],
}

describe('nibrs actions', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('failedNibrs()', () => {
    it('should return NIBRS_FAILED type', () => {
      const actual = failedNibrs()
      expect(actual.type).toEqual(NIBRS_FAILED)
    })
  })

  describe('fetchingNibrs()', () => {
    it('should return NIBRS_FETCHING type', () => {
      const actual = fetchingNibrs()
      expect(actual.type).toEqual(NIBRS_FETCHING)
    })
  })

  describe('receivedNibrs()', () => {
    const action = { results: [1, 2, 3] }
    const actual = receivedNibrs(action)

    it('should return NIBRS_RECEIVED type', () => {
      expect(actual.type).toEqual(NIBRS_RECEIVED)
    })

    it('should return incidents equal to the results array', () => {
      expect(actual.data.results).toEqual(action.results)
    })
  })

  describe('failedNibrs()', () => {
    it('should return NIBRS_FAILED type', () => {
      const actual = failedNibrs()
      expect(actual.type).toEqual(NIBRS_FAILED)
    })
  })

  describe('fetchNibrs()', () => {
    it('should be a function', () => {
      expect(typeof fetchNibrs).toEqual('function')
    })

    it('should dispatch NIBRS_FETCHING and NIBRS_RECEIVED', done => {
      const dispatch = sandbox.spy()

      sandbox.stub(api, 'getNibrsCountsRequests', () => [
        createPromise(success),
        createPromise(success),
      ])

      fetchNibrs({ place: 'montana' })(dispatch)
        .then(() => {
          const first = dispatch.getCall(0)
          const second = dispatch.getCall(1)
          expect(first.args[0].type).toEqual(NIBRS_FETCHING)
          expect(second.args[0].type).toEqual(NIBRS_RECEIVED)
          done()
        })
        .catch(e => console.error(e))
    })

    it('should dispatch NIBRS_FAILED if API call fails', done => {
      const dispatch = sandbox.spy()
      sandbox.stub(api, 'getNibrsCountsRequests', () => [Promise.reject(true)])
      fetchNibrs({ place: 'montana' })(dispatch).then(() => {
        const dispatched = dispatch.getCall(1)
        expect(dispatched.args[0].type).toEqual('NIBRS_FAILED')
        done()
      })
    })
  })
})
