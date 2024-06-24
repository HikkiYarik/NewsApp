// news container
const newsContainer = document.querySelector('.news-container .row');
// search btn
const searchBtn = document.querySelector('.search-button')
// autoclick modal btn
const modalBtn = document.querySelector('.modal-button')

// form
const form = document.forms['newsControls'];
// form element - country
const countrySelect = form.elements['country'];
// form element - search
const searchInput = form.elements['search'];

// form event listener: when submit - load news
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
  // preloader
  showLoader()
  // form element country value
  const country = countrySelect.value;
  // form element search value
  const searchText = searchInput.value;
  // if searchText empty and else
  if(!searchText){
    newsService.topHeadlines(country, onGetResponse)
  } else if(searchText) {
    newsService.everything(searchText, onGetResponse)
  }
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




