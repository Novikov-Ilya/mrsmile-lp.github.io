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
            return createArticle(respArticle); 
        }).join('\n');
    })
})
}

function createArticle (art) {
    return `
    <div class="article">
     <a href="${art.url}">${art.url}</a>
    </div> 
    `
}

function setFullUrl() {
    var list = document.getElementById('list');
    source = list.value;
    return urlNews + source + '&apiKey=' + apiKey;
}

getAllSources();