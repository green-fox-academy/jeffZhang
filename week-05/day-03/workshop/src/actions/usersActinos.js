export const fetchUsersStart = () => ({
  type: 'FETCH_USERS_START'
})

export const fetchUsersSuccess = users => ({
  type: 'FETCH_USERS_SUCCESS',
  payload: users
})

export const fetchUsersError = error => ({
  type: 'FETCH_USERS_ERROR',
  payload: error
})

export const fetchUsers = url => {
  return dispatch => {
    dispatch(fetchUsersStart())
    return fetch(url)
      .then(response => response.json())
      .then(data => dispatch(fetchUsersSuccess(data)))
      .catch(error => dispatch(fetchUsersError(error)))
  }
}
