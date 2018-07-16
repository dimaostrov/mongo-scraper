const articles = document.getElementById("articles");

var Article = {
  deleteArticle: function(url){
    m.request({
      method: "POST",
      url: '/deleteArticle/' + url
    })
  },
  view: function(vnode) {
    return m("article", { class: "bt bb b--black-10" }, [
      m("div", { class: "db pv4 ph3 ph0-l no-underline black" }, [
        m("div", { class: "flex flex-column flex-row-ns" }, [
          m("div", { class: "pr3-ns mb4 mb0-ns w-100 w-40-ns" }, [
            m("a", { href: vnode.attrs.href }, [
              m("img", {
                src: vnode.attrs.src,
                class: "db",
                alt: vnode.attrs.title
              })
            ])
          ]),
          m("div", { class: "w-100 w-60-ns pl3-ns" }, [
            m("a", { class: "link" }, [
              m(
                "h1",
                { class: "link f3 fw1 baskerville mt0 lh-title" },
                vnode.attrs.title
              )
            ]),
            m(
              "p",
              { class: "f6 lh-copy mv0" },
              "By author" + vnode.attrs.author
            ),
            m("button", { class: "butn pa2 fr bg-red", onclick: this.deleteArticle }, "X"),
            m("div", "notes")
          ])
        ])
      ])
    ]);
  }
};

let dat;

function getSavedArticles() {
  return m.request("/savedjson");
}

getSavedArticles().then(article => m.render(articles, articleList(article)));

function articleList(articles) {
  return articles.map(a =>
    m(Article, { href: a.link, src: a.image, author: a.author, title: a.title })
  );
}

// const data = [{"notes":[],"saved":true,"_id":"5b4bb810befe4a477d73549d","title":"Ben Carson wants to raise rents on public housing tenants by 300%+, attacking elderly, people with disabilities and working poor","image":"https://i1.wp.com/media.boingboing.net/wp-content/uploads/2018/07/Living_in_a_stable._Wellcome_L0004849.jpg?ssl=1","link":"https://boingboing.net/2018/07/15/dickens-larping.html","author":"\n\t\t\t\t\tCoryÂ Doctorow\t\t\t\t","__v":0},{"notes":[],"saved":true,"_id":"5b4945797e4b27560110736e","title":"Scarlett Johansson will no longer play a transgender man in her next film","image":"https://i2.wp.com/media.boingboing.net/wp-content/uploads/2018/07/Scarlett_Johansson_CeÌsars_2014.jpg?ssl=1","link":"https://boingboing.net/2018/07/13/scarlett-johansson-will-no-lon.html","author":"\n\t\t\t\t\tAndreaÂ James\t\t\t\t","__v":0},{"notes":[],"saved":true,"_id":"5b4945797e4b27560110736d","title":"Microsoft asks Congress to regulate facial recognition technology","image":"https://i0.wp.com/media.boingboing.net/wp-content/uploads/2018/07/sh-1.jpg?ssl=1","link":"https://boingboing.net/2018/07/13/facial-recognition.html","author":"\n\t\t\t\t\tXeniÂ Jardin\t\t\t\t","__v":0},{"notes":[],"saved":true,"_id":"5b44c7d0d78f00612c8ad094","title":"Video: life lessons from a 111 year old WWII veteran","image":"https://i2.wp.com/media.boingboing.net/wp-content/uploads/2018/07/maxresdefault-2.jpg?ssl=1","link":"https://boingboing.net/2018/07/10/video-life-lessons-from-a-111.html","author":"\n\t\t\t\t\tSeamusÂ Bellamy\t\t\t\t","__v":0},{"notes":[],"saved":true,"_id":"5b440a63f0a0416fccb3f62f","title":"Making chiptunes with a calculator","image":"https://i0.wp.com/media.boingboing.net/wp-content/uploads/2018/07/screenshot-20.jpg?ssl=1","link":"https://boingboing.net/2018/07/09/making-chiptunes-with-a-calcul.html","author":"\n\t\t\t\t\tLuxÂ Sparks-Pescovitz\t\t\t\t","__v":0},{"notes":[],"saved":true,"_id":"5b43e0988eaec94127e99fb1","title":"Artist is animating \"This is America\" with vintage Mac software","image":"https://i1.wp.com/media.boingboing.net/wp-content/uploads/2018/07/Screen-Shot-2018-07-07-at-10.30.32-AM.png?ssl=1","link":"https://boingboing.net/2018/07/09/artist-is-animating-this-is.html","author":"\n\t\t\t\t\tRustyÂ Blazenhoff\t\t\t\t","__v":0},{"notes":[],"saved":true,"_id":"5b43e0988eaec94127e99fb0","title":"Mimi Pond illustrates what went down at the late Zsa Zsa Gabor's garage sale","image":"https://i1.wp.com/media.boingboing.net/wp-content/uploads/2018/07/Mimi-Pond-Zsa-Zsa-Gabor-garage-sale-Dahling.png?ssl=1","link":"https://boingboing.net/2018/07/09/mimi-pond-illustrates-what-wen.html","author":"\n\t\t\t\t\tRustyÂ Blazenhoff\t\t\t\t","__v":0}];
// m.render(articles, articleList(data))
