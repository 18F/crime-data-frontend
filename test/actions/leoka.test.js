/* eslint no-undef: 0, no-console: 0 */

import sinon from 'sinon'

import {
  LEOKA_FAILED,
  LEOKA_FETCHING,
  LEOKA_RECEIVED,
} from '../../src/actions/constants'
import {
  failedLeoka,
  fetchLeoka,
  fetchingLeoka,
  receivedLeoka,
} from '../../src/actions/leoka'
import api from '../../src/util/api/leoka'

const createPromise = (res, err) => {
  if (!err) return Promise.resolve(res)
  return Promise.reject(err)
}

const success = {
  results: [],
}

describe('leoka actions', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('failedLeoka()', () => {
    it('should return LEOKA_FAILED type', () => {
      const actual = failedLeoka()
      expect(actual.type).toEqual(LEOKA_FAILED)
    })
  })

  describe('fetchingLeoka()', () => {
    it('should return LEOKA_FETCHING type', () => {
      const actual = fetchingLeoka()
      expect(actual.type).toEqual(LEOKA_FETCHING)
    })
  })

  describe('receivedLeoka()', () => {
    const action = { results: [1, 2, 3] }
    const actual = receivedLeoka(action)

    it('should return LEOKA_RECEIVED type', () => {
      expect(actual.type).toEqual(LEOKA_RECEIVED)
    })

    it('should return incidents equal to the results array', () => {
      expect(actual.data.results).toEqual(action.results)
    })
  })

  describe('failedLeoka()', () => {
    it('should return LEOKA_FAILED type', () => {
      const actual = failedLeoka()
      expect(actual.type).toEqual(LEOKA_FAILED)
    })
  })

  describe('fetchLeoka()', () => {
    it('should be a function', () => {
      expect(typeof fetchLeoka).toEqual('function')
    })

    it('should dispatch LEOKA_FETCHING and LEOKA_RECEIVED', done => {
      const dispatch = sandbox.spy()

      sandbox.stub(api, 'getLeokaAssaultNational', () => createPromise(success))

      fetchLeoka({ dim: 'weapon' })(dispatch).then(() => {
          const first = dispatch.getCall(0)
          const second = dispatch.getCall(1)
          expect(first.args[0].type).toEqual(LEOKA_FETCHING)
          expect(second.args[0].type).toEqual(LEOKA_RECEIVED)
          done()
        })
        .catch(e => console.error(e))
    })

    it('should dispatch LEOKA_FAILED if API call fails', done => {
      const dispatch = sandbox.spy()
      sandbox.stub(api, 'getLeokaAssaultNational', () => Promise.reject(true))
      fetchLeoka({ dim: 'weapon' })(dispatch).then(() => {
        const dispatched = dispatch.getCall(1)
        expect(dispatched.args[0].type).toEqual(LEOKA_FAILED)
        done()
      })
    })
  })
})
