const emptyScrapedAndRefetchArticles = () => {
  let articles = document.getElementById('scraped-articles');
  articles.innerHTML = '';
  fetch('http://127.0.0.1:3000/scrape')
  .then(response => {
    return response.json();
  })
  .then(function(myJson){
    articles.innerHTML = myJson.map(x => articlesTemplate(x));
  })
}


const headerScrapeBtn = document.getElementById('getNewArticles');

headerScrapeBtn.addEventListener('click', emptyScrapedAndRefetchArticles)

const articlesTemplate = (data) => {
    return `<article class="bt bb b--black-10">
    <a class="db pv4 ph3 ph0-l no-underline black dim" href="#0">
      <div class="flex flex-column flex-row-ns">
        <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img src=${data.image} class="db" alt=${data.title}>
        </div>
        <div class="w-100 w-60-ns pl3-ns">
          <h1 class="f3 fw1 baskerville mt0 lh-title">${data.title}</h1>
          <p class="f6 f5-l lh-copy">
            The tech giant says it is ready to begin planning a quantum
            computer, a powerful cpu machine that relies on subatomic particles instead
            of transistors.
          </p>
          <p class="f6 lh-copy mv0">By Robin Darnell</p>
          <button id="save">Save</button>
        </div>
      </div>
    </a>
  </article>`
  }