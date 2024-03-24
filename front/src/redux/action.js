import axios from 'axios'

export const ADD_FAV = "ADD_FAV";
export const DELETE_FAV = "DELETE_FAV";
export const FILTER_FAV = "FILTER_FAV";
export const ORDER_FAV = "ORDER_FAV";


// export const addFav = (character) => {
//   return {
//     type: ADD_FAV,
//     payload: character,
//   };
// };

export const addFav =(character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/favorites';
  return async(dispatch) => {
    const {data}=await axios.post(endpoint, character)
     
        return dispatch({
           type: ADD_FAV,
           payload: data,
        });
     }
  };


// export const addFav = (character) => {
//   const endpoint = 'http://localhost:3001/rickandmorty/favorites';
//   return (dispatch) => {
//      axios.post(endpoint, character).then(({ data }) => {
//         return dispatch({
//            type: ADD_FAV,
//            payload: data,
//         });
//      });
//   };
// };

// export const deleteFav = (id) => {
//   return {
//     type: DELETE_FAV,
//     payload: id,
//   };
// };

export const deleteFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/favorites/' + id;
  return async(dispatch) => {
     const {data}=await axios.delete(endpoint)
        return dispatch({
           type: DELETE_FAV,
           payload: data,
     });     
  };
};

// export const deleteFav = (id) => {
//   const endpoint = 'http://localhost:3001/rickandmorty/favorites/' + id;
//   return (dispatch) => {
//      axios.delete(endpoint).then(({ data }) => {
//         return dispatch({
//            type: DELETE_FAV,
//            payload: data,
//      });
//      });
//   };
// };

export const filterFav = (gender) => {
  return {
    type: FILTER_FAV,
    payload: gender,
  };
};

export const orderFav = (order) => {
  return {
    type: ORDER_FAV,
    payload: order,
  };
};
