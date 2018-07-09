import { Headline } from "../models";
import { insertToDB } from "../controllers/headline";
import promise from "../scripts/scrape";
import request from "request";

const dbMethods = (action, data = []) => {
  const waitForIt = new Promise(resolve => {
    switch (action) {
      case scrape:
        resolve(promise());
        break;
      case pA:
        // post articles
        resolve(insertArticles(data));
        break;
      case gA:
        // get aricles
        return getFromDB(data);
        break;
      case sA:
        // save article
        return saveArticle(id);
        break;
      case pN:
        // post note
        return postNote(data);
        break;
      case dN:
        // delete note
        return deleteNote(data);
        break;
      case gsA:
        // get saved articles
        return savedArticles();
        break;
      default:
        break;
    }
  });
};
const insertArticles = data => {
  data.map(x => insertToDB(x));
};

const getFromDB = target => {
  Headline.find({ target }).then(response => {
    res.json(response);
  });
};

const saveArticle = articleID => {
  console.log("user is trying to save article with link of " + articleID);
  Headline.find({ _id: articleID }, function(err, article) {
    if (err) return handleError(err);
    article.saved = true;
    console.log(`${article.title} has been saved`);
  });
};

const savedArticles = () => {
  Headline.find({ saved: true }).then(response => {
    res.json(response);
  });
};

export default dbMethods;
