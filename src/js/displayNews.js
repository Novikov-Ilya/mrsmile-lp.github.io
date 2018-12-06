import createArticle from './createArticle';
import setFullUrl from './setFullUrl';
import {defaultSource} from './index';

async function displayNews (source = defaultSource) {
    const res = await fetch(setFullUrl(source));
    const response = await res.json();
    response.articles.map(respArticle => {
        createArticle(respArticle);
    });
}

export default displayNews;