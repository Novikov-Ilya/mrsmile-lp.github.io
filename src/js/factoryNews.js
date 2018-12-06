import updateNews from './updateNews';
import displayNews from './displayNews';
import { defaultSource } from './index';

function factoryNews (action) {
    switch (action) {
        case 'update':
        updateNews();
        break;

        case 'display':
        displayNews(defaultSource);
        break;

        default:
        console.log('incorrect function argument');
    }
}

export default factoryNews;