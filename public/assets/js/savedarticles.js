const articles = document.getElementById("articles");

var Article = {
  view: function(vnode) {
    return m("article", { class: "bt bb b--black-10"}, [
      m("div", { class: "db pv4 ph3 ph0-l no-underline black" }, [
        m('div', {class: "flex flex-column flex-row-ns"}, [
          m('div', {class: "pr3-ns mb4 mb0-ns w-100 w-40-ns"}, [
            m('a', {href: vnode.attrs.href}, [
              m('img', {src: vnode.attrs.src, class: "db", alt: "title"})
            ])
          ]),
          m('div', {class: "w-100 w-60-ns pl3-ns"}, [
            m('a', {class: "link"}, [
              m('h1', {class: "link f3 fw1 baskerville mt0 lh-title"}, 'title')
            ]),
            m('p', {class: "f6 lh-copy mv0"}, "By author" + vnode.attrs.author),
            m('button', {class: " butn save"}, 'Delete Article'),
            m('div', "notes")
          ])
        ])
      ])
    ]);
  }
};

var count = 0
var increment = function() {
    m.request({
        method: "PUT",
        url: "//rem-rest-api.herokuapp.com/api/tutorial/1",
        data: {count: count + 1},
        withCredentials: true,
    })
    .then(function(data) {
        count = parseInt(data.count)
    })
}

m.mount(articles, Article);

