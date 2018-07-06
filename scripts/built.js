'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var body = void 0;

var scrapeBoingBoing = function scrapeBoingBoing() {
  (0, _request2.default)({
    method: 'GET',
    url: 'https://imgur.com'
  }, function (err, response, body, callback) {
    if (err) return console.error(err);
    var $ = _cheerio2.default.load(body);
    return $.html();
  });
  return body;
};

exports.default = scrapeBoingBoing;
