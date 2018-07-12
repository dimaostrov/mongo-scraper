const express = require("express");
const router = express.Router();
const { fetchResults, homepage } = require("../controllers/fetch");
const {
  scrapePostReturn,
  getFromDB,
  saveArticle,
  savedArticles,
  deleteArticle,
  postNote,
  deleteNote
} = require("../controllers/headline");

/* GET home page. */
router.get("/", homepage);

router.get("/getfromDB", getFromDB);

router.get("/scrape", fetchResults);

router.get("/scrapepostreturn", scrapePostReturn);

router.post("/saveArticle/:id", saveArticle);

router.get("/saved", savedArticles);

router.post("/deleteArticle/:id", deleteArticle);

router.post("/postNote/:id", postNote);

router.post("/deletenote/:note_id/:post_id", deleteNote);

router.get('/favicon.ico', (req, res) => {
  res.send('huy');
})

module.exports = router;
