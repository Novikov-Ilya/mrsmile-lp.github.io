const apiKey = '7a67c40c89ea4952830387b8f9e5090e';
const url = 'https://newsapi.org/v2/sources';
const urlNews = 'https://newsapi.org/v2/everything';
const list = document.getElementById('list');
const defaultSource = 'abc-news';
const submitSource = document.getElementById('submitSource');
const mainContent = document.getElementById('maincontent');


function getAllSources() {
    fetch(`${url}?apiKey=${apiKey}`)
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        data.sources.map(function(elem) {
        let option = document.createElement('option');
        let content = document.createTextNode(elem.name);
        option.setAttribute('value', elem.id);
        option.appendChild(content);
        return list.appendChild(option);
        })
    })
}

function displayNews (source) {
    fetch(setFullUrl(source))
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        data.articles.map(function(respArticle) {
            createArticle(respArticle);
        })
    })
}

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

function setFullUrl(source) {
    return `${urlNews}?q=${source}&apiKey=${apiKey}`;
}

function updateNews() {
    source = list.value;
    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
        }
    displayNews(source);
}

getAllSources();
displayNews(defaultSource);