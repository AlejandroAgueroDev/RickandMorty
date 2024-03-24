import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/Card.css";
import "../styles/Button.css";
import "../styles/SearchBar.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, deleteFav } from "../redux/action";


export default function Card({onClose, characters, isFavorite}) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  // const favorites = useSelector((state) => state.myFavorites);
  const allFavorites = useSelector((state) => state.allFavorites);
  
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFav(characters.id));
    } else {
      setIsFav(true);
      dispatch(addFav(characters));
    }
  };

  useEffect(() => {
    for (let i = 0; i < allFavorites.length; i++) {
      if (allFavorites[i].id == characters.id) {
        setIsFav(true);
      }
    }
  }, []);  
  // favorites, characters van arriba

  return (
    <div className="myCard">
      <div className="innerCard">
        <div className="frontSide">
          <img src={characters.image} alt={`No se encontró la imagen ${characters.name}`} />
          <p>Nombre: {characters.name} | {characters.id}</p>
        </div>

        <div className="backSide">
          {!isFavorite && onClose ? ( 
            <button className="button-close" onClick={() => onClose(characters.id)}>
              <FontAwesomeIcon icon={faXmark} beat />
            </button>
          ) : null}

          <button className='button-close' onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>

          <Link to={`/detail/${characters.id}`} className="card-name">
            {characters.name}
          </Link>
        </div>
      </div>
    </div>
  );
}
