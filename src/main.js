import { Tamagatchi } from './tamagatchi';
import { Ui } from './uiTamagatchi';
// import { giphy } from './giphy_api'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles.css';


let game = new Tamagatchi();

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {

    document.getElementById('food-small').addEventListener('click', game.small);
    document.getElementById('food-big').addEventListener('click', game.large);

    document.getElementById('play-small').addEventListener('click', game.smallPlay);
    document.getElementById('play-big').addEventListener('click', game.bigPlay);

    document.getElementById('sleep-small').addEventListener('click', game.smallSleep);
    document.getElementById('sleep-big').addEventListener('click', function() {game.hibernate();});

    // let startRedraw;
    game.drawInterval = setInterval(function () {Ui.rerender(game);}, 1000);



  }
});
