import axios from "axios";


const apiUrl = '/api/counters';

function FetchCounter() {
  return axios.get(apiUrl);
}
function AddNewCounter() {
  return axios.post(apiUrl);
}
function IncreaseCounter(id) {
  return axios.put(`/api/counters/${id}/increment`);
}
function DecreaseCounter(id) {
  return axios.put(`/api/counters/${id}/decrement`);
}
function RemoveCounter(id) {
  return axios.delete(`/api/counters/${id}`);
}


export {
  AddNewCounter,
  IncreaseCounter,
  DecreaseCounter,
  RemoveCounter,
  FetchCounter
};
