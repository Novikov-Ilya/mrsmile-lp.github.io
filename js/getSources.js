const apiKey = '7a67c40c89ea4952830387b8f9e5090e';
const url = 'https://newsapi.org/v2/sources?apiKey=';
const urlNews = 'https://newsapi.org/v2/everything?q=';
var list = document.getElementById('list');
const defaultSource = 'abc-news';


function getAllSources() {
    fetch(url + apiKey)
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        data.sources.map(function(elem) {
        var option = document.createElement('option');
        var content = document.createTextNode(elem.name);
        option.setAttribute('value', elem.id);
        option.appendChild(content);
        return list.appendChild(option);
        }).join('\n');
    })
}

function displayNews () {
    fetch(setFullUrl())
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
    
    var article = document.createElement('div');
    article.className = 'article';

    var urlToOriginalArticle = document.createElement('a');
    urlToOriginalArticle.setAttribute('target', '_blank');
    urlToOriginalArticle.setAttribute('href', art.url);
    urlToOriginalArticle.className = 'article-url';

    var articleTitle = document.createElement('h3');
    var articleTitleText = document.createTextNode(art.title);
    articleTitle.appendChild(articleTitleText);

    var articleImage = document.createElement('img');
    if (art.urlToImage){
        articleImage.setAttribute('src', art.urlToImage);
    } else articleImage.setAttribute('src', 'noimage.png');    
    articleImage.className = 'article-image';
    
    var articleDivText = document.createElement('div');
    var articleTextP = document.createElement('p');
    var articleText = document.createTextNode(art.description);
    articleTextP.appendChild(articleText);
    articleDivText.appendChild(articleTextP);

    var articleTextAndImage = document.createElement('div');
    articleTextAndImage.appendChild(articleImage);
    articleTextAndImage.appendChild(articleDivText);
    articleTextAndImage.className = 'article-teaser';

    urlToOriginalArticle.appendChild(articleTitle);
    urlToOriginalArticle.appendChild(articleTextAndImage);

    article.appendChild(urlToOriginalArticle);

    mainContent.appendChild(article);
}

function setFullUrl() {
    return urlNews + defaultSource + '&apiKey=' + apiKey;
}

getAllSources();
displayNews();