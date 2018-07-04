import scrapeBoingBoing from '../scripts/scrape';

const fetchResults = (req, res, next) => {
  res.json(scrapeBoingBoing);
}

export default fetchResults;