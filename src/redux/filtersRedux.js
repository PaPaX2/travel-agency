/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// DONE - add other action types
export const CHANGE_DURATION = createActionName('CHANGE_DURATION'); //Kajetan
export const ADD_TAG = createActionName('ADD_TAG'); //Kajetan
export const REMOVE_TAG = createActionName('REMOVE_TAG'); //Kajetan

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// DONE - add other action creators
export const changeTripDuration = payload => ({ payload, type: CHANGE_DURATION}); //Kajetan
export const addTripTag = payload => ({ payload, type: ADD_TAG}); //Kajetan
export const removeTripTag = payload => ({ payload, type: REMOVE_TAG}); //Kajetan

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // DONE - handle other action types
    case CHANGE_DURATION: //Kajetan
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          [action.payload.type]: action.payload.value,
        },
      };
    case ADD_TAG: //Kajetan
      return {
        ...statePart,
        tags: [
          ...statePart.tags,
          action.payload.tag],
      };
    case REMOVE_TAG: //Kajetan
      return {
        ...statePart,
        tags: [
          ...statePart.tags.filter(tag => tag != action.payload.tag)],
      };
    default:
      return statePart;
  }
}
