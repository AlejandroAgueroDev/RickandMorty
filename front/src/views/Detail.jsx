import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import '../styles/About.css'
import '../styles/Detail.css'


const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const APIKEY='pi-alejandroaguerodev';
    // https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}
    const fetchData = async () => {
      try {
        const response = await axios(
          `http://localhost:3001/rickandmorty/character/${id}`
        );
        const data = response.data;

        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      } catch (error) {
        console.error("Error fetching character details:", error);
      }
    };

    fetchData();

    // Función de limpieza para borrar el carácter al desmontar el componente
    return () => setCharacter({});
  }, [id]);

  return (
    <div className="container">
      <h2>Detalles del personaje: {id}</h2>
      <img src={character.image} alt={character.name} />
      <p>Name: {character.name}</p>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin && character.origin.name}</p>
      {/* <p>Episode: {character.episode}</p>       */}
    </div>
  );
};

export default Detail;
