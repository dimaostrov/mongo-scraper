const express = require("express");
const router = express.Router();
const { fetchResults, homepage } = require("../controllers/fetch");
const {
  scrapePostReturn,
  getFromDB,
  saveArticle,
  savedArticles,
  savedJSON,
  deleteArticle,
  postNote,
  deleteNote,
  getNotes
} = require("../controllers/headline");

/* GET home page. */
router.get("/", homepage);

router.get("/getfromDB", getFromDB);

router.get("/scrape", fetchResults);

router.get("/scrapepostreturn", scrapePostReturn);

router.post("/saveArticle/:id", saveArticle);

router.get("/saved", savedArticles);

router.get('/savedjson', savedJSON);

router.post("/deleteArticle/:id", deleteArticle);

router.get('/notes/:article_id', getNotes);

router.post("/postNote/:article_id", postNote);

router.post("/deletenote/:note_id", deleteNote);

router.get('/favicon.ico', (req, res) => {
  res.send('foo');
})

module.exports = router;
