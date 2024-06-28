// Init http module
const http = customHttp();

const newsService = (function () {
  const apiKey = "59f8f57d941f4c949655a9e9342069f5";
  const apiUrl = "https://newsapi.org/v2";

  return {
    topHeadlines(country = "ua", callback) {
      http.get(
        // u can add &category=technology after ${country}, before &apiKey if u can tech news
        `${apiUrl}/top-headlines?country=${country}&apiKey=${apiKey}`,
        callback
      );
    },
    everything(query, callback) {
      http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`, callback);
    },
  };
})();