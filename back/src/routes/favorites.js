const router = require('express').Router()
// const {addFav, deleteFav} = require('../controllers/favorites')

// router.post("/", addFav)
// router.delete("/:id", deleteFav)

// module.exports = router

const postFav=require('../controllers/postFav')
const deleteFav=require('../controllers/deleteFav')

router.post('/', postFav)
router.delete('/:id',deleteFav)

module.exports = router