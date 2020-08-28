var express = require('express');
var router = express.Router();
// var Mangas = require('../mongo'); 
var ctrlHome = require('../controllers/home'); 
var ctrlDetail = require('../controllers/detail'); 

/* GET home page. */
router.get('/', ctrlHome.homePage);

/* GET detail page */
router.get('/manga/:id', ctrlDetail.detail); 
router.get('/category', ctrlDetail.category); 


module.exports = router;