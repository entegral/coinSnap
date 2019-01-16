function giphy(params) {

  let request = new XMLHttpRequest();
      const key = `api.giphy.com/v1/gifs/search?api_key=bWZSCX6Hw2SBNGPH4u07Bk3xhriGGnvH&q=wat`
      // const url = `api.giphy.com/v1/gifs/search?api_key=bWZSCX6Hw2SBNGPH4u07Bk3xhriGGnvH&q=${params['search']}&limit=${params['limit']}&rating=${params['rating']}&offset=${params['']}`;

      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);
        }
      }

      request.open("GET", key, true);
      request.send();
}

export { giphy };



const url = `api.giphy.com/v1/gifs/search?api_key=bWZSCX6Hw2SBNGPH4u07Bk3xhriGGnvH&q=${params['search']}



&limit=${params['limit']}&rating=${params['rating']}&offset=${params['']}`;
