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

  createCoinCard: function(unparsedCoin){
    let coin = JSON.parse(unparsedCoin);
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.classList.add('text-center');
    cardDiv.setAttribute("style", "width: 18rem;");
    console.log("coin", coin);
    console.log("whitepaper:", coin.whitepaper);
    cardDiv.innerHTML = `<div class="card-header">
        ${coin.name}(${coin.symbol})
      </div>
      <img src="${coin.whitepaper.thumbnail}" alt="">
      <div class="card-body">
        <h5 class="card-title">Market Capitilization Rank: ${coin.rank}</h5>
        <p class="card-text">${coin.description}</p>

      </div>
      <div class="card-footer text-muted">
        Whitepaper: ${coin.whitepaper}
      </div>`;
    console.log(cardDiv);
    return cardDiv;
  }


}





export { Ui };
