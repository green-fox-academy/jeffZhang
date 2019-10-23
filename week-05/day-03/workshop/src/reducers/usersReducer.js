const initState = {
  process: 'FETCH_USERS_DEFAULT',
  users: []
}

const usersReducer = (state = initState, action) => {
  let { type } = action

  switch (type) {
    case 'FETCH_USERS_START':
      return {
        ...state,
        process: type
      }
    case 'FETCH_USERS_SUCCESS':
      return {
        process: type,
        users: action.payload
      }
    case 'FETCH_USERS_ERROR':
      return {
        process: type,
        users: action.payload
      }
    default:
      return state
  }
}

export default usersReducer
