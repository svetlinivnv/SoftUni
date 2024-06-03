function getArticleGenerator(articles) {
    const contentEl = document.querySelector('#content');
    let state = 0;

    return function showNext() {
        let articleEl = document.createElement('article');
        if (state < articles.length) {
            let article = articles[state];
            articleEl.textContent = article;
            contentEl.append(articleEl);
            state++
        }
    }
}