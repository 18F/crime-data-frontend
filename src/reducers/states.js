import {
  UCR_STATE_FAILED,
  UCR_STATE_FETCHING,
  UCR_STATE_RECEIVED,
} from '../actions/constants'

const initialState = {
  states: {},
  error: null,
  loading: false,
  loaded: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UCR_STATE_FAILED:
      if (action.error.response && action.error.config) {
        return {
          ...state,
          error: {
            code: action.error.response.status,
            message: action.error.message,
            url: action.error.config.url,
          },
          loading: false,
        }
      }
      return {
        ...state,
        error: { message: action.error.message },
        loading: false,
      }
    case UCR_STATE_FETCHING:
      return {
        ...state,
        error: null,
        loading: true,
      }
    case UCR_STATE_RECEIVED:
      return {
        ...state,
        states: {
          ...state.data,
          ...action.states.results,
        },
        loading: false,
        loaded: true,
      }
    default:
      return state
  }
}
