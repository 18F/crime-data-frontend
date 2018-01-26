/* eslint no-undef: 0, no-console: 0 */

import sinon from 'sinon'

import {
  UCR_PARTICIPATION_FAILED,
  UCR_PARTICIPATION_FETCHING,
  UCR_PARTICIPATION_RECEIVED,
} from '../../src/actions/constants'
import {
  failedUcrParticipation,
  fetchingUcrParticipation,
  receivedUcrParticipation,
  fetchUcrParticipation,
} from '../../src/actions/participation'
import api from '../../src/util/api'

const createPromise = (res, err) => {
  if (!err) return Promise.resolve(res)
  return Promise.reject(err)
}

describe('ucr participation actions', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('failedUcrParticipation()', () => {
    it('should return UCR_PARTICIPATION_FAILED type', () => {
      const actual = failedUcrParticipation()
      expect(actual.type).toEqual(UCR_PARTICIPATION_FAILED)
    })
  })

  describe('fetchingUcrParticipation()', () => {
    it('should return UCR_PARTICIPATION_FETCHING type', () => {
      const actual = fetchingUcrParticipation()
      expect(actual.type).toEqual(UCR_PARTICIPATION_FETCHING)
    })
  })

  describe('receivedUcrParticipation()', () => {
    const action = {
      'north-carolina': [1, 2, 3],
    }

    it('should return a UCR_PARTICIPATION_RECEIVED type action', () => {
      const actual = receivedUcrParticipation(action)
      expect(actual.type).toEqual(UCR_PARTICIPATION_RECEIVED)
      expect(actual.results['north-carolina']).toEqual([1, 2, 3])
    })
  })

  describe('fetchUcrParticipation()', () => {
    it('should trigger fetching and received actions', done => {
      const dispatch = sandbox.spy()
      const output = () => [createPromise({ place: 'california', results: [] })]
      const input = { place: 'california' }
      sandbox.stub(api, 'getParticipationNational', output)

      fetchUcrParticipation(input)(dispatch).then(() => {
        const first = dispatch.getCall(0)
        const second = dispatch.getCall(1)
        expect(first.args[0].type).toEqual(UCR_PARTICIPATION_FETCHING)
        expect(second.args[0].type).toEqual(UCR_PARTICIPATION_RECEIVED)
        done()
      })
    })

    it('should call api.getParticipationNational exactly 1 time', done => {
      const dispatch = sandbox.spy()
      const output = () => [createPromise({ place: 'california', results: [] })]
      const input = {}
      const spy = sandbox.stub(api, 'getParticipationNational', output)

      fetchUcrParticipation(input)(dispatch).then(() => {
        expect(spy.callCount).toEqual(1)
        done()
      })
    })

    it('should dispatch UCR_PARTICIPATION_FAILED if API call fails', done => {
      const dispatch = sandbox.spy()
      sandbox.stub(api, 'getParticipationNational', () => [createPromise({}, 'reject')])

      const filter = { placeType: 'state', place: 'california', placeId: 'ca' }
      fetchUcrParticipation(filter)(dispatch).then(() => {
        const dispatched = dispatch.getCall(1)
        expect(dispatched.args[0].type).toEqual(UCR_PARTICIPATION_FAILED)
        done()
      })
    })
  })
// FROM api.test.js
  // describe('getUcrParticipation()', () => {
  //   it('should call the /participation/states/:id endpoint', done => {
  //     const spy = sandbox.stub(http, 'get', () => createPromise(success))
  //     api.getUcrParticipation('california', 'ca', 'state').then(() => {
  //       const url = spy.args[0].pop()
  //       expect(url.includes('/participation/states')).toEqual(true)
  //       done()
  //     })
  //   })
  //
  //   it('should return a data structure with the place and the results', done => {
  //     sandbox.stub(http, 'get', () => createPromise(success))
  //     api.getUcrParticipation('california').then(data => {
  //       expect(data.place).toEqual('california')
  //       expect(data.results).toEqual(success.results)
  //       done()
  //     })
  //   })
  // })
})
