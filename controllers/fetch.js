const scrape = require("../scripts/scrape");
const request = require("request");
const { Headline } = require("../models");

let port = process.env.PORT || '3000';

const fetchResults = (req, res) => {
  scrape.then(x => {
    x.map(article => insertToDb(article));
    res.send(x);
  });
};

// User hits homepage which gets the articles from the db
// and populates new articles into db
// via scrape.
const homepage = (req, res, next) => {
  getArticles()
    .then(posts => {
      res.render("index", { posts });
    })
    .catch(err => console.log(err));
  scrapeArticles()
    .then(posts => {
      posts.map(post => insertToDb(post));
    })
    .catch(err => console.log(err));

  };

const insertToDb = article => {
  Headline.create(
    {
      title: article.title,
      image: article.image,
      link: article.link,
      author: article.author
    },
    function(err, article) {
      if (err) return err;
      console.log(`${article.title.split(0, 10)} has been saved`);
    }
  );
};

// get articles from the db
const getArticles = () => {
  let action = new Promise((resolve, reject) => {
    request(
      {
        method: "GET",
        url: `http://127.0.0.1:${port}/getfromDB`
      },
      function(err, response, body, callback) {
        if (err) reject(err);

        resolve(JSON.parse(body));
      }
    );
  });
  return action;
};

// scrape articles
const scrapeArticles = () => {
  let action = new Promise((resolve, reject) => {
    request(
      {
        method: "GET",
        url: `http://127.0.0.1:${port}/scrape`
      },
      function(err, response, body, callback) {
        if (err) reject(err);

        resolve(JSON.parse(body));
      }
    );
  });
  return action;
};

module.exports = {
  fetchResults,
  homepage,
  insertToDb
};
