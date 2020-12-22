let slider = document.querySelector(".slider input")
//AQUI ESTA PEGA O QUE TIVIR COM A CLASS .slider E QUE SEJÁ input E ARMAZENA NA LET SLIDER

slider.addEventListener("input", inicia)
//SLIDER VAI FICAR OUVINDO QUANDO O input SER ACIONADO,
// O inicia QUE É UM PARAMETRO VAI LIGAR A function inicia ()
//QUE AQUI NESSE CASO ESTA BAIXO

function inicia () {
    let mudaImg = document.querySelector(".original-image")
    //mudaImg RECEBE A CLASS .original-image

    mudaImg.style.width = this.value + "%";
    //mudaImg.style.width RECEBE O this(QUE REFERE-SE A SI MESMO .original-image)
    //EM SEU VALUE(VALOR) + (MAIS) A % (PORCETAGEM)
    //NO CASO CONFORME FOR ALTERANDO A PORCENTAGEM VAI ALTERANDO
    //O mudaImg.style.width QUE ESTÁ RECEBENDO A CLASS .original-image
}


//######################## AQUI FOI FEITA COMO FUNÇÃO ANONIMA ##########################

// document.querySelector(".slider input").addEventListener("input", function () {
//     document.querySelector(".original-image").style.width = this.value + "%";
// });


//######################## AQUI FOI FEITA COMO FUNÇÃO NOMEADA ##########################
// let slider = document.querySelector(".slider input")

// slider.addEventListener("input", inicia)

// function inicia () {
//     let mudaImg = document.querySelector(".original-image")
//     mudaImg.style.width = this.value + "%";
// }