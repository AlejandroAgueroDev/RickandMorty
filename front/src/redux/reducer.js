import { ADD_FAV, DELETE_FAV, FILTER_FAV, ORDER_FAV } from "./action";

const initialState = {
  myFavorites: [],
  character: [],
  allFavorites: [],
  isLogged: false,
  currentOrder: "Ascendente"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allFavorites: action.payload,        
      };  
    case DELETE_FAV:
      // return {
      //   ...state,
      //   myFavorites: state.myFavorites.filter(
      //     (character) => character.id !== action.payload
      //   ),
      // }; 
      return {
        ...state,
        myFavorites: action.payload,
        allFavorites: action.payload,        
      };       
    case FILTER_FAV:
      let favoritesFiltered =
        action.payload === "All"
          ? state.allFavorites
          : state.allFavorites.filter(
              (character) => character.gender === action.payload
            );

            favoritesFiltered.sort((a, b) =>
              state.currentOrder === "Ascendente" ? a.id - b.id : b.id - a.id
            );
      return {
        ...state,
        myFavorites: favoritesFiltered,
      };
    case ORDER_FAV:
      let favoritesOrdered = [...state.myFavorites];
      favoritesOrdered.sort((a, b) => 
      action.payload === "Ascendente" ? a.id - b.id : b.id - a.id
      );
      return {
       ...state,
       myFavorites: favoritesOrdered,
       currentOrder: action.payload,
    };
    default:
      return { ...state };
  }
};