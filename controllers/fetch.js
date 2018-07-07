import promise from "../scripts/scrape";
import request from 'request';

export const fetchResults = (req, res) => {
  promise.then(x => res.send(x));
};

export const homepage = (req, res, next) => {
  getArticles.then(posts => {
    res.render('index', { title:"Scraping Boing Boing", posts });
  })
  
}

const getArticles = new Promise((resolve, reject) => {
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

