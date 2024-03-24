// AntesDeUsarExpress
// const http = require("http");
// const { getCharById } = require("./controllers/getCharById");
// const bodyParser = require('body-parser')
// const data=require('./utils/data.js')
const server=require('./server')
const PORT = 3001;
const {sequelize}=require('./DB_connection')

sequelize.sync({force:false}).then(()=>{//*PARA HACER O NO CAMBIOS EN LA BDD
  console.log('Todo salio bien')
  server.listen(PORT, () => {
    console.log(`Corriendo en perto: ${PORT}`);
  });
}).catch((error=>{console.log('Fallo: ',error.message)}))


// {
  // //!Porque con destructuring si funciona? Esto pasa porque el modeule.export lo hago
// //!como objeto, si no lo pasara como objeto, podria sacar esas llaves

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     const { url } = req
//     console.log(`Recibi una request de: ${url}`)

//     //*    if(url.includes('/rickandmorty/character')){
//     //*    const id=Number(url.split('/').pop()) //*pop()elimina y devuelve el ultimo elemento del array
//     //*    const character=data.find(char=>char.id===id)//*find()devuelve el valor del primer elemento del array que cumple la función de prueba

//     //*     if(character){
//     //*         res.writeHead(200, {'Content-type': 'application/json'})
//     //*         return res.end(JSON.stringify(character))//*stringify() convierte un objeto o valor, en una cadena de texto JSON
//     //*     }else{
//     //*         res.writeHead(404, {'Content-type': 'application/json'})
//     //*         return res.end(JSON.stringify({
//     //*                 error:'Character not found'
//     //*             }))
//     //*     }

//     // }

//     if (url === "/") {
//       res.writeHead(200, { "Content-type": "text/plain" })
//       return res.end("Esta funcionando ok")
//     }

//     if (url.includes("/rickandmorty/character")) {
//       const id = Number(url.split("/").pop())

//       getCharById(res, id)

//     } else {
//       res.writeHead(404, { "Content-type": "text/plain" })
//       return res.end(`La direccion ${url} no existe`)
//     }
//   })
//   .listen(PORT, () => {
//     console.log(`Servidor corriendo en puerto: ${PORT}`)
//     return "localhost" //* direccion de donde se esta corriendo el servidor
//   })
// }
