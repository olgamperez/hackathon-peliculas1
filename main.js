//Initialization for Components Materialize
document.addEventListener("DOMContentLoaded", function(){
    window.M.AutoInit();
   });
//Volver al inicio botón inicio
document.getElementById("initial-btn").addEventListener("click", () => {
document.location = "index.html";
})
//Botón Programación
document.getElementById("program-btn").addEventListener("click",()=>{
document.getElementById("first-page").style.display="none";
document.getElementById("search-input").style.display="block";
document.getElementById("second-page").style.display="block";
})

//Funcion del botón Amigos
document.getElementById("28").addEventListener("click", (e)=> {
  e.preventDefault();  
  document.getElementById("first-page").style.display="none"; 
  document.getElementById('root1').innerHTML="";
  fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&language=es-VE&with_genres=28")
  .then(data=>data.json())
  .then(data=>{
    let idFilms= data.results;
      //console.log(idFilms)
    for (let i = 0; i <idFilms.length; i++){
          document.getElementById("root1").innerHTML +=  `
          <div class="col s12 m3">
          <div class="card">
          <div class="card-image small">
          <img src="https://image.tmdb.org/t/p/w500/${idFilms[i].poster_path}">
          </div>
          <div class="card-stacked">
          <div class="card-content">
          <span class="card-title ">${idFilms[i].release_date}</span>
          <p class="header">"${idFilms[i].title}"</p>
          </div>
          </div>
          </div>
        </div>`
         }
  })
})

//Funcion del botón Familia
document.getElementById("10751").addEventListener("click", (e)=> {
  e.preventDefault();   
  document.getElementById('root1').innerHTML="";
  fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&language=es-VE&with_genres=10751")
  .then(data=>data.json())
  .then(data=>{
    let idFilms= data.results;
      //console.log(idFilms)
    for (let i = 0; i <idFilms.length; i++){
          document.getElementById("root1").innerHTML +=  `
          <div class="col s12 m3">
          <div class="card">
          <div class="card-image small">
          <img src="https://image.tmdb.org/t/p/w500/${idFilms[i].poster_path}">
          </div>
          <div class="card-stacked">
          <div class="card-content">
          <span class="card-title ">${idFilms[i].release_date}</span>
          <p class="header">"${idFilms[i].title}"</p>
          </div>
          </div>
          </div>
        </div>`
         }
  })
})
//Funcion del botón Pareja
document.getElementById("10749").addEventListener("click", (e)=> {
  e.preventDefault();   
  document.getElementById('root1').innerHTML="";
  fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&language=es-VE&with_genres=10749")
  .then(data=>data.json())
  .then(data=>{
    let idFilms= data.results;
      //console.log(idFilms)
    for (let i = 0; i <idFilms.length; i++){
          document.getElementById("root1").innerHTML +=  `
          <div class="col s12 m3">
          <div class="card">
          <div class="card-image small">
          <img src="https://image.tmdb.org/t/p/w500/${idFilms[i].poster_path}">
          </div>
          <div class="card-stacked">
          <div class="card-content">
          <span class="card-title ">${idFilms[i].release_date}</span>
          <p class="header">"${idFilms[i].title}"</p>
          </div>
          </div>
          </div>
        </div>`
         }
  })
})

//Funcion del botón conquista
document.getElementById("27").addEventListener("click", (e)=> {
  e.preventDefault();   
  document.getElementById('root1').innerHTML="";
  fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&language=es-VE&with_genres=27")
  .then(data=>data.json())
  .then(data=>{
    let idFilms= data.results;
      //console.log(idFilms)
    for (let i = 0; i <idFilms.length; i++){
          document.getElementById("root1").innerHTML +=  `
          <div class="col s12 m3">
          <div class="card">
          <div class="card-image small">
          <img src="https://image.tmdb.org/t/p/w500/${idFilms[i].poster_path}">
          </div>
          <div class="card-stacked">
          <div class="card-content">
          <span class="card-title ">${idFilms[i].release_date}</span>
          <p class="header">"${idFilms[i].title}"</p>
          </div>
          </div>
          </div>
        </div>`
         }
  })
})


//Imprimiendo tarjetas para la pag programación según el año 
   function printCards () {
   
       fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&primary_release_year=2019")
       .then(data=>data.json())
       .then(data=>{
         let imageFilms= data.results;
         for (let i = 0; i <imageFilms.length; i++){
           let titleFilms= imageFilms[i].title
            fetch ("http://www.omdbapi.com/?t="+titleFilms+"&language=es-VE&y=2019&apikey=8f0dd609")
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
               <div class="col s12 m3">
               <div class="card">
               <div class="card-image small">
               <img class="responsive-img" src="${data.Poster}">
               </div>
               <div class="card-stacked">
               <div class="card-content">
               <span class="card-title ">${data.Year}</span>
               <p class="header">"${data.Title}"</p>
               </div>
               </div>
               </div>
               </div>`
              })
            }
            // <h5>"${data.Plot}".</h5>
            //<p>Actors: "${data.Actors}".</p>
          });
       }
      

//Funcion del select (filtrar)
    document.getElementById("select-type-films").addEventListener("change", (e)=> {
    e.preventDefault();   

    document.getElementById('root').innerHTML="";
    let genresFilms = document.getElementById("select-type-films").value;
         //console.log("hola"); (probando select)
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&language=es-VE&with_genres="+genresFilms)
    .then(data=>data.json())
    .then(data=>{
      let idFilms= data.results;
        //console.log(idFilms)
      for (let i = 0; i <idFilms.length; i++){
            document.getElementById("root").innerHTML +=  `
            <div class="col s12 m3">
            <div class="card">
            <div class="card-image small">
            <img src="https://image.tmdb.org/t/p/w500/${idFilms[i].poster_path}">
            </div>
            <div class="card-stacked">
            <div class="card-content">
            <span class="card-title ">${idFilms[i].release_date}</span>
            <p class="header">"${idFilms[i].title}"</p>
            </div>
            </div>
            </div>
          </div>`
           }
    })
})



////visualización de la data para buscador
document.getElementById("search-input").addEventListener("keydown",(evento)=>{
   if(evento.keyCode === 13){
       //console.log("hola")
   let titleSearch = document.getElementById("search-input").value;
   fetch("http://www.omdbapi.com/?s="+titleSearch+"&language=es-VE&apikey=8f0dd609")
   .then(data=>data.json())
   .then(data=>{
     let dataDocumentJson = data.Search;
     console.log(dataDocumentJson);
     document.getElementById('root').innerHTML = "";
     for (let i = 0; i <dataDocumentJson.length; i++){
      document.getElementById('root').innerHTML += `
      <div class="col s12 m3">
            <div class="card">
            <div class="card-image small">
            <img src="${data.Search[i].Poster}">
            </div>
            <div class="card-stacked">
            <div class="card-content">
            <p class="header">"${data.Search[i].Title}"</p>
            <span class="card-title ">${data.Search[i].Year}</span>
            </div>
              </div>
            </div>
          </div>`

    }
  })
  };
});




window.onload = printCards