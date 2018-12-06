import createArticle from './createArticle';
import setFullUrl from './setFullUrl';
import {defaultSource} from './index';

createArticle.counter = 0; //Decorator. New property was added

async function displayNews (source = defaultSource) {
    const res = await fetch(setFullUrl(source));
    const response = await res.json();
    response.articles.map(respArticle => {
        createArticle(respArticle);
        createArticle.counter++;
    });
    console.log(createArticle.counter);
}

export default displayNews;