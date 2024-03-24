const router = require('express').Router()
// const {login} = require('../controllers/users')

// router.get("/login", login)

// module.exports = router

const login=require('../controllers/login')
const postUser=require('../controllers/postUser')

router.get('/login', login)
router.post('/login',postUser)

module.exports=router