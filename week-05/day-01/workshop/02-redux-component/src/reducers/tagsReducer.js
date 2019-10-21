const initState = ['blue', 'bold', 'hipster']

const tagsReducer = (state = initState, action) => {
  let { type, tag } = action
  let newTags = state

  switch (type) {
    case 'ADD_TAG':
      newTags = newTags.find(element => element === tag)
        ? newTags
        : [...state, tag]
      return newTags
    case 'REMOVE_TAG':
      newTags = state.filter(element => element !== tag)
      return newTags
    case 'REMOVE_TAGS':
      return []
    default:
      return state
  }
}

export default tagsReducer
