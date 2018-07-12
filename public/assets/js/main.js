const headerScrapeBtn = document.getElementById("getNewArticles");
const viewSavedBtn = document.getElementById("viewSaved");
const saveBtns = document.getElementsByClassName("save");
const deleteBtns = document.getElementsByClassName("delete");
const notes = document.getElementsByClassName("notes");

const MicroModal = require('micromodal');
MicroModal.init();
// here we will scrape, add to db (if needed)
// and render all in one step
const scrapeNew = () => emptyFetchRender("/scrapepostreturn");
const getSaved = () => emptyFetchRender("/saved");

const viewNotes = element => {
  let parent = element.parentElement;
  let modal = document.createElement('div');
  modal.innerHTML = `<form class="pa4 black-80">
  <div>
    <textarea id="comment" name="comment" class="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
  </div>
</form>`;
  parent.appendChild(modal);
};

const saveArticle = element => {
  console.log("user clicker on val " + element.value);
  fetch(`/saveArticle/${element.value}`, {
    method: "POST"
  }).then(response => response.json());
};

const deleteArticle = element => {
  console.log("user clicker on val " + element.value);
  fetch(`/deleteArticle/${element.value}`, {
    method: "POST"
  }).then(response => response.json());
};

headerScrapeBtn.addEventListener("click", scrapeNew);

// just a general function to empty container div
function emptyFetchRender(url) {
  let articles = document.getElementById("scraped-articles");
  articles.innerHTML = "";
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => data.map(x => articlesTemplate(x)))
    .then(posts => (articles.innerHTML = posts));
}

const articlesTemplate = data => {
  return `<article class="bt bb b--black-10">
    <div class="db pv4 ph3 ph0-l no-underline black" href="#0">
      <div class="flex flex-column flex-row-ns">
        <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <a href=${data.link}>
          <img src=${data.image} class="db" alt=${data.title}>
          </a>
        </div>
        <div class="w-100 w-60-ns pl3-ns">
          <a href=${data.link}>
          <h1 class="f3 link fw1 baskerville mt0 lh-title">${data.title}</h1>
          </a>
          <p class="f6 lh-copy mv0">${"By " + data.author}</p>
          <button id="save" value=${
            data._id
          } onclick="saveArticle(this)">Save</button>
          <button class="notes">View Notes</button>
        </div>
      </div>
    </div>
  </article>`;
};
