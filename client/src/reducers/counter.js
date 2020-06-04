import {
  ADD_FETCHED_DATA,
  ADD_COUNTER,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  REMOVE_COUNTER
} from "../actions/types";
import _ from 'lodash';

function reducer(state = null, action) {
  //console.log(action);
  const nextState = Object.assign({}, state);
  let index = action.type != ADD_FETCHED_DATA&&state ? _.findIndex(state.counter, (o) => {
    return o._id == action.payload.counterID;
  }) : -1

  switch (action.type) {
    case ADD_FETCHED_DATA:
      nextState.counter = action.payload;
      return nextState;
    case ADD_COUNTER:
      nextState.counter.push(action.payload);
      return nextState;
    case INCREASE_COUNTER:
      nextState.counter[index] = action.payload.data
      return nextState;
    case DECREASE_COUNTER:
      nextState.counter[index] = action.payload.data
      return nextState;
    case REMOVE_COUNTER:
      nextState.counter = _.filter(state.counter,(o)=>{
        return o._id != action.payload.counterID;
      });
      return nextState;
    default:
  }
  return state;
}


export default reducer;
