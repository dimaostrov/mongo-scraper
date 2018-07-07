const cheerio = require("cheerio");
const request = require("request");
// import SummaryTool from 'node-summary';

const promise = new Promise((resolve, reject) => {
  request(
    {
      method: "GET",
      url: "http://www.boingboing.com"
    },
    function(err, response, body, callback) {
      if (err) reject(err);
      let $ = cheerio.load(body);
      let items = []
      let latestposts = $('.morefeatures').not('.fromtheshop').each(function(i, elem){
        let image = $(this).find($('.thumbnailcontainer')).attr('style').slice(22, -2);
        let title = $(this).find('h2').children().eq(1).text().trim();
        let link = $(this).find('a').attr('href');
        // let summary = getSummary(link);
        items[i] = {image, title, link};
      });
      resolve(items);
    }
  );
});


const getSummary = (url) => {
  request(url, function(err, response, body){
    let $ = cheerio.load(body);
    let summary = $('#story').text();
    resolve(summary);
  })
}


export default promise;
