class Portfolio {
  constructor(params) {
    this.name = params['name'];
    this.description = params['description'];
    this.historicalData = null;
    this.lastApiCall = null;
  }

  updateHistoricalData(coinId, dateString){
    const url = `https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/historical?start=${dateString}`;
    let params = {};
    params.url = url;
    params.coinId = coinId;
    let promise = this.apiCall(params);
    promise.then((response) => {
      this.historicalData = JSON.parse(response);
      console.log(this.historicalData);
    })
  }

  apiCall(params) {
    let promise = new Promise(function(resolve, reject) {

      let request = new XMLHttpRequest();
      const url = params.url;
      console.log("pre-request url: " + url);
      request.onload = function() {
        if (this.status === 200) {
          console.log(request.response);
          resolve(request.response);
        } else {
          console.log(request.statusText);
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
    return promise;
  }

}

export { Portfolio };
