const {User}=require('../DB_connection')

const login=async(req, res)=>{
    try{
        // console.log('Esto es una query',req.query)
        const {user, password}=req.query

        // console.log('email:',user,'password:',password)
        
        if(!user || !password){
            return res.status(400).send('Faltan parametros')
        }

        const users=await User.findOne({
            where: {email:user}
        })

        if(!users){
            return res.status(404).send('Usuario no encontrado')
        }

        if(users.password===password && users.email===user){
            return res.json({
                access: true
            })
        }else{
            return res.status(403).send('Contraseña incorrecta')
        }

    }catch(error){
        return res.status(500).json(error.message)
    }

}

module.exports=login