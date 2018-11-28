import displayNews from './displayNews';

const mainContent = document.getElementById('maincontent');

function updateNews() {
    const source = list.value;
    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
        }
    displayNews(source);
}

export default updateNews;