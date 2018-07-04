import express from 'express';
const router = express.Router();
import fetchResults from '../controllers/fetch';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/scrape', fetchResults)

module.exports = router;