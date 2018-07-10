const Headline = require("../models");
const insertToDB = require("./headline");

const act = (req, res) => {
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

const getFromDB = (req, res) => {
  Headline.find({})
    .sort({ _id: -1 })
    .then(response => {
      res.json(response);
    });
};

const scrapePostReturn = (req, res) => {
  console.log("scrape post return started");
  fetch("http://127.0.0.1:3000/scrape")
    .then(data => data.json())
    .then(dat => dat.map(x => insertToDB(x)))
    .then(b => getFromDB());
};

const saveArticle = (req, res) => {
  let id = req.params.id;
  console.log("user is trying to save article with link of " + id);
  Headline.update({ _id: id }, { saved: true })
    .then(result => console.log(result))
    .catch(err => res.json(err));
};

const savedArticles = (req, res) => {
  Headline.find({ saved: true }).then(response => {
    res.json(response);
  });
};

const deleteArticle = (req, res) => {};

const postNote = (req, res) => {};

const deleteNote = (req, res) => {};

module.exports = {
  act,
  getFromDB,
  scrapePostReturn,
  saveArticle,
  savedArticles,
  deleteArticle,
  postNote,
  deleteNote
};
