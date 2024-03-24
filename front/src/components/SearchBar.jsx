import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {faPlus, faRandom, faArrowRightFromBracket, faStar, faHouse, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import "../styles/Button.css";
import "../styles/SearchBar.css";

import { useSelector, useDispatch } from "react-redux";
import Cards from "./Cards";
import { filterFav, orderFav } from '../redux/action'
import React from "react";



export default function SearchBar({ onSearch, getRandomCharacter, onLogout }) {
  const [id, setId] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  
  const handleChange = (event) => {
    const { value } = event.target;
    setId(value);
  };
  
  const handleSearch = () => {
    const inputSearch = document.getElementById("inputSearch");
    onSearch(inputSearch.value);
    inputSearch.value = "";
  };

  const handleRandom = () => {
    getRandomCharacter();
  };
  
  const handleLogout = () => {
    onLogout();
  };
  
  
  const favorites = useSelector((state) => state.myFavorites);
  
  const optionsGender = ["All", "Male", "Female", "Genderless", "unknown"];
  
  const [aux, setAux] = React.useState(false);
  
  const dispatch = useDispatch();
  
  const handleFilter = (event) => {
    dispatch(filterFav(event.target.value));
    console.log(1)
  };

  const handleOrder = (event) => {
    dispatch(orderFav(event.target.value));
    setAux(!aux);
    console.log(1)
  };

  return (
    <>
      <div className="nav-container">
        <div className="button-container">
          {location.pathname === "/home" && (
            <div className="textInputWrapper">
              <input
                id="inputSearch"
                type="search"
                onChange={(elemento) => handleChange(elemento)}
                placeholder="Ingresa un ID"
                className="textInput"
                autoComplete="off"
              />
            </div>
          )}

          {location.pathname === "/home" && (
            <>
              <button className="button-close" onClick={handleSearch}>
                <FontAwesomeIcon icon={faPlus} /> AGREGAR
              </button>
              <button className="button-close" onClick={handleRandom}>
                <FontAwesomeIcon icon={faRandom} /> RANDOM
              </button>
              <button
                className="button-close"
                onClick={() => navigate("/favorites")}
              >
                <FontAwesomeIcon
                  icon={faStar}
                  bounce
                  style={{ color: "#000000" }}
                />
                FAVORITES
              </button>
            </>
          )}

          <Link to="/about" className="button-close button-link">
            <FontAwesomeIcon icon={faUserGroup} /> ABOUT
          </Link>
          <Link to="/home" className="button-close button-link">
            <FontAwesomeIcon icon={faHouse} />
          </Link>

          {location.pathname === "/home" && (
            <button className="button-close" onClick={handleLogout}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </button>
          )}

          {location.pathname === "/favorites" && (
            <>
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
            </>
          )}
        </div>
      </div>
    </>
  );
}

