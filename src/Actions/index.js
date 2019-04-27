let nextCityId = 0
export const addCity = city => {
  return {
    type: 'ADD_CITY',
    id: nextCityId++,
    city
  }
}

export const switchCity = city => {
  return {
    type: 'SWITCH_CITY',
    city
  }
}