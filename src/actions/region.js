import {
  UCR_REGION_FAILED,
  UCR_REGION_FETCHING,
  UCR_REGION_RECEIVED,
} from './constants'
import api from '../util/api/lookups'

export const failedUcrRegion = error => ({
  type: UCR_REGION_FAILED,
  error,
})

export const fetchingUcrRegion = () => ({
  type: UCR_REGION_FETCHING,
})

export const receivedUcrRegion = regions => ({
  type: UCR_REGION_RECEIVED,
  regions,
})

export const fetchUcrRegion = () => dispatch => {
  dispatch(fetchingUcrRegion())
  return api.getLookupRegion({ per_page: 100 })
    .then(response => ({ results: response.results }))
    .then(data => dispatch(receivedUcrRegion(data)))
    .catch(error => dispatch(failedUcrRegion(error)))
}
