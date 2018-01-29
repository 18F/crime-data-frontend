import {
  UCR_PARTICIPATION_FAILED,
  UCR_PARTICIPATION_FETCHING,
  UCR_PARTICIPATION_RECEIVED,
} from './constants'
import api from '../util/api/participation'
import { reshapeData } from '../util/participation'

export const failedUcrParticipation = error => ({
  type: UCR_PARTICIPATION_FAILED,
  error,
})

export const fetchingUcrParticipation = () => ({
  type: UCR_PARTICIPATION_FETCHING,
})

export const receivedUcrParticipation = results => ({
  type: UCR_PARTICIPATION_RECEIVED,
  results,
})

export const fetchUcrParticipation = filters => dispatch => {
  dispatch(fetchingUcrParticipation())
  const { place, placeType, placeId } = filters
  const requests = [api.getParticipationNational()];
  if (placeType === 'state') {
    requests.push(api.getParticipationByState(placeId));
  } else if (placeType === 'region') {
    requests.push(api.getParticipationByRegion(place));
  }
  // const requests = api.getUcrParticipationRequests(filters, region, states)
  return Promise.all(requests)
    // .then(response => ({
    //   place, results: response.results
    // }))
    .then(data => reshapeData(data))
    .then(results => dispatch(receivedUcrParticipation(results)))
    .catch(error => dispatch(failedUcrParticipation(error)))
}
