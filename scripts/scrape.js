import cheerio from 'cheerio';
import request from 'request';


const scrapeBoingBoing = () => {
  request('http://www.boingboing.com/', (err, resp, html) => {
    if (!err){
      const $ = cheerio.load(html);
      console.log(html);
      return { "heello": "world"}
    }
  })
}


export default scrapeBoingBoing;