import { getRandomUser } from '../helpers/apiClient'

export const CONTACT_LIST_REQUEST_SUCCEEDED = 'CONTACT_LIST_REQUEST_SUCCEEDED'
export const CONTACT_LIST_REQUEST_FAILED = 'CONTACT_LIST_REQUEST_FAILED'
export const CONTACT_LIST_REQUEST_IN_PROGRESS = 'CONTACT_LIST_REQUEST_IN_PROGRESS'


export const requestContactList = () => (dispatch) => {
  dispatch(requestListInProgress());
  getRandomUser()
    .then((response) => {
      dispatch(requestListSucceeded(response.results));
    })
    .catch((error) => {
      dispatch(requestListFailed(error));
    });
}

export const requestListSucceeded = contacts => {
  return {
    type: CONTACT_LIST_REQUEST_SUCCEEDED,
    payload: {
      contacts: contacts
    }
  }
}

export const requestListFailed = error => {
  return {
    type: CONTACT_LIST_REQUEST_FAILED,
    error
  }
}

export const requestListInProgress = () => {
  return {
    type: CONTACT_LIST_REQUEST_IN_PROGRESS
  }
}
