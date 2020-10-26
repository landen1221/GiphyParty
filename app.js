const form = document.querySelector('#searchform')
const input = document.getElementById('giphSearch')

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  getGiphy(input.value)
})

async function getGiphy(searchTerm) {
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchTerm,
        api_key: "Dm5Lat5kTXCVpG6GSzYqoG1YfuoSezW6",
        limit: 25
      }
    });
  
    newGif(res.data)
}

function newGif(res) {
  const randNum = Math.floor(Math.random()*25)
  let newDiv = document.createElement("div");
  let newGif = document.createElement("img");
  newDiv.style.margin = '5px';
  newGif.src = res.data[randNum].images.original.url,

  newDiv.append(newGif)
  document.querySelector('#gifs').append(newDiv)
}

const remove = document.getElementById('remove')
remove.addEventListener('click', function(e) {
  document.getElementById('gifs').innerHTML = ""
  input.value = ""
})


console.log("Let's get this party started!");