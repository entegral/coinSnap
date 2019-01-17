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



}






export { Ui };
