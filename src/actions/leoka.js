import { LEOKA_FAILED, LEOKA_FETCHING, LEOKA_RECEIVED } from './constants'
import api from '../util/api/leoka'

export const failedLeoka = error => ({
  type: LEOKA_FAILED,
  error,
})

export const fetchingLeoka = () => ({
  type: LEOKA_FETCHING,
})

export const receivedLeoka = data => ({
  type: LEOKA_RECEIVED,
  data,
})

export const fetchLeoka = params => dispatch => {
  dispatch(fetchingLeoka())

  let request = api.getLeokaAssaultNational(params.dim);
  if (params.placeType === 'state') {
    request = api.getLeokaAssaultByState(params.placeId, params.dim)
  } else if (params.placeType === 'agency') {
    request = api.getLeokaAssaultByOri(params.placeId, params.dim)
  } else if (params.placeType === 'region') {
    request = api.getLeokaAssaultByRegion(params.placeId, params.dim)
  } else {
    request = api.getLeokaAssaultNational(params.dim)
  }
  // const reduceData = (accum, next) => ({ ...accum, [next.key]: next.data })

  return request
    // .then(data => data.reduce(reduceData, {}))
    .then(data => dispatch(receivedLeoka(data)))
    .catch(error => dispatch(failedLeoka(error)))
}
