const newsContainer = document.querySelector('.news-container .row');
const searchBtn = document.querySelector('.search-button')
const modalBtn = document.querySelector('.modal-button')
// Custom Http Module
function customHttp() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}
// Init http module
const http = customHttp();

const newsService = (function () {
  const apiKey = "59f8f57d941f4c949655a9e9342069f5";
  const apiUrl = "https://newsapi.org/v2";

  return {
    topHeadlines(country = "ua", callback) {
      http.get(
        `${apiUrl}/top-headlines?country=${country}&category=technology&apiKey=${apiKey}`,
        callback
      );
    },
    everything(query, callback) {
      http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`, callback);
    },
  };
})();
// Elements
const form = document.forms['newsControls'];
const countrySelect = form.elements['country'];
const searchInput = form.elements['search'];


form.addEventListener('submit', (e)=> {
  e.preventDefault();
  loadNews()
})

//  init selects
document.addEventListener("DOMContentLoaded", function () {
  M.AutoInit();
  loadNews();
});

// Load news function
function loadNews() {
  showLoader()
  const country = countrySelect.value;
  const searchText = searchInput.value;
  if(!searchText){
    newsService.topHeadlines(country, onGetResponse)
  } else if(searchText) {
    newsService.everything(searchText, onGetResponse)
  }
  
}
// On get response from server
function onGetResponse(err, res) {
  removePreloader()
  if (err){
    modalBtn.style.display = 'none'
    modalBtn.classList.remove('active')
    searchBtn.style.display = 'flex';
    showAlert(err, 'error-msg')
    return;
  }
  if(!res.articles.length){
    //show empty message
    cleanContainer(newsContainer)
    showEmptyMessage()
    removeEmptyMessage()
    return;
  }
    renderNews(res.articles)
  
  
}
// if error, show error
function showAlert(msg, type= 'success'){
  M.toast({html : msg, classes: type})
}

// try to show empty message v0.1
function showEmptyMessage(){
  modalBtn.style.display = 'flex'
  modalBtn.classList.add('active')
  searchBtn.style.display = 'none';
  modalBtn.click();
}
// remove empty msg function
function removeEmptyMessage(){
  modalBtn.style.display = 'none'
  modalBtn.classList.remove('active')
  searchBtn.style.display = 'flex';
}
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
// function clean container
function cleanContainer(container){
  container.innerHTML = ''
}

// news item template func
function newsTemplate({urlToImage, title, url, description}){
  
  return `
    <div class="col s12">
      <div class="card">
        <div class="card-image">
          <img src="${urlToImage}">
          <span class="card-title">${title || ''}</span>
        </div>
        <div class="card-content">
          <p>${description || ''}</p>
        </div>
        <div class="card-action">
          <a target="_blank" href="${url}">Read more</a>
        </div>
      </div>
    </div>  
  `
}

// Show loader function
function showLoader(){
  document.body.insertAdjacentHTML(
    'afterbegin',
    `
      <div class="progress">
        <div class="indeterminate"></div>
      </div>
    `)
}

// Remove loader function
function removePreloader(){
    // searchBtn.classList.remove('modal-trigger')
    // searchBtn.removeAttribute('data-target')
  const loader = document.querySelector('.progress');
  if(loader){
    loader.remove();
  }
}