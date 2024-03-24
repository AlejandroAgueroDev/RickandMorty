import { useSelector, useDispatch } from "react-redux";
import Cards from "../Cards";
import { filterFav, orderFav } from "../../redux/action";
import React from "react";
import SearchBar from "../SearchBar";
// import '../Favorites/Favorites.css'

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const optionsGender = ["All", "Male", "Female", "Genderless", "unknown"];

  const [aux, setAux] = React.useState(false);

  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(filterFav(event.target.value));
  };

  const handleOrder = (event) => {
    dispatch(orderFav(event.target.value));
    setAux(!aux);
  };

  return (
    <>
      {/* <div className="favorites-style">
        <select className="select-option" onChange={handleOrder}>
          <option value="Ascendente">ASCENDENTE</option>
          <option value="Descendente">DESCENDENTE</option>
        </select>

        <select className="select-option" onChange={handleFilter}>
          {optionsGender.map((option) => (
            <option key={option} value={option}>
              {" "}
              {option}{" "}
            </option>
          ))}
        </select>
      </div> */}

        <Cards characters={favorites} isFavorite={true} />
    </>
  );
};

export default Favorites;
