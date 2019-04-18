let caixaZoio = document.querySelector("p");
let titulo = document.querySelector("h1");
let corpo = document.querySelector("body");
let imagem = document.querySelector("img")
let botao = document.querySelector("button");
let botao2 = document.querySelector("button:last-child"); 



caixaZoio.style.fontSize = "20px";
corpo.style.backgroundColor = "grey";
//imagem.src = "https://i.ytimg.com/vi/MUn3u4kz70U/hqdefault.jpg";

function tirarOZoio(){
    titulo.innerHTML= "Garaio, ja tinha passado um minuto";
    caixaZoio.innerHTML = "Hardi córe !!";
    corpo.style.backgroundColor = "white";
    imagem.src="https://i.ytimg.com/vi/MUn3u4kz70U/hqdefault.jpg";

}
function deixarOZoio(){
    titulo.innerHTML= "Vai deixar o Zoio la mesmo ?";
    caixaZoio.innerHTML = "Ja não da pra aguentar mais";
    corpo.style.backgroundColor = "grey";
    imagem.src="https://i.ytimg.com/vi/I_Bqxa2rBOs/hqdefault.jpg";
    
}
botao.onclick=tirarOZoio;
botao2.onclick=deixarOZoio;


