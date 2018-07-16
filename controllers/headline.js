const { Headline, Note } = require("../models");
const { insertToDB } = require("./headline");

let port = process.env.PORT || '3000';

const getFromDB = (req, res) => {
  Headline.find({})
    .sort({ _id: -1 })
    .populate("notes")
    .then(response => {
      res.json(response);
    });
};

const scrapePostReturn = (req, res) => {
  console.log("scrape post return started");
  fetch(`http://127.0.0.1:${port}/scrape`)
    .then(data => data.json())
    .then(dat => dat.map(x => insertToDB(x)))
    .then(b => getFromDB());
};

const saveArticle = (req, res) => {
  let id = req.params.id;
  console.log("user is trying to save article with link of " + id);
  Headline.update({ _id: id }, { saved: true })
    .then(result => res.json(result))
    .catch(err => res.json(err));
};

const savedArticles = (req, res) => {
  Headline.find({ saved: true }).sort({_id: -1}).populate('notes').select('title').then(response => {
    res.render("saved", { response });
  });
};

const savedJSON = (req, res) => {
  Headline.find({ saved: true }).sort({_id: -1}).then(response => {
    res.json(response);
  });
}

const deleteArticle = (req, res) => {
  let id = req.params.id;
  console.log("user is deleting article with link of " + id);
  Headline.update({ _id: id }, { saved: false, notes: [] })
    .then(result => console.log(result))
    .catch(err => res.json(err));
};

const getNotes = (req, res) => {
  const { article_id } = req.params.article_id;
  Headline.find({_id: article_id}, (err, data) => {
    res.json(data);
  })
  
};

const postNote = (req, res) => {
  console.log(req.params.article_id);
  console.log(req.body);
  const note = {
    body: req.body.text,
    headline: req.params.article_id
  };
  Note.create(note)
  .then( result => {
    Headline.findOneAndUpdate({_id: req.params.id}, {$push: {notes: result._id}}, {new:true })
    .then( data => res.json(result))
    .catch(err => res.json(err));
  })
  .catch(err => res.json(err));
};

const deleteNote = (req, res) => {
  Note.deleteOne({ _id: req.params.note_id}, function(err, res){
    res.end('successful');
  })
};

module.exports = {
  getFromDB,
  getNotes,
  scrapePostReturn,
  saveArticle,
  savedJSON,
  savedArticles,
  deleteArticle,
  postNote,
  deleteNote
};
