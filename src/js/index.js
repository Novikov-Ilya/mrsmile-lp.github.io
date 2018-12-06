import '../css/main.css';

import setFullUrl from './setFullUrl';
import getAllSources from './getAllSources';
import displayNews from './displayNews';
import createArticle from './createArticle';
import updateNews from './updateNews';
import factoryNews from './factoryNews';

export const list = document.getElementById('list');
export const defaultSource = 'abc-news';
export const mainContent = document.getElementById('maincontent');
export const url = 'https://newsapi.org/v2/sources';
export const apiKey = '7a67c40c89ea4952830387b8f9e5090e';
export const urlNews = 'https://newsapi.org/v2/everything';
export const submitSource = document.getElementById('submitSource');

getAllSources();
factoryNews('display');
submitSource.addEventListener("click", updateNews);