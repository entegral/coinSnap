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
    console.log("adding coin to this.coins array");
    let coinJson = Ui.findCoinById(this.availableCoins, id);
    let url = `https://api.coinpaprika.com/v1/coins/${coinJson.id}`
    let params = {};
    params.url = url;
    let coinApiDataPromise = this.apiCall(params);
    coinApiDataPromise.then((response) => {
      let data = JSON.parse(response)
      let coin = new Coin(data);
      this.coins.push(coin);
      console.log('coin added to this.coins array', this.coins);
    });
    return coinApiDataPromise;
  }

  findPorfolioCoinById(id){
    console.log(`searching profile's coin array for ${id}` , this.coins);
    let foundCoin;
    for (let i = 0; i < this.coins.length; i++){
      console.log('test', this.coins);
      if (this.coins[i].apiSymbol == id) {
        foundCoin = this.coins[i];
      }
    }
    console.log("foundCoin: ",foundCoin);
    return foundCoin;
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
