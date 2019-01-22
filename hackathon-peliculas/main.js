//let apikey = "8f0dd609"

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
 

  
