import axios from "axios";

export const FETCHING_TRIPS = "FETCHING_TRIPS";
export const FETCH_TRIPS_SUCCESS = "FETCH_TRIPS_SUCCESS";

export const ADDING_NEW_TRIP = "ADDING_NEW_TRIP";
export const ADD_TRIP_SUCCESS = "ADD_TRIP_SUCCESS";

export const DELETING_TRIP = "DELETING_TRIP";
export const DELETE_TRIP_SUCCESS = "DELETE_TRIP_SUCCESS";

export const UPDATING_TRIP = "UPDATING_TRIP";
export const UPDATE_TRIP_SUCCESS = "UPDATE_TRIP_SUCCESS";

export const getTrips = () => dispatch => {
  const token = localStorage.getItem("loginToken");
  const options = {
    headers: {
      Authorization: token
    }
  };
  dispatch({ type: FETCHING_TRIPS });
  axios
    // .get(`https://guidr-backend.herokuapp.com/user/trips/${id}/all`, options)
    .get(`https://guidr-backend.herokuapp.com/user/trips/all`, options)
    .then(res => {
      dispatch({
        type: FETCH_TRIPS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const addNewTrip = state => dispatch => {
  const token = localStorage.getItem("loginToken");
  const options = {
    headers: {
      Authorization: token
    }
  };
  dispatch({ type: ADDING_NEW_TRIP });
  axios
    .post(
      `https://guidr-backend.herokuapp.com/user/trips/create`,
      state,
      options
    )
    .then(res => {
      console.log(res);
      dispatch({
        type: ADD_TRIP_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteTrip = tripId => dispatch => {
  const token = localStorage.getItem("loginToken");
  const options = {
    headers: {
      Authorization: token
    }
  };
  dispatch({ type: DELETING_TRIP });
  axios
    .delete(`https://guidr-backend.herokuapp.com/user/trips/${tripId}`, options)
    .then(res => {
      dispatch({
        type: DELETE_TRIP_SUCCESS
      });
    })
    .catch(err => console.log(err));
};

export const updateTrip = (tripId, newTrip) => dispatch => {
  const token = localStorage.getItem("loginToken");
  const options = {
    headers: {
      Authorization: token
    }
  };
  dispatch({ type: UPDATING_TRIP });
  axios
    .put(
      `https://guidr-backend.herokuapp.com/user/trips/${tripId}`,
      newTrip,
      options
    )
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
};
