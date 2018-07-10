const promise = require("../scripts/scrape");
const request = require("request");
const { Headline } = require("../models");


const fetchResults = (req, res) => {
  promise.then(x => {
    x.map(article => insertToDb(article));
    res.send(x);
  });
};

// User hits homepage which gets the articles from the db
// and populates new articles into db
// via scrape.
const homepage = (req, res, next) => {
  getArticles.then(posts => {
    res.render("index", { posts });
  })
  .catch(err=> console.log(err));
  scrapeArticles.then(posts => {
    posts.map(post => insertToDb(post));
  }).catch(err=>console.log(err))
};

const insertToDb = (article) => {
  Headline.create({ title: article.title, image: article.image, link: article.link, author: article.author }, function(err, article){
    if(err) return err;
    console.log(`${article.title.split(0, 10)} has been saved`);
  });
}

// get articles from the db
const getArticles = new Promise((resolve, reject) => {
  request(
    {
      method: "GET",
      url: "http://127.0.0.1:3000/getfromDB"
    },
    function(err, response, body, callback) {
      if (err) reject(err);

      resolve(JSON.parse(body));
    }
  );
});

// scrape articles
const scrapeArticles = new Promise((resolve, reject) => {
  request(
    {
      method: "GET",
      url: "http://127.0.0.1:3000/scrape"
    },
    function(err, response, body, callback) {
      if (err) reject(err);

      resolve(JSON.parse(body));
    }
  );
});

module.exports = {
  fetchResults,
  homepage,
  insertToDb
}