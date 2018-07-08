import express from "express";
const router = express.Router();
import { fetchResults, homepage } from "../controllers/fetch";
import {
  scrapePostReturn,
  getFromDB,
  saveArticle,
  savedArticles,
  deleteArticle,
  postNote,
  deleteNote
} from "../controllers/headline";

/* GET home page. */
router.get("/", homepage);

router.get("/getfromDB", getFromDB);

router.get("/scrape", fetchResults);

router.get("/scrapepostreturn", scrapePostReturn);

router.post("/saveArticle/:title", saveArticle);

router.get("/saved", savedArticles);

router.post("/deleteArticle/:title", deleteArticle);

router.post("/postNote", postNote);

router.post("/deletenote", deleteNote);

module.exports = router;
