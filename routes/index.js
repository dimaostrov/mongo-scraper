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

router.post("/deleteArticle/:title", deleteArticle);

router.post("/postNote", postNote);

router.post("/deletenote", deleteNote);

module.exports = router;
