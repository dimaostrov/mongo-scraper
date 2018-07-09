import express from "express";
const router = express.Router();
import { homepage } from "../controllers/fetch";

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
