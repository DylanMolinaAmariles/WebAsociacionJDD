function toggleMenu() {
    var nav = document.getElementById('nav');
    nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
}



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


var grande    = document.querySelector('.grande')
var punto     = document.querySelectorAll('.punto')
punto.forEach( ( cadaPunto , i )=> {
   
    punto[i].addEventListener('click',()=>{

        var posicion  = i;
      
        var operacion = posicion * -97;

        grande.style.transform = `translateX(${ operacion }%)`;
       
        punto.forEach( ( cadaPunto , i )=>{
         
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

    })
})



function calendario(indice){
    var nombreEvento = prompt("Indica el nombre del evento");
    var evento = document.getElementsByClassName("evento");
    evento[indice].innerHTML = nombreEvento;
}
 

var tyc = document.getElementById("condiciones");
var enviar = document.getElementById("enviar");

var cambiarCondiciones = () => tyc.checked ? enviar.disabled = false : enviar.disabled = true

