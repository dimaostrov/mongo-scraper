import { Headline } from "../models";
import { insertToDB } from "./headline";

export const act = (req, res) => {
  const dbMethods = (action, data) => {
    switch (action) {
      case scrape:
        break;
      case pA:
        // post articles
        break;
      case gA:
        // get aricles
        break;
      case sA:
        // save article
        break;
      case pN:
        // post note
        break;
      case dN:
        // get aricles
        break;
      case sA:
        // save article
        break;
      default:
        break;
    }
  };
};

export const getFromDB = (req, res) => {
  Headline.find({}).then(response => {
    res.json(response);
  });
};

export const scrapePostReturn = (req, res) => {
  console.log("scrape post return started");
  fetch("http://127.0.0.1:3000/scrape")
    .then(data => data.json())
    .then(dat => dat.map(x => insertToDB(x)))
    .then(b => getFromDB());
};

export const saveArticle = (req, res) => {
  let link = req.body;
  console.log("user is trying to save article with link of " + link);
  Headline.find({ link: id }, function(err, article) {
    if (err) return handleError(err);
    article.saved = true;
    console.log(`${article.title} has been saved`);
  });
};

export const savedArticles = (req, res) => {
  Headline.find({ saved: true }).then(response => {
    res.json(response);
  });
};

export const deleteArticle = (req, res) => {};

export const postNote = (req, res) => {};

export const deleteNote = (req, res) => {};
