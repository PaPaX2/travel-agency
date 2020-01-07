/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // DONE - filter by duration
  if(filters.duration.from && filters.duration.to){ //Kajetan
    output = output.filter(trip => trip.days >= filters.duration.from && trip.days <= filters.duration.to);
  }

  // DONE - filter by tags
  if(filters.tags){ //Kajetan
    const pattern = new RegExp(filters.tags, 'i');
    output = output.filter(trip => pattern.test(trip.tags));
  }

  // DONE - sort by cost descending (most expensive goes first)
  output = output.sort((a, b) => {
    return parseFloat(b.cost.replace('$', '').replace(',', '')) - parseFloat(a.cost.replace('$', '').replace(',', ''));
  });

  return output;

};

// DONE - filter trips by tripId

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(trip => trip.id == tripId); //Kajetan

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter(trip => trip.country.code == countryCode); //Kajetan

  // DONE filter trips by countryCode

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
