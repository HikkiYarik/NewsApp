// Remove loader function
function removePreloader(){
    const loader = document.querySelector('.progress');
    if(loader){
      loader.remove();
    }
  }
  
// if error, show error
function showAlert(msg, type= 'success'){
  M.toast({html : msg, classes: type})
}
// function clean container
function cleanContainer(container){
  container.innerHTML = ''
}
  // show empty message
  function showEmptyMessage(){
    modalBtn.style.display = 'flex'
    modalBtn.classList.add('active')
    searchBtn.style.display = 'none';
    modalBtn.click();
  }
  // remove empty message function
  function removeEmptyMessage(){
    modalBtn.style.display = 'none'
    modalBtn.classList.remove('active')
    searchBtn.style.display = 'flex';
  }
  
  // if news have empty img
function ifEmptyImg(articles){
    articles.forEach(el => {
      if(el.urlToImage == null){
        el.urlToImage = 'https://www.jsconsulting.kz/assets/img/noImg.jpg'
      } 
    })
    return
  }
  
