const detailsOfCityId = (state = 0, action) => {
  switch (action.type) {
    case 'DITAILS_OF_CITY':
      return action.id;
    default:
      return state
  }
};

export default detailsOfCityId;