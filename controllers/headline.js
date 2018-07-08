import { Headline } from '../models';

export const getFromDB = (req, res) => {
  Headline.find({})
  .then(response => {
    res.json(response);
  })
}

export const saveArticle = (req, res) => {
  let link = req.body;
  console.log('user is trying to save article with link of ' + link)
  Headline.find({link: id}, function(err, article) {
    if (err) return handleError(err);
    article.saved = true;
    console.log(`${article.title} has been saved`)
  });
}

export const savedArticles = (req, res) => {
  Headline.find({saved: true})
  .then(response => {
    res.json(response);
  })
}

export const deleteArticle = (req, res) => {

}

export const postNote = (req, res) => {

}

export const deleteNote = (req, res) => {

}