//let apikey = "8f0dd609"

//Imprimiendo tarjetas para la pag principal según el año 
function printCards () {

    fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&primary_release_year=2019")
    .then(data=>data.json())
    .then(data=>{
      let imageFilms= data.results;
 
      for (let i = 0; i <imageFilms.length; i++){
        let titleFilms= imageFilms[i].title
         fetch ("http://www.omdbapi.com/?s="+titleFilms+"&page=1&apikey=8f0dd609")
           .then (data=>data.json())
           .then (data =>{
            console.log(data)
            document.getElementById("root").innerHTML +=  `<img src=${data.Search[0].Poster}>`
           })
 
 
 
        }
      });
    }


////visualización de la data para buscador
document.getElementById("search-input").addEventListener("keydown",(evento)=>{
   if(evento.keyCode === 13){
       //console.log("hola")
   let titleSearch = document.getElementById("search-input").value;
   fetch("http://www.omdbapi.com/?s="+titleSearch+"&apikey=8f0dd609")
   .then(data=>data.json())
   .then(data=>{
     let dataDocumentJson = data.Search;
     console.log(dataDocumentJson);
     document.getElementById('root').innerHTML = "";
     for (let i = 0; i <dataDocumentJson.length; i++){
      document.getElementById('root').innerHTML += `
      <img src=${dataDocumentJson[i].Poster}>`
    }
  })
  };
});
 
 window.onload = printCards