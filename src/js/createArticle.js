function createArticle (art) {
    const mainContent = document.getElementById('maincontent');
    
    let article = document.createElement('div');
    article.className = 'article';

    let urlToOriginalArticle = document.createElement('a');
    urlToOriginalArticle.setAttribute('target', '_blank');
    urlToOriginalArticle.setAttribute('href', art.url);
    urlToOriginalArticle.className = 'article-url';

    let articleTitle = document.createElement('h3');
    let articleTitleText = document.createTextNode(art.title);
    articleTitle.appendChild(articleTitleText);

    let articleImage = document.createElement('img');
    if (art.urlToImage){
        articleImage.setAttribute('src', art.urlToImage);
    } else articleImage.setAttribute('src', 'noimage.png');    
    articleImage.className = 'article-image';
    
    let articleDivText = document.createElement('div');
    let articleTextP = document.createElement('p');
    let articleText = document.createTextNode(art.description);
    articleTextP.appendChild(articleText);
    articleDivText.appendChild(articleTextP);

    let articleTextAndImage = document.createElement('div');
    articleTextAndImage.appendChild(articleImage);
    articleTextAndImage.appendChild(articleDivText);
    articleTextAndImage.className = 'article-teaser';

    urlToOriginalArticle.appendChild(articleTitle);
    urlToOriginalArticle.appendChild(articleTextAndImage);

    article.appendChild(urlToOriginalArticle);

    mainContent.appendChild(article);
}

export default createArticle;