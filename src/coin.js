class Coin {
  constructor(params) {
    this.name = params['name'];
    this.symbol = params['symbol'];
    this.apiSymbol = params['id'];
    this.rank = params['rank'];
    this.description = params['description'];
    this.logo = params['whitepaper'].thumbnail;
    this.whitepaper = params.whitepaper;
  }

  updateHistoricalData(){
    let today = new Date();
    let lastYear = new Date();
    lastYear.setFullYear(lastYear.getFullYear() - 1);
    console.log(`ISO date: ${lastYear.toISOString()}`);
    const url = `https://api.coinpaprika.com/v1/coins/${this.apiSymbol}/ohlcv/historical?start=${lastYear.toISOString()}&end=${today.toISOString()}`;
    let params = {};
    params.url = url;
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


export { Coin };
