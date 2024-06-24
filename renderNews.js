// function render news
function renderNews(news){
    searchBtn.classList.remove('modal-trigger')
    searchBtn.removeAttribute('data-target')
  if(newsContainer.children.length){
    cleanContainer(newsContainer)
  }
  let fragment = '';
  news.forEach(newsItem => {
    const el = newsTemplate(newsItem);
    fragment += el;
  });
  newsContainer.insertAdjacentHTML("afterbegin", fragment);
}