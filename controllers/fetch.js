import promise from "../scripts/scrape";

const fetchResults = (req, res) => {
  promise.then(x => res.send(x));
};



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
export default fetchResults;
