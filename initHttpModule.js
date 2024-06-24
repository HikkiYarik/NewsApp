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