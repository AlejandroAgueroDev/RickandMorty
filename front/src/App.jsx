import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import axios from "axios";
import About from "./views/About.jsx";
import Detail from "./views/Detail.jsx";
import Landing from "./views/Landing.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

const URL = "http://localhost:3001/rickandmorty";

function App() {
 const [characters, setCharacters] = useState([]);
 // const [isLoggedIn, setIsLoggedIn] = useState(false)
 const [access, setAccess] = useState(false);

 const [isLoggedIn, setIsLoggedIn] = useState(false);

 useEffect(() => {
  const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
  setIsLoggedIn(storedIsLoggedIn === "true" ? true : false);
 }, []);

 const navigate = useNavigate();

 function getRandomCharacter() {
  const randomID = Math.floor(Math.random() * 826) + 1;
  const characterExiste = characters.some(
   (character) => character.id === randomID
  );

  if (characterExiste) {
   getRandomCharacter();
   return;
  }

  onSearch(randomID.toString());
 }

 const onSearch = async (id) => {
  const idNumber = parseInt(id);

  if (isNaN(idNumber) || idNumber <= 0 || idNumber > 826) {
   window.alert("Por favor, ingresa un número válido entre 1 y 826 como ID.");
   return;
  }

  const characterExiste = characters.some(
   (character) => character.id === idNumber
  );

  if (characterExiste) {
   window.alert("¡Este personaje ya existe!");
   return;
  }

  try {
   const { data } = await axios(
    `http://localhost:3001/rickandmorty/character/${id}`
   );
   if (data.name) {
    setCharacters((oldChars) => [...oldChars, data]);
   } else {
    window.alert("¡No hay personajes con este ID!");
   }
  } catch (error) {
   alert(error);
  }
 };

 //Sin async await
 //  function onSearch(id) {
 //   const idNumber = parseInt(id);

 //   if (isNaN(idNumber) || idNumber <= 0 || idNumber > 826) {
 //    window.alert("Por favor, ingresa un número válido entre 1 y 826 como ID.");
 //    return;
 //   }

 //   const characterExiste = characters.some(
 //    (character) => character.id === idNumber
 //   ); /*Some se utiliza para verificar si al menos un elemento de un array
 //       cumple con cierta condición. Retorna true si al menos un elemento del
 //       array satisface la condición especificada en la función
 //       de prueba, y false si ninguno de los elementos cumple con la condición */

 //   if (characterExiste) {
 //    window.alert("¡Este personaje ya existe!");
 //    return;
 //   }

 //   //const APIKEY='pi-alejandroaguerodev';
 //   //'https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}'

 //   axios(`http://localhost:3001/rickandmorty/character/${id}`)
 //    .then(({ data }) => {
 //     if (data.name) {
 //      setCharacters((oldChars) => [...oldChars, data]);
 //     } else {
 //      window.alert("¡No hay personajes con este ID!");
 //     }
 //    })
 //    .catch(() => alert("Error"));
 //  }

 const onClose = (id) => {
  setCharacters(
   (oldChars) => oldChars.filter((character) => character.id != parseInt(id)) //si lo hago con promesas puedo poner el estricto
  );
 };

 // const onLogin = (email, password) => {
 //     axios(`${URL}/users/login?user=${email}&password=${password}`)
 //     .then(({data}) => {
 //        if(data.access) {
 //            setIsLoggedIn(true);
 //            localStorage.setItem("isLoggedIn", "true");
 //            navigate('/home');
 //            alert('Datos Exitosos')
 //         } else {
 //             alert('Datos incorrectos')
 //         }
 //     })
 // }

 const onLogin = async (email, password) => {
   try {
    //  console.log('email:',email,'password:',password)
        const { data } = await axios(`${URL}/users/login?user=${email}&password=${password}`);
     if (data.access) {
       setIsLoggedIn(true);
       localStorage.setItem("isLoggedIn", "true");
       navigate("/home");
      //  alert("Datos Exitosos");
       
     } else {
            alert("Datos incorrectos");
     }
   } catch (error) {
     alert("Error al iniciar sesión");
     console.error(error);
   }
 };

 //  const onLogin = (email, password) => {
 //   if (email === "ale@gmail.com" && password === "Alejandro1") {
 //    setIsLoggedIn(true);
 //    localStorage.setItem("isLoggedIn", "true");

 //    // alert('Login Exitoso');
 //   } else {
 //    window.alert("Login Erroneo");
 //   }
 //  };

 const onLogout = () => {
  setIsLoggedIn(false);
  localStorage.setItem("isLoggedIn", "false");
  console.log(isLoggedIn);
 };

 return (
  <div className="App-container">
   <Routes>
    <Route
     path="/"
     element={
      isLoggedIn ? <Navigate to="/home" /> : <Landing onLogin={onLogin} />
     }
    />
    <Route
     path="/home"
     element={
      isLoggedIn ? (
       <Cards characters={characters} onClose={onClose} />
      ) : (
       <Navigate to="/" />
      )
     }
    />
    <Route
     path="/about"
     element={isLoggedIn ? <About /> : <Navigate to="/" />}
    />
    <Route
     path="/detail/:id"
     element={isLoggedIn ? <Detail /> : <Navigate to="/" />}
    />
    <Route path="/favorites" element={<Favorites />} />
   </Routes>
   {isLoggedIn && (
    <Nav
     onSearch={onSearch}
     getRandomCharacter={getRandomCharacter}
     onLogout={onLogout}
    />
   )}
  </div>
 );
}

export default App;
