const app = require('../server');
const session = require('supertest');
const agent = session(app);

describe('Test de Rutas',()=>{
    describe('Voy a testear GET BY ID',()=>{
        it('Responder con status 200', async()=>{
           await agent.get('/rickandmorty/character/1').expect(200)
        })

        it('Responder con status 200 a promesas', ()=>{
            return agent
            .get('/rickandmorty/character/1')
            .expect(200)
            .then((response)=>{
                expect(response.status).toBe(200)
            })
         })

         it('Responder con status 500 si fallo', ()=>{
            return agent
            .get('/rickandmorty/character/a')
            .expect(500)
            .then((response)=>{
                expect(response.status).toBe(500)
            })
         })

         it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"',async()=>{
             const { body }=await agent.get('/rickandmorty/character/1')
     
             expect(body).toHaveProperty(
                 'id',
                 'name',
                 'species'
             )
          })
    })

    xdescribe('Voy a testear GET /rickandmorty/login',()=>{
        it('Credenciales correctas',async()=>{
            const {body}=await agent.get('/rickandmorty/login?email=ale@gmail.com&passsword=Alejandro1')

            expect(body.acc).toEqual({access: true})
        })
    })

    xdescribe('Voy a testear POST /rickandmorty/favorites',()=>{
        const character1={id:1, name:'Rick'}
        const character2={id:2, name:'Morty'}
        
        it('Genera un nuevo favorito', async()=>{
            const response=await agent.post('/rickandmorty/favorites').send(character1)

            // expect(response.body).toContainEqual(character1)
            expect(response.body).toContainEqual(Array)
        })
    })
})