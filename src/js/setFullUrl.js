import {urlNews} from './index';
import {apiKey} from './index';


function setFullUrl(source) {
    return `${urlNews}?q=${source}&apiKey=${apiKey}`;
}

export default setFullUrl;