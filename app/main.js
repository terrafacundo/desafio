//Tracker-Matrix of decisions.
//La app se encarga de recoger información de las actividades que realizar el usuario, el usuario tendrá a disposición 4 opciones que se acomodan en 4 cuadrantes. Luego se le solicitará información como el tipo de actividad, cantidad de horas, y la sensación que nos dejó la actividad.

//se le pide al usuario la activiad
//se envía a un array segun el tipo de actividad
//habrá un botón que envía al storage la info cuando el usuario aprete el boton de cerrar dia
//la app devuelve los datos => como? reocrrer los arrays y devuelve: sensacion que predomino durante el dia, cual cuadrante tiene mas contenido, y cual es el promedio de horas x cuadrante.



function app(){
//constructor de actividades
let actividades = [];
class Actividad {
    constructor(nombre,hora,sensacion){
        this.nombre=nombre;
        this.hora=hora;
        this.sensacion=sensacion;
    }
}


//declarando las arrays,variables más importantes, tomando los nodos más importantes:


//nodos e interacción de la info extra
let info_extra = document.getElementById("info");

//nodos e interaccion de la botonera

let boxUno = document.getElementById("urgimp");
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
        info_extra.append(formulario);

        //tomando los nodos de los input, e insertandolo en el body
        let actividad = document.getElementById("actividad");
        let horas= document.getElementById("horas");
        let sensacion = document.getElementById("sensacion");
        

        //validando datos del formulario
        formulario.addEventListener("submit",validando_formulario);
        function validando_formulario(e){
            e.preventDefault();
            let notificacion =document.createElement("h2");
            notificacion.setAttribute("class","noti");
            notificacion.innerHTML=`Actividad agregada con éxito`;
            formulario.append(notificacion);

            valor_actividad = actividad.value;
            valor_horas = horas.value;
            valor_sensacion =sensacion.value;
            
            let entrada =  new Actividad(valor_actividad, valor_horas,valor_sensacion);
            actividades.push(entrada);
        }
    //parte interactiva del formulario
    //validacion de datos
    

        
}
console.log(actividades);
}

