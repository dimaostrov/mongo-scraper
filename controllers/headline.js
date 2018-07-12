const { Headline, Note } = require("../models");
const { insertToDB } = require("./headline");

let port = process.env.PORT || '3000';

const getFromDB = (req, res) => {
  Headline.find({})
    .sort({ _id: -1 })
    .then(response => {
      res.json(response);
    });
};

const scrapePostReturn = (req, res) => {
  console.log("scrape post return started");
  fetch(`http://127.0.0.1:${port}/scrape`)
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
    res.render("saved", { response });
  });
};

const deleteArticle = (req, res) => {
  let id = req.params.id;
  console.log("user is deleting article with link of " + id);
  Headline.update({ _id: id }, { saved: false })
    .then(result => console.log(result))
    .catch(err => res.json(err));
};

const postNote = (req, res) => {
  
};

const deleteNote = (req, res) => {};

module.exports = {
  getFromDB,
  scrapePostReturn,
  saveArticle,
  savedArticles,
  deleteArticle,
  postNote,
  deleteNote
};
