function fetchSimpsonJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  const pokemonId = 1;
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  axios.get(url)
    .then(function(response) {
      return response.data; // response.data instead of response.json() with fetch
    })
    .then(function(simpsons) {
      console.log('data decoded from JSON:', simpson);

      // Build a block of HTML
      const simpsonHtml = `
        <p><strong>${simpson.quote}</strong></p>
      `;
      document.querySelector('#simpson').innerHTML = simpsonHtml;
    });
}

fetchSimpsonJSON();