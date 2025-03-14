const express = require('express')
const router = express.Router()
const postsController = require('../controllers/postsController')

// index
router.get('/', postsController.index)

// show
router.get('/:slug', postsController.show)

// store
router.post('/', postsController.store)

// update
router.put('/:slug', postsController.update)

// modify
router.patch('/:slug', postsController.modify)

// destroy
router.delete('/:slug', postsController.destroy)

module.exports = router