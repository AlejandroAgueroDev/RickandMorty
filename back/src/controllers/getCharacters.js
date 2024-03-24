const axios = require("axios");
const APIKEY = "pi-alejandroaguerodev";

const getCharacterByID = async (req, res) => {
 try {
  const { id } = req.params;
  const { data } = await axios.get(
   `https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`
  );

  const { name, gender, species, image, origin, status } = data

  const character = {
   id,
   name,
   gender,
   species,
   origin,
   image,
   status,
  };

    name ? res.status(200).json(character)
    : res.status(500).json({ message: "Not Found" });
 } catch (error) {
  res.status(500).json({ message: error });
 }
};

//*Promise y expres
// const getCharacterByID = (req, res) => {
//     const {id} = req.params

//     const promise = axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`)
//     promise.then(({data: {id, name, gender, species, image, origin, status}}) => {
//         if (!id) {
//             res.status(404).send("Character Not Found")
//         }

//         const character = {
//             id,
//             name,
//             gender,
//             species,
//             origin,
//             image,
//             status
//         }
//         res.status(200).json(character)
//     })
//     promise.catch(err => {
//         res.status(500).send(`error interno - ${err.message}`)
//     })
// }

module.exports = { getCharacterByID };

// {
// //? conHTTP

//   //!Preguntar porque si pongo return new Promise((res)=>{}) y no se usa sigue funcionando
//   //!esto pasa porque axios o fetch ya hacen el new Promise de manera interna
// const getCharById = (res, id) => {
//   axios.get(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`)
//     .then(({ data }) => {
//       const { name, gender, species, origin, image, status } = data;

//       const character = {
//         id,
//         name,
//         gender,
//         species,
//         origin,
//         image,
//         status,
//       }

//       res.writeHead(200, { "Content-type": "application/json" })
//          .end(JSON.stringify(character))
//       // return res..end(JSON.stringify(character)) Tambien lo puedo poner asi
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-type": "text/plain" })
//          .end(error.message)
//       // return res.end(error.message)
//     })
// }
// }
