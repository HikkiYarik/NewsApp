// Custom Http Module
function customHttp() {
    return {
      get(url, callback) {
        try {
          const request = new XMLHttpRequest();
          request.open("GET", url);
          request.addEventListener("load", () => {
            if (Math.floor(request.status / 100) !== 2) {
              callback(`Error. Status code: ${request.status}`, request);
              return;
            }
            const response = JSON.parse(request.responseText);
            callback(null, response);
          });
  
          request.addEventListener("error", () => {
            callback(`Error. Status code: ${request.status}`, request);
          });
  
          request.send();
        } catch (error) {
          callback(error);
        }
      },
      post(url, body, headers, callback) {
        try {
          const request = new XMLHttpRequest();
          request.open("POST", url);
          request.addEventListener("load", () => {
            if (Math.floor(request.status / 100) !== 2) {
              callback(`Error. Status code: ${request.status}`, request);
              return;
            }
            const response = JSON.parse(request.responseText);
            callback(null, response);
          });
  
          request.addEventListener("error", () => {
            callback(`Error. Status code: ${request.status}`, request);
          });
  
          if (headers) {
            Object.entries(headers).forEach(([key, value]) => {
              request.setRequestHeader(key, value);
            });
          }

          request.send(JSON.stringify(body));
        } catch (error) {
          callback(error);
        }
      },
    };
  }
  