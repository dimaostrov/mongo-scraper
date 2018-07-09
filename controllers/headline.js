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
  Headline.find({}).sort({_id: -1})
  .then(response => {
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
  let id = req.params.id;
  console.log('user is trying to save article with link of ' + id)
  Headline.update({_id: id}, {saved: true}).then(result => console.log(result)).catch(err => res.json(err));
}

export const savedArticles = (req, res) => {
  Headline.find({ saved: true }).then(response => {
    res.json(response);
  });
};

export const deleteArticle = (req, res) => {};

export const postNote = (req, res) => {};

export const deleteNote = (req, res) => {};
