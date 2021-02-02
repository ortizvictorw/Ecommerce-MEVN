const express = require('express');
const upload = require('../libs/multer');
const {images} = require('../controllers/Api/imagesController')
const api = express.Router()

api.post('/products', upload.single(image),images)

module.exports = api