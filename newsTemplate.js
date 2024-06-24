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