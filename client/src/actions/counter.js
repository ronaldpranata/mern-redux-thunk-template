import {
  ADD_FETCHED_DATA,
  ADD_COUNTER,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  REMOVE_COUNTER
} from './types.js';


import {
  AddNewCounter,
  IncreaseCounter,
  DecreaseCounter,
  RemoveCounter,
  FetchCounter
} from '../api/counter.js';


export const addCounter = () => {
  return (dispatch) => {
    return AddNewCounter()
      .then(response => {
        return response.data
      })
      .then(data => {
        console.log(data);
        dispatch({
          type: ADD_COUNTER,
          payload: data
        })
      })
      .catch(error => {
        throw (error);
      });
  };

};
export const increaseCounter = (counterID) => {
  return (dispatch) => {
    return IncreaseCounter(counterID)
      .then(response => {
        return response.data
      })
      .then(data => {
        console.log(data);
        dispatch({
          type: INCREASE_COUNTER,
          payload: {
            counterID,
            data
          }
        })
      })
      .catch(error => {
        throw (error);
      });
  };

};
export const decreaseCounter = (counterID) => {
  return (dispatch) => {
    return DecreaseCounter(counterID)
      .then(response => {
        return response.data
      })
      .then(data => {
        console.log(data);
        dispatch({
          type: DECREASE_COUNTER,
          payload: {
            counterID,
            data
          }
        })
      })
      .catch(error => {
        throw (error);
      });
  };

};

export const removeCounter = (counterID) => {
  return (dispatch) => {
    return RemoveCounter(counterID)
      .then(response => {
        return response.data
      })
      .then(data => {
        console.log(data);
        dispatch({
          type: REMOVE_COUNTER,
          payload: {
            counterID,
            data
          }
        })
      })
      .catch(error => {
        throw (error);
      });
  };
}

export const fetchData = () => {
  return (dispatch) => {
    return FetchCounter()
      .then(response => {
        return response.data
      })
      .then(data => {
        console.log(data);
        dispatch({
          type: ADD_FETCHED_DATA,
          payload: data
        })
      })
      .catch(error => {
        throw (error);
      });
  };
};
