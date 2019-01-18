class Coin {
  constructor(params) {
    this.name = params['name'];
    this.symbol = params['symbol'];
    this.apiSymbol = params['id'];
    this.rank = params['rank'];
    this.description = params['description'];
    this.logo = params['whitepaper'].thumbnail;
    this.whitepaper = params.whitepaper;
    this.holdings = 5;
    this.spotPrice = null;
    this.high = 5;
    this.low = 5;
    this.open = 5;
    this.close = 5;
    this.volume = 5;
    this.marketcap = 5;

  }

  updateHoldings(number){
    this.holdings = number;
  }

  getOHLC(){
    console.log("OHLC update called");
    let params = {};
    params.url = `https://api.coinpaprika.com/v1/coins/${this.apiSymbol}/ohlcv/latest/`;
    let ohlcPromise = this.apiCall(params);
    // ohlcPromise.then((unparsedResponse) => {
    //   // console.log("unparsed = " + unparsedResponse);
    //   let parsedJson = JSON.parse(unparsedResponse)[0];
    //   this.open = parsedJson['open'];
    //   this.high = parsedJson['high'];
    //   this.low = parsedJson['low'];
    //   this.close = parsedJson['close'];
    //   this.volume = parsedJson['volume'];
    //   this.marketcap = parsedJson['market_cap'];
    //   });
    // console.log('OHLC promise executed');
    return ohlcPromise;
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
    return promise;
  }

  apiCall(params) {
    let promise = new Promise(function(resolve, reject) {

      let request = new XMLHttpRequest();
      const url = params.url;
      console.log("pre-request url: " + url);
      request.onload = function() {
        if (this.status === 200) {
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
