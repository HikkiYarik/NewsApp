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
    // filters for news
    const articles = res.articles;
    function goodest(el){
      // if news not full - delete this news (they falses), else news - true and return to arr
     if(el.description == '[Removed]' || el.title == '[Removed]' || el.description == null || el.title == null || el.content == null){
      return false
     }
     return el
    }
  
      ifEmptyImg(articles.filter(goodest))
      renderNews(articles.filter(goodest))
  }
  