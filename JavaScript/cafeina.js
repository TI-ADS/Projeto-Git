const email = document.querySelector("#emaill");
const texto = document.querySelector("#text");
const button = document.querySelector("#button");

button.addEventListener("click", ()=>{
    if(email.value != 0 && texto.value !=0){
        alert("Duvida enviada, aguarde a resposta do órgão responsável.");
    }
    else{
        alert("Campos não preenchidos corretamente");
    }
});