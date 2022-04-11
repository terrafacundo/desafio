//Tracker-Matrix of decisions.
//La app se encarga de recoger información de las actividades que realizar el usuario, el usuario tendrá a disposición 4 opciones que se acomodan en 4 cuadrantes. Luego se le solicitará información como el tipo de actividad, cantidad de horas, y la sensación que nos dejó la actividad.

//se le pide al usuario la activiad
//se envía a un array segun el tipo de actividad
//habrá un botón que envía al storage la info cuando el usuario aprete el boton de cerrar dia
//la app devuelve los datos => como? reocrrer los arrays y devuelve: sensacion que predomino durante el dia, cual cuadrante tiene mas contenido, y cual es el promedio de horas x cuadrante.



function app(){

//constructor de actividades
class Entrada {
    constructor(nombre,horas,sensacion) {
        this.nombre = nombre;
        this.nombre=horas;
        this.sensacion=sensacion
    }

}


//el cuadrante uno = contiene los ingresos de urg imp, el dos = no urg imp, el tres=urg no imp, el cuatro= no urg no imp
let cuadranteUno = [];
let cuadranteDos = [];
let cuadranteTres = [];
let cuadranteCuatro = [];

//declarando las arrays,variables más importantes, tomando los nodos más importantes:
let lunes =[];
let martes=[];
let miercoles=[];
let jueves=[];
let viernes=[];
let sabado =[];
let domingo=[];

let semana=[lunes,martes,miercoles,jueves,viernes,sabado,domingo];

//nodos e interacción de la info extra
let info_extra = document.getElementById("info");

//nodos e interaccion de la botonera

let boxUno = document.getElementById("urgimp");
boxUno.addEventListener("click",mas_info);

let boxDos = document.getElementById("nurgimp");
boxUno.addEventListener("click",mas_info);

let boxtres = document.getElementById("urgnimp");
boxUno.addEventListener("click",mas_info);

let boxCuatro= document.getElementById("nurgnimp");
boxUno.addEventListener("click",mas_info);







//funciones

function mas_info(){
    //estructura del form

    let titulo_info = document.createElement("h2");
    titulo_info.innerText=`Contanos más sobre tu actividad ingresada:`;
    info_extra.append(titulo_info);


    //FORMULARIO

    let formulario = document.createElement("form");
    formulario.setAttribute("class","formu");
    formulario.innerHTML=`<label>Actividad: <input id="actividad" type="text" required></input></label>
    <label>Horas dedicadas:<input id="horas" type="number" required></input></label>
    <label>Sensación al hacerla: <input id="sensacion" type="text" required></input></label>
    <label><input type="submit" value="Enviar"></input></label>
    <div id="error"></div>`;

    //tomando los nodos de los input, e insertandolo en el body
    let actividad=document.getElementById("actividad");
    let horas=document.getElementById("horas");
    let sensacion = document.getElementById("sensacion");
    info_extra.append(formulario);
    

    


    //validando datos del formulario
    formulario.addEventListener("submit",validando_formulario);
    function validando_formulario(e){
        e.preventDefault();
        let notificacion =document.createElement("h2");
        notificacion.setAttribute("class","noti");
        notificacion.innerHTML=`Actividad agregada con éxito`;
        formulario.append(notificacion);
        ;
    }

    //parte interactiva del formulario
    //validacion de datos para poder pushear
    console.log(actividad.value)
        
}
console.log(semana);
}

