const quote = document.querySelector(".quote h2");
const Author = document.querySelector(".quote h3");
const api_url = "https://api.quotable.io/random";

async function getQuote(url){
    const responce = await fetch(url);
    var data = await responce.json();

    quote.innerHTML = data.content;
    Author.innerHTML = data.author;
}

 function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML + " ___" + Author.innerHTML, "Tweet Window","width=600px ,height=300px");
 }

getQuote(api_url);

