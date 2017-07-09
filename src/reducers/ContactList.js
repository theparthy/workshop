import {
  CONTACT_LIST_REQUEST_SUCCEEDED,
  CONTACT_LIST_REQUEST_FAILED,
  CONTACT_LIST_REQUEST_IN_PROGRESS
} from '../actions'

const initialState = {
  contacts: [],
  lastUpdated: null,
  requestInProgress: false,
  hasError: false,
  error: {}
}

export default (state = initialState, action) => {

  switch (action.type) {
    case CONTACT_LIST_REQUEST_IN_PROGRESS:
      return {
        ...state,
        hasError: false,
        error: {},
        requestInProgress: true
      }
    case CONTACT_LIST_REQUEST_SUCCEEDED:
      return {
        ...state,
        contacts: action.payload.contacts,
        requestInProgress: false,
        lastUpdated: new Date()
      }
    case CONTACT_LIST_REQUEST_FAILED:
      return {
        ...state,
        hasError: true,
        error: action.error,
        requestInProgress: false
      }
    default:
      return state;
  }
}
