const apiKey = '7a67c40c89ea4952830387b8f9e5090e';
const url = 'https://newsapi.org/v2/sources?apiKey=';
const urlNews = 'https://newsapi.org/v2/everything?q=';
var list = document.getElementById('list');


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

    fetch(setFullUrl())
    .then(function(response) {
        return response.json();
    }).then(function(data){
        data.articles.map(function(respArticle) {
           createArticle(respArticle);
        }).join('\n');
    })
})
}

function createArticle (art) {
    const mainContent = document.getElementById('maincontent');
    
    var article = document.createElement('div');
    article.className = 'article';

    var articleTitle = document.createElement('h3');
    var articleTitleText = document.createTextNode(art.title);
    articleTitle.appendChild(articleTitleText);

    var articleImage = document.createElement('img');
    articleImage.setAttribute('src', art.urlToImage);
    articleImage.className = 'article-image';
    
    var articleDivText = document.createElement('div');
    var articleTextP = document.createElement('p');
    var articleText = document.createTextNode(art.content);
    articleTextP.appendChild(articleText);
    articleDivText.appendChild(articleTextP);

    article.appendChild(articleTitle);
    article.appendChild(articleImage);
    article.appendChild(articleDivText);
    
    mainContent.appendChild(article);
}

function setFullUrl() {
    var list = document.getElementById('list');
    source = list.value;
    return urlNews + source + '&apiKey=' + apiKey;
}

getAllSources();