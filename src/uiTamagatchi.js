let Ui = {

 rerender: function(tamagatchi){

   // console.log(tamagatchi.drawInterval)

   let hungerLevel = document.getElementById('food-status');
   let playLevel = document.getElementById('play-status');
   let sleepLevel = document.getElementById('sleep-status');

   const regex = /[1-9].*(?=\.)/gm

   // console.log('start redraw id' + startRedraw);
   console.log('hi')

   // read previous values
   // hungerLevel.getAttribute('style').match(regex) = 40 ?
   if (tamagatchi.boredom % 10 === 0) {

     if ((tamagatchi.hunger < 40) || (tamagatchi.tired < 40)) {
       console.log(tamagatchi.mood());
       this.giphy(tamagatchi.mood());
     } else {
       this.giphy('happy')
     }

   }

   if ((tamagatchi.hunger <= 0) || (tamagatchi.boredom<= 0) || (tamagatchi.tired <= 0)){
     clearInterval(tamagatchi.drawInterval);
   }




   // establish new values

    hungerLevel.setAttribute('style', `width: ${tamagatchi.hunger*2}%`);

    playLevel.setAttribute('style', `width: ${tamagatchi.boredom*2}%`);



    sleepLevel.setAttribute('style', `width: ${tamagatchi.tired*2}%`);

    // compare values



  },

  giphy: function(mood) {

    let request = new XMLHttpRequest();
    let num = parseInt(Math.random() * 20)
    const key = `https://api.giphy.com/v1/gifs/search?api_key=bWZSCX6Hw2SBNGPH4u07Bk3xhriGGnvH&q=${mood}&limit=1&offset=${num}`

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        //
        //
        // console.log(response.data[0].images.fixed_height.url);
        // console.log(response.data[0].images.fixed_height.url instanceof String);

        let newImage = document.createElement('img');
        newImage.setAttribute('src', response.data[0].images.fixed_height.url);
        const gifDiv = document.getElementById('from-giphy');

        gifDiv.childNodes[0] ? gifDiv.replaceChild(newImage, gifDiv.childNodes[0]) : gifDiv.append(newImage);



      }
    }

    request.open("GET", key, true);
    request.send();


  }


}






export { Ui };
