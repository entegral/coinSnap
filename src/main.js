import { Portfolio } from './portfolio';
import { Coin } from './coin'
import { Ui } from './uiPortfolio';
// import { giphy } from './giphy_api'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles.css';


let portfolio = new Portfolio('test', 'test');

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {

    let getCoinPromise = portfolio.getCoins();
    getCoinPromise.then(function(response){
      let dropdown = Ui.renderDropdown(portfolio.availableCoins);
      document.getElementById('coinDropdown').append(dropdown);
    });

    let coinForm = document.getElementById('coinForm');

    coinForm.addEventListener('submit', function(event){
      event.preventDefault();
      let coinId = document.getElementById('coinSelect').value;
      let addCoinCardPromise = portfolio.addCoin(coinId);

      addCoinCardPromise
        .then(function(unparsedCoinApiDataPromise){
          let parsedCoinData = JSON.parse(unparsedCoinApiDataPromise);
          console.log("parsedCoinId" + parsedCoinData['id']);
          let coin = portfolio.findPortfolioCoinById(parsedCoinData['id']);
          coin.getOHLC().then((unparsedResponse) => {
            // console.log("unparsed = " + unparsedResponse);
            let parsedJson = JSON.parse(unparsedResponse)[0];
            coin.open = parsedJson['open'];
            coin.high = parsedJson['high'];
            coin.low = parsedJson['low'];
            coin.close = parsedJson['close'];
            coin.volume = parsedJson['volume'];
            coin.marketcap = parsedJson['market_cap'];
            Ui.createCoinCard(document,coin);

            // });;
        //   return coin;
        // })
        // .then(function(coin) {
        //   // console.log("unparsed ",unparsedCoinApiDataPromise);
        //   // console.log(unparsedCoinApiDataPromise);
        //   // let parsedCoinData = JSON.parse(unparsedCoinApiDataPromise);
        //   // console.log("newestCoin", parsedCoinData['id']);
        //   // let coin = portfolio.findPortfolioCoinById(parsedCoinData['id']);
        //   console.log("coin from then()", coin);
        //   Ui.createCoinCard(document,coin);
        });
      });

    });
  }
});
