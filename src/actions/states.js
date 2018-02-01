import {
  UCR_STATE_FAILED,
  UCR_STATE_FETCHING,
  UCR_STATE_RECEIVED,
} from './constants'
import api from '../util/api/lookups'

export const failedUcrState = error => ({
  type: UCR_STATE_FAILED,
  error,
})

export const fetchingUcrState = () => ({
  type: UCR_STATE_FETCHING,
})

export const receivedUcrState = states => ({
  type: UCR_STATE_RECEIVED,
  states,
})

export const fetchUcrState = () => dispatch => {
  dispatch(fetchingUcrState())
  return api.getLookupState({ per_page: 100 })
    .then(response => ({ results: response.results }))
    .then(data => dispatch(receivedUcrState(data)))
    .catch(error => dispatch(failedUcrState(error)))
}
