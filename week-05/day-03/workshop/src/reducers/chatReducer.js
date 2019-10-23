const initState = {
  status: 'DEFAULT',
  messagesData: {},
  errorMesssage: ''
}

const chatReducer = (state = initState, action) => {
  let { type } = action

  switch (type) {
    case 'FETCH_MESSAGE_START':
      return {
        ...state,
        status: type,
        errorMesssage: ''
      }
    case 'FETCH_MESSAGE_SUCCESS':
      return {
        status: type,
        errorMesssage: '',
        messagesData: action.payload
      }
    case 'FETCH_MESSAGE_ERROR':
      return {
        ...state,
        status: type,
        errorMesssage: action.payload.message
      }

    case 'POST_MESSAGE_START':
      return {
        ...state,
        status: type,
        errorMesssage: ''
      }
    case 'POST_MESSAGE_SUCCESS':
      return {
        status: type,
        errorMesssage: '',
        messagesData: {
          messages: [...state.messagesData.messages, action.payload],
          count: state.messagesData.count + 1
        }
      }
    case 'POST_MESSAGE_ERROR':
      return {
        ...state,
        status: type,
        errorMesssage: action.payload.message
      }

    default:
      return state
  }
}

export default chatReducer
