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
      let coinId = document.getElementById('coinSelect').value;
      event.preventDefault();

      let addCoinCardPromise = portfolio.addCoin(coinId);
      addCoinCardPromise
      .then(function(promiseResult) {
        console.log("newestCoin", promiseResult);
          document.getElementById('coinCards').append(Ui.createCoinCard(promiseResult));
      });
    });
    // document.getElementById('food-big').addEventListener('click', game.large);



    // let startRedraw;
    // game.drawInterval = setInterval(function () {Ui.rerender(game);}, 1000);



  }
});
