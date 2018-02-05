import {
  NIBRS_FAILED,
  NIBRS_FETCHING,
  NIBRS_RECEIVED,
} from '../actions/constants'

const initialState = {
  data: null,
  error: null,
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NIBRS_FAILED:
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
    case NIBRS_FETCHING:
      return {
        ...state,
        error: null,
        loading: true,
      }
    case NIBRS_RECEIVED:
      return {
        ...state,
        data: action.data,
        error: null,
        loading: false,
      }
    default:
      return state
  }
}
