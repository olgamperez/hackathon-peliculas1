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
            <div class="col s6 m3">
            <div class="card horizontal">
            <div class="card-image">
            <img src="${data.Search[0].Poster}">
            </div>
            <div class="card-stacked">
            <div class="card-content">
            <h4 class="header">"${data.Search[0].Title}"</h4>
            <span class="card-title ">${data.Search[0].Year}</span>
                </div>
                <div class="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
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
      <div class="col s6 m3">
            <div class="card horizontal">
            <div class="card-image">
            <img src="${data.Search[i].Poster}">
            </div>
            <div class="card-stacked">
            <div class="card-content">
            <h4 class="header">"${data.Search[i].Title}"</h4>
            <span class="card-title ">${data.Search[i].Year}</span>
                </div>
                <div class="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>`
    }
  })
  };
});
 
 window.onload = printCards


//<img src=${data.Search[0].Poster}>
