import { Portfolio } from './portfolio';
import { Ui } from './uiPortfolio';
// import { giphy } from './giphy_api'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles.css';


let portfolio = new Portfolio();

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {

    document.getElementById('coinDropdown').append(Ui.renderDropdown(portfolio.availableCoins))

    // document.getElementById('food-small').addEventListener('click', game.small);
    // document.getElementById('food-big').addEventListener('click', game.large);



    // let startRedraw;
    // game.drawInterval = setInterval(function () {Ui.rerender(game);}, 1000);



  }
});
