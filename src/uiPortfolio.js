let Ui = {

 renderDropdown: function(coinsArray){
   let finalOutput = "";
   let tempCoin;
   let select = document.createElement("select");
   select.setAttribute("id", "coinSelect");

   for (let i = 1; i < 51; i++){
     tempCoin = this.findCoinByRank(coinsArray, i);
     let tempOption = document.createElement("option");
     tempOption.innerHTML = tempCoin.name;
     tempOption.setAttribute("value", tempCoin.id);
     select.appendChild(tempOption);
   }
   select.append(finalOutput)
   return select;
  },

  findCoinByRank: function(coinsArray, rank){
    for (let i = 0; i < coinsArray.length; i++){
      if (coinsArray[i].rank == rank) {
        return coinsArray[i];
      }
    }
  },

  findCoinById: function(coinsArray, id){
    for (let i = 0; i < coinsArray.length; i++){
      if (coinsArray[i].id == id) {
        return coinsArray[i];
      }
    }
  },

  createCoinCard: function(document, coin){
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.classList.add('coin');
    cardDiv.classList.add('text-center');
    cardDiv.setAttribute("style", "width: 18rem;");
    console.log("coin", coin.high);
    console.log("open", Object.getOwnPropertyNames(coin), coin, coin.low, coin.open, coin.close);
    console.log("rank", coin.rank);
    console.log("whitepaper:", coin.whitepaper);
    cardDiv.innerHTML = `<div class="card-header">${coin.name}(${coin.symbol})</div>
      <div class="card-body">
        <h5 class="card-title">Market Capitilization Rank: ${coin.rank}</h5>
        <p class="card-text">Price at open: ${coin.open}</p>
        <p class="card-text">Price at close: ${coin.close}</p>
        <p class="card-text">Daily High: ${coin.high}</p>
        <p class="card-text">Daily Low: ${coin.low}</p>
        <p class="card-text">24h Volume: ${coin.volume}</p>
        <p class="card-text">Marketcap: ${coin.marketcap}</p>
        <p class="card-text">${coin.description}</p>
      </div>
      <div class="card-footer text-muted">
        <a href="${coin.whitepaper.link}">Whitepaper</a>
      </div>`;
      document.getElementById('coinCards').append(cardDiv);

    return cardDiv;
  }


}





export { Ui };
