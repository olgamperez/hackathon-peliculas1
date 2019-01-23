//let apikey = "8f0dd609"
//Initialization for Components Materialize
document.addEventListener("DOMContentLoaded", function(){
    window.M.AutoInit();
   });


   



//Imprimiendo tarjetas para la pag principal según el año 
function printCards () {

    fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&primary_release_year=2019")
    .then(data=>data.json())
    .then(data=>{
      let imageFilms= data.results;
 
      for (let i = 0; i <imageFilms.length; i++){
        let titleFilms= imageFilms[i].title
         fetch ("http://www.omdbapi.com/?s="+titleFilms+"&page=1&y=2019&apikey=8f0dd609")
           .then (data=>data.json())
           .then (data =>{                               
            console.log(data)
            document.getElementById("root").innerHTML +=  `
            <div class="col s12 m3">
            <div class="card">
            <img class="responsive-img"  src="${data.Search[0].Poster}">
            <a href="#modal" class="btn-floating btn-large waves-effect waves-light red btn modal-trigger"><i class="material-icons"> add </i></a>
            <h4 class="flow-text">"${data.Search[0].Title}"</h4>
            <p class="flow-text">${data.Search[0].Year}</p>

            </div>
          </div>`
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
      <div class="container section">
            <div class="card horizontal" > <a class="waves-effect waves-light btn modal-trigger" href="#modal">
            <div class="card-image">
            <img src="${data.Search[i].Poster}">
            </div>
            <div class="card-stacked">
            <div class="card-content">
            <h4 class="header">"${data.Search[i].Title}"</h4>
            <span class="card-title ">${data.Search[i].Year}</span>
            </div>
            </a>
            </div>
        </div>`
    }
  })
  };
});

/* <div id="idModal" class="Modal">

<div class="modal-content"> </div>
<span class="card-title activator">${data.Search[i].Title}</span>
<p>  informacion de la pelicula </p>
</div> */



 
 window.onload = printCards