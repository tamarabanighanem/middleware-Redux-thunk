// actions.js
import axios from 'axios';

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios.get('https://dummyjson.com/products')
      .then(response => {
        const data = response.data;
        dispatch(fetchDataSuccess(data));
        console.log(data)

      })
      .catch(error => {
        dispatch(fetchDataFailure(error.message));
      });

  };
};

export const fetchDataRequest = () => {
  return {
    type: 'FETCH_DATA_REQUEST'
  };
};

export const fetchDataSuccess = (data) => {
  // Assuming the data is an object with the array under 'products' key
  const dataArray = data.products;
  console.log(dataArray)
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload: dataArray
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: 'FETCH_DATA_FAILURE',
    payload: error
  };
};
