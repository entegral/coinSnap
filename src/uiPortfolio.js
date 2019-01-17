let Ui = {

 renderDropdown: function(coinsArray){
   let finalOutput = "";
   let tempCoin;
   let select = document.createElement("select");
   for (let i = 1; i < coinsArray.length; i++){
     tempCoin = this.findCoinByRank(coinsArray[i], i);
     let tempOption = document.createElement("option");
     tempOption.innerHTML(tempCoin.name);
     tempOption.setAttribute("value", tempCoin.id);
     finalOutput += `<option value=${tempCoin.id}>${tempCoin.name}</option>`;
     console.log(`<option value=${tempCoin.id}>${tempCoin.name}</option>`);
   }
   return finalOutput;
  },

  findCoinByRank: function(coinsArray, rank){
    for (let i = 0; i < coinsArray.length; i++){
      if (coinsArray[i].rank == rank) {
        return coinsArray[i];
      }
    }
  }


}






export { Ui };
