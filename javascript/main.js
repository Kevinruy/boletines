
//DOM querySelector solo selecciona un elemento nodo
// querySelectorAll selecciona a todos los nodos que se relacionen
// let links = document.querySelectorAll("a");
// console.log(links);

// links.forEach(function(link){
//     console.log(link)
// });

// let celdas = document.querySelectorAll("td");

// celdas.forEach(function(td){
//     td.addEventListener('click', function(){
//         console.log(this);
//     })
// });
//Obtener los elementos de la clase .close
//Recorrerlos
//Agregar un evento click a cada uno de ellos

let closes = document.querySelectorAll(".close")

closes.forEach(function(close) {
    //addEventListener primero se agrega el event y luego la funcion, la funcion puede recibir un parametro o un argumento, cuando se le coloca un argumento a un evento este retorna dentro del argumento el nombre
    close.addEventListener('click', function(ev){
        ev.preventDefault(); //de esta forma logramos que al dar click sobre close no se cierre porque por defecto es un vinculo
        let content = document.querySelector('.content');
        //Quitarle las clases de animacion que ya tiene a content
        content.classList.remove("animate__animated")
        content.classList.remove("animate__backInLeft")

        //Agregarle clases para animar su salida
        content.classList.add("animate__animated")
        content.classList.add("animate__backInRight")
        //Al momento de ejecutar todo el codigo todo lo hace muy rapido, es por ello que se necesita un intervalo para que pueda darle tiempo a la animación de entrar
        setTimeout(function(){//Despues de cierto tiempo lo hace una vez
            location.href = "/boletines"; //Con esto logramos que si pueda regresar
        },600)
        //setInterval Despues de cierto tiempo lo hace varias veces
        
        return false;//de esta forma logramos que al dar click sobre close no se cierre porque por defecto es un vinculo
        console.log("Te di click jeje")
    })
});

// let iconos = document.querySelectorAll("i")

// iconos.forEach(function(icono){
//     icono.classList.remove("fa-star");
//     icono.classList.add("fa-star")
// })
