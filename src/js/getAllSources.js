import {url} from './index';
import {apiKey} from './index';

async function getAllSources() {
    const res = await fetch(`${url}?apiKey=${apiKey}`);    
    const response = await res.json();
    response.sources.map(elem => {
        let option = document.createElement('option');
        let content = document.createTextNode(elem.name);
        option.setAttribute('value', elem.id);
        option.appendChild(content);
        return list.appendChild(option);
    });
}

export default getAllSources;