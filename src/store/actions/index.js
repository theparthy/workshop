export const USER_SET_TOKEN = 'USER_SET_TOKEN'
export const CONTACT_LIST_REQUEST = 'CONTACT_LIST_REQUEST'
export const CONTACT_LIST_REQUEST_SUCCEEDED = 'CONTACT_LIST_REQUEST_SUCCEEDED'
export const CONTACT_LIST_REQUEST_FAILED = 'CONTACT_LIST_REQUEST_FAILED'
export const CONTACT_LIST_REQUEST_IN_PROGRESS = 'CONTACT_LIST_REQUEST_IN_PROGRESS'

export const setToken = token => {
  return {
    type: USER_SET_TOKEN,
    payload: {token}
  }
}

export const requestContactList = () => {
  return {
    type: CONTACT_LIST_REQUEST
  }
}

export const requestListSucceeded = result => {
  return {
    type: CONTACT_LIST_REQUEST_SUCCEEDED,
    payload: result
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
