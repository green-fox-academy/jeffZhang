export const fetchMessageStart = () => ({
  type: 'FETCH_MESSAGE_START'
})

export const fetchMessageSuccess = message => ({
  type: 'FETCH_MESSAGE_SUCCESS',
  payload: message
})

export const fetchMessageError = error => ({
  type: 'FETCH_MESSAGE_ERROR',
  payload: error
})

export const fetchMessage = url => {
  return dispatch => {
    dispatch(fetchMessageStart())
    return fetch(url)
      .then(response => response.json())
      .then(data => dispatch(fetchMessageSuccess(data)))
      .catch(error => dispatch(fetchMessageError(error)))
  }
}

export const postMessageStart = () => ({
  type: 'POST_MESSAGE_START'
})

export const postMessageSuccess = message => ({
  type: 'POST_MESSAGE_SUCCESS',
  payload: message
})

export const postMessageError = error => ({
  type: 'POST_MESSAGE_ERROR',
  payload: error
})

export const postMessage = (url, user, text) => {
  return dispatch => {
    dispatch(postMessageStart())
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user,
        text
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(response => response.json())
      .then(data => dispatch(postMessageSuccess(data)))
      .catch(error => dispatch(postMessageError(error)))
  }
}
