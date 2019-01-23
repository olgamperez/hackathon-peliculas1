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
            fetch ("http://www.omdbapi.com/?t="+titleFilms+"&y=2019&apikey=8f0dd609")
              .then (data=>data.json())
              .then (data =>{    
              //{"Response":"False","Error":"Movie not found!"}
              if(data.Response === "False") {
                  return;
              }
              if(data.Poster === "N/A"){
                return;
              }                  
               //console.log(data)
               document.getElementById("root").innerHTML +=  `
               <div class="container section">
               <div class="card horizontal">
               <div class="card-image">
               <img src="${data.Poster}">
               </div>
               <div class="card-stacked">
               <div class="card-content">
               <span class="card-title ">${data.Year}</span>
               <h4 class="header">"${data.Title}"</h4>
               <h5>"${data.Plot}".</h5>
               <p>Actors: "${data.Actors}".</p>
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
       window.onload = printCards

//Funcion del select (filtrar)
    document.getElementById("select-type-films").addEventListener("change", (e)=> {
    e.preventDefault();   

    document.getElementById('root').innerHTML="";
    let genresFilms = document.getElementById("select-type-films").value;
         //console.log("hola"); (probando select)
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&with_genres="+genresFilms)
    .then(data=>data.json())
    .then(data=>{
      let idFilms= data.results;
        //console.log(idFilms)
      for (let i = 0; i <idFilms.length; i++){
            document.getElementById("root").innerHTML +=  `
            <div class="container section">
            <div class="card horizontal">
            <div class="card-image">
            <img src="https://image.tmdb.org/t/p/w500/${idFilms[i].poster_path}">
            </div>
            <div class="card-stacked">
            <div class="card-content">
            <span class="card-title ">Lanzamiento: ${idFilms[i].release_date}</span>
            <h4 class="header">"${idFilms[i].title}"</h4>
            </div>
            <div class="card-action">
            <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>`
           }
    })
})

//visualización de la data para buscador
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
 

 