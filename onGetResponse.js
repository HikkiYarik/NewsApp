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
      ifEmptyImg(res.articles)
      ifEmptyNews(res.articles)
      renderNews(res.articles)
  }