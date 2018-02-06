import { POLICE_EMPLOYMENT_FAILED, POLICE_EMPLOYMENT_FETCHING, POLICE_EMPLOYMENT_RECEIVED } from './constants'
import api from '../util/api/policeemployment'
import { reshapeData } from '../util/policeEmployment'

export const failedPoliceEmployment = error => ({
  type: POLICE_EMPLOYMENT_FAILED,
  error,
})

export const fetchingPoliceEmployment = () => ({
  type: POLICE_EMPLOYMENT_FETCHING,
})

export const receivedPoliceEmployment = data => ({
  type: POLICE_EMPLOYMENT_RECEIVED,
  data,
})

export const fetchPoliceEmployment = params => dispatch => {
  dispatch(fetchingPoliceEmployment())

  let request = api.getPoliceEmploymentNational();
  if (params.placeType === 'state') {
    request = api.getPoliceEmploymentByStateAbbr(params.placeId)
  } else if (params.placeType === 'agency') {
    request = api.getPoliceEmploymentByOri(params.placeId)
  } else if (params.placeType === 'region') {
    request = api.getPoliceEmploymentByRegion(params.placeId)
  } else {
    request = api.getPoliceEmploymentNational()
  }

  return request
    // .then(data => reshapeData(data))
    .then(data => dispatch(receivedPoliceEmployment(data)))
    .catch(error => dispatch(failedPoliceEmployment(error)))
}
