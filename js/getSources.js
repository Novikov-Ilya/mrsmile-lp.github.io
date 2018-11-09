export const apiKey = '7a67c40c89ea4952830387b8f9e5090e';
const url = 'https://newsapi.org/v2/sources?apiKey=';
const list = document.getElementById('list');

fetch(url + apiKey)
.then(function(response) {
    return response.json();    
}).then(function(data) {
    data.sources.map(function(elem) {
        var option = document.createElement('option');
        var content = document.createTextNode(elem.name);
        option.setAttribute('name', elem.id);
        option.appendChild(content);
        return list.appendChild(option); 
    }).join('\n');
});