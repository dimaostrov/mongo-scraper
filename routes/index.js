import express from 'express';
const router = express.Router();
import {fetchResults, homepage } from '../controllers/fetch';

/* GET home page. */
router.get('/', homepage);

router.get('/scrape', fetchResults)

module.exports = router;