var express = require('express');
var router = express.Router();
// var Mangas = require('../mongo'); 
var ctrlHome = require('../controllers/home'); 
var ctrlDetail = require('../controllers/detail'); 
var ctrlSearch = require('../controllers/search')

/* GET home page. */
router.get('/', ctrlHome.homePage);

/* GET detail page */
router.get('/manga/:id', ctrlDetail.detail); 
router.get('/category', ctrlDetail.category); 

router.get('/search', ctrlSearch.searching); 
// router.get('/manga/search', (req, res) => {
//     console.log(req.query.q);
// })


module.exports = router;