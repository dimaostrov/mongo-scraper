import promise from "../scripts/scrape";
import request from "request";
import { Headline } from "../models";

export const fetchResults = (req, res) => {
  promise.then(x => {
    x.map(article => insertToDb(article));
    res.send(x);
  });
};

// User hits homepage which gets the articles from the db
// and populates new articles into db
// via scrape.
export const homepage = (req, res, next) => {
  getArticles.then(posts => {
    res.render("index", { posts });
  });
  scrapeArticles.then(posts => {
    posts.map(post => insertToDb(post));
  })
};

export const insertToDb = (article) => {
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
/*
const fetchResults = (req, res, next) => {
  const source = Observable.create((observer) => {
    observer.next(scrapeBoingBoing());
  })
  source.forEach(data => {
    console.log(data)
  })
}
*/

/*
const fetchResults = (req, res, next) => {
  const promise = new Promise((resolve) => {
    resolve(scrapeBoingBoing());
    console.log('started fetching')
  })
  promise.then(data => {
    console.log(data)
  })
}
*/
