//slider
$(document).ready(function () {
    //iniciando o plugin
    $('#destaque').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    });
});

//Interação Menu
function clickMenu(){
    if(itens.style.display =='block'){
        itens.style.display ='none'
    }else{
        itens.style.display = 'block'
    }
}


// Modal
var modalBtn = document.getElementById("modal");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});


function mostrarerro()
{
    const erro = document.getElementById('fundo');

    if ( erro.style.display == 'none' || erro.style.display == '')
    {
        erro.style.display = 'block';
    }

    else
    {
        erro.style.display = 'none';
    }

}


function bundle()
{
    const fts = document.getElementById('corpo');
    
    if ( fts.style.display == 'none' || fts.style.display == '')
    {
        fts.style.display = 'block';
    }

    else
    {
        fts.style.display = 'none';
    }
}



