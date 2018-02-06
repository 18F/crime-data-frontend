/* eslint no-undef: 0, no-console: 0 */

import sinon from 'sinon'

import {
  POLICE_EMPLOYMENT_FAILED,
  POLICE_EMPLOYMENT_FETCHING,
  POLICE_EMPLOYMENT_RECEIVED,
} from '../../src/actions/constants'
import {
  failedPoliceEmployment,
  fetchPoliceEmployment,
  fetchingPoliceEmployment,
  receivedPoliceEmployment,
} from '../../src/actions/policeEmployment'
import api from '../../src/util/api/policeemployment'

const createPromise = (res, err) => {
  if (!err) return Promise.resolve(res)
  return Promise.reject(err)
}

const success = {
  results: [],
}

describe('police employment actions', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('failedPoliceEmployment()', () => {
    it('should return POLICE_EMPLOYMENT_FAILED type', () => {
      const actual = failedPoliceEmployment()
      expect(actual.type).toEqual(POLICE_EMPLOYMENT_FAILED)
    })
  })

  describe('fetchingPoliceEmployment()', () => {
    it('should return POLICE_EMPLOYMENT_FETCHING type', () => {
      const actual = fetchingPoliceEmployment()
      expect(actual.type).toEqual(POLICE_EMPLOYMENT_FETCHING)
    })
  })

  describe('receivedPoliceEmployment()', () => {
    const action = { results: [1, 2, 3] }
    const actual = receivedPoliceEmployment(action)

    it('should return POLICE_EMPLOYMENT_RECEIVED type', () => {
      expect(actual.type).toEqual(POLICE_EMPLOYMENT_RECEIVED)
    })

    it('should return incidents equal to the results array', () => {
      expect(actual.data.results).toEqual(action.results)
    })
  })

  describe('failedPoliceEmployment()', () => {
    it('should return POLICE_EMPLOYMENT_FAILED type', () => {
      const actual = failedPoliceEmployment()
      expect(actual.type).toEqual(POLICE_EMPLOYMENT_FAILED)
    })
  })

  describe('fetchPoliceEmployment()', () => {
    it('should be a function', () => {
      expect(typeof fetchPoliceEmployment).toEqual('function')
    })

    it('should dispatch POLICE_EMPLOYMENT_FETCHING and POLICE_EMPLOYMENT_RECEIVED', done => {
      const dispatch = sandbox.spy()

      sandbox.stub(api, 'getPoliceEmploymentNational', () => createPromise(success))

      fetchPoliceEmployment({})(dispatch).then(() => {
          const first = dispatch.getCall(0)
          const second = dispatch.getCall(1)
          expect(first.args[0].type).toEqual(POLICE_EMPLOYMENT_FETCHING)
          expect(second.args[0].type).toEqual(POLICE_EMPLOYMENT_RECEIVED)
          done()
        })
        .catch(e => console.error(e))
    })

    it('should dispatch POLICE_EMPLOYMENT_FAILED if API call fails', done => {
      const dispatch = sandbox.spy()
      sandbox.stub(api, 'getPoliceEmploymentNational', () => Promise.reject(true))
      fetchPoliceEmployment({ })(dispatch).then(() => {
        const dispatched = dispatch.getCall(1)
        expect(dispatched.args[0].type).toEqual(POLICE_EMPLOYMENT_FAILED)
        done()
      })
    })
  })
})
