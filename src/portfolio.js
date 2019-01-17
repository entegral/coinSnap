import { Coin } from './coin'
import { Ui } from './uiPortfolio'

class Portfolio {
  constructor(params) {
    this.name = params['name'];
    this.description = params['description'];
    this.coins = [];
    this.availableCoins = null;
    this.lastApiCall = null;
  }

  addCoin(id){
    let coinJson = Ui.findCoinById(this.availableCoins, id);
    let coin = new Coin(coinJson);
    this.coins.push(coin);
    console.log(this.coins);

  }

  getCoins(){
    const url = `https://api.coinpaprika.com/v1/coins`;
    let params = {};
    params.url = url;
    let promise = this.apiCall(params);
    promise.then((response) => {
      this.availableCoins = JSON.parse(response);
      console.log(this.availableCoins);
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
