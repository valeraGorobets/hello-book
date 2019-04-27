const citiesToFollow = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CITY':
      return [
        ...state,
        {
          id: action.id,
          name: action.city,
        }
      ]
    case 'DELETE_CITY':
      return state.filter(city => city.id !== action.id)
    default:
      return state
  }
}
 
export default citiesToFollow;
