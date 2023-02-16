<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div >
        <div class="registro">
          
            <h1>Registrate</h1>
  <div style="height: 230px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.85 C150.00,149.60 349.20,-49.85 500.00,49.85 L500.00,149.60 L0.00,149.60 Z" style="stroke: none; fill: #ffffff;"></path></svg></div>
        </div>
        <form action="" class="formulario" id="formulario"> 
 
            <!-- grupo  usuario -->
            <div class="form__grupo" id="grupo__usuario">
                <label for="usuario" class="form__label" >Usuario</label>
                <div class="form__grupo-input">
                    <input type="text" name="usuario" id="usuario" class="form__input" >

                    <i class="form__validacion-estado  fas fa-times-circle"></i>
                </div>
                <p class="form__input-error">El usuario tiene que ser 4 a 16 digitos</p>
            </div>





            <!-- grupo  nombre -->
            
            <div class="form__grupo" id="grupo__nombre">
                <label for="nombre" class="form__label" >Nombre</label>
                <div class="form__grupo-input">
                    <input type="text" name="nombre" id="nombre" class="form__input">

                    <i class="form__validacion-estado  fas fa-times-circle"></i>
                </div>
                <p class="form__input-error">El  nombre tiene que ser 4 a 16 digitos</p>
            </div>





            <!-- grupo  telefono -->
            
            <div class="form__grupo" id="grupo__telefono">
                <label for="telefono" class="form__label" >Telefono</label>
                <div class="form__grupo-input">
                    <input type="tel" name="telefono" id="telefono" class="form__input">

                    <i class="form__validacion-estado  fas fa-times-circle"></i>
                </div>
                <p class="form__input-error">El telefono  tiene que  ser 9 numeros</p>
            </div>
      




        <!-- grupo  correo -->
            
        <div class="form__grupo" id="grupo__correo">
            <label for="correo" class="form__label" >Correo Electronico</label>
            <div class="form__grupo-input">
                <input type="email" name="correo" id="correo" class="form__input">

                <i class="form__validacion-estado  fas fa-times-circle"></i>
            </div>
            <p class="form__input-error">En este campo es importante el siguiente  sinvolo @ </p>
        </div>
   
   
   

        <!-- grupo  Contraseña  -->
            
        <div class="form__grupo" id="grupo__password">
            <label for="password" class="form__label" >Contraseña</label>
            <div class="form__grupo-input">
                <input type="password" name="password" id="password" class="form__input">

                <i class="form__validacion-estado  fas fa-times-circle"></i>
            </div>
            <p class="form__input-error">La contraseña  tiene que ser 4 a 12 digitos.</p>
        </div>



      <!-- Repetición de la contraseña  -->


        <div class="form__grupo" id="grupo__password2">
            <label for="password2" class="form__label" >Repetir Contraseña</label>
            <div class="form__grupo-input">
                <input type="password" name="password2" id="password2" class="form__input">

                <i class="form__validacion-estado  fas fa-times-circle"></i>
            </div>
            <p class="form__input-error">Ambas cotraseñas tienen que ser iguales.</p>
        </div>

 <!-- Terminos y condiciones  -->


        <div class="form__grupo-terminos" >
            <label for="terminos" class="form__label" >
          
                <input type="checkbox" name="terminos" id="terminos" class="form__input-checkbox">
                Acepto los terminos y condiciones 
            </label>
            
        </div>
   
   

<!-- Mensaje error  -->

        <div class="form__mensaje" id="form__mensaje">
           
            <p> <i class="fas fa-exclamation-triangle"></i>   <b>Error:</b>Por favor rellena el formulario correctamente.</p>

        </div>




        <!-- Btn enviar  -->


        <div class="form__grupo form__grupo-btn-enviar">
            
           <button type="submit" class="form__btn" >Enviar</button>
           <p class="form__mensaje-exito"  id="form__mensaje-exito" > Enviado exito</p>

            </div>
        </form>
        </div>
        
    
</template>

<script>
    const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expreciones = {
    usuario: /^[a-zA-Z0-9\\-]{4,16}$/, // letras, numeros ,guion y guion_bajo
    nombre:/^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios , pueden llevar acentos.
    password:/^.{4,12}$/, // 4 a12 digitos.
    correo:  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a14 numeros.

}

const campos =  {
    usuario:false,
    nombre:false,
    correo:false,
    telefono:false,
    password:false

}

const validarFormulario = (e)=>{
     
    switch(e.target.name){

       case 'usuario':
            validarCampo(expreciones.usuario, e.target,'usuario'  );
       break;
       
       case 'nombre':
        validarCampo(expreciones.nombre, e.target, 'nombre'  );

       break;
       
       
       case 'telefono':
           validarCampo(expreciones.telefono, e.target, 'telefono'  );

       break;
       
       case 'correo':
        validarCampo(expreciones.correo, e.target, 'correo'  );

       break;

       
       case 'password':
        validarCampo(expreciones.password, e.target, 'password'  );
        validarPassword2();
       break;


       case 'password2':
        validarPassword2();
       break;
    }
}


const validarCampo = (exprecion,input, campo) =>{

    if(exprecion.test(input.value)){
      
        document.getElementById(`grupo__${campo}`).classList.add('form__grupo-correcto');
        document.getElementById(`grupo__${campo}`).classList.remove('form__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .form__input-error`).classList.remove('form__input-error-activo');
        campos[campo] = true;
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('form__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('form__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .form__input-error`).classList.add('form__input-error-activo');
        campos[campo] = false;    
    }
}


const validarPassword2 = ()=> {
    const password1 =document.getElementById('password');
    const password2 =document.getElementById('password2');

    if(password1.value !== password2.value){
        document.getElementById(`grupo__password2`).classList.add('form__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.remove('form__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__password2 .form__input-error`).classList.add('form__input-error-activo');
        campos['password2'] = false;    
    }else{
        document.getElementById(`grupo__password2`).classList.remove('form__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.add('form__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__password2 .form__input-error`).classList.remove('form__input-error-activo');
        campos['password2'] = true;    
    }
}


inputs.forEach((input)=>{
   
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});



if(formulario){

    
    formulario.addEventListener('submit',(e)=>{
    
        e.preventDefault();
    
    
        const terminos = document.getElementById('terminos');
    
        if(campos.usuario && campos.nombre && campos.telefono && campos.correo  && campos.password && terminos.checked){
    
    
            formulario.reset();
    
    
            document.getElementById('form__mensaje-exito').classList.add('form__mensaje-exito-activo');
            
            setInterval(()=>{
                document.getElementById('form__mensaje-exito').classList.remove('form__mensaje-exito-activo');
    
            },5000);
      
            document.querySelectorAll('.form__grupo-correcto').forEach((icono)=>{
              
                icono.classList.remove('form__grupo-correcto');
            });
    
    
        }else{
            document.getElementById('form__mensaje').classList.add('form__mensaje-activo');
        }
    
    });
}
</script>

<style>
.formulario{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    background-color: #0a2b40;
    width:1200px;
    margin: 0 auto;
    border-radius: 10px;
}
.registro h1{
    text-align: center;
    color: #0a2b40;
 
    padding-top: 5%;
}
.registro{
    background-image: url("https://img.freepik.com/foto-gratis/fondo-azul-degradado-lujo-abstracto-azul-oscuro-liso-banner-estudio-vineta-negra_1258-100378.jpg?w=1380&t=st=1675388778~exp=1675389378~hmac=6831e2b949dd249d94ef90968520bf45b9d99b9230b804deb9da59ce4f439ac4");
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    /* clip-path: polygon(20% 0%, 80% 0%, 100% 51%, 0 52%); */

}
.form__label{
    font-weight: 700;
    padding: 15px;
    display: block;
    cursor: pointer;
    color: white;

}
.form__grupo-input{
    position: relative;

}
.form__input{
    width: 95%;
    height: 40px;
    line-height: 40px;
    border-radius: 3px ;
    border: 3px solid transparent;
    padding: 0px 40px 0px 10px ;
    transition:.3s ease all ;
    background-color: white;
    margin: 10px;

}
.form__input:focus{
    border:3px solid rgb(26, 28, 170) ;
    outline: none;
    box-shadow: 3px 0px 30px 0px  rgb(112, 110, 110);
}
.form__input-error{
    font-size: 12px;
    color: red;
    display: none;
    margin-bottom:0px ;

}
.form__input-error-activo{
    display: block;
}
.form__validacion-estado{
    right: 10px;
    bottom: 15px;
    position: absolute;
    font-size: 17px;
    opacity: 0;
    z-index: 100;

}
.form__input-checkbox{
    margin-right: 10px;
}
.form__grupo-terminos,
.form__grupo-btn-enviar,
.form__mensaje{
    grid-column: span 2;
}
.form__mensaje{
    background-color: orange;
    height: 45px;
    line-height: 45px;
    padding: 0px 15px ;
    border-radius:3px ;
    display: none;
}
.form__mensaje-activo{
   display: block;
}
.form__mensaje p{
    margin: 0px;
}
.form__grupo-btn-enviar{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form__btn{
    background-color: black;
    color: white;
    width: 30%;
    height: 45px;
    line-height: 45px;
    font-size: 15px;
    border: none;
    transition: .1s ease all ;
    border-radius: 3px;
    cursor:pointer;
}
.form__btn:hover{
    box-shadow: 3px 0px 30px rgb(100, 100, 100); 
    background-color: rgba(28, 28, 28, 0.415);
}
.form__mensaje-exito{
    font-size: 14px;
    color: greenyellow;
    display: none;
}
.form__mensaje-exito-activo{
    display: block;
}


/* Estilos validacion  */

.form__grupo-correcto .form__validacion-estado{
    color: greenyellow;
    opacity: 1;
}
.form__grupo-incorrecto .form__label{
    color: red;
}
.form__grupo-incorrecto .form__validacion-estado{
color: red;
opacity: 1;
}
.form__grupo-incorrecto .form__input{
    border: 3px solid red ;




}


/* ekrani chapseri poqracnel mecacnelu hamar   */

@media screen  and (max-width: 800px){
    .formulario{
        grid-template-columns: 1fr;
    }.form__grupo-terminos,
    .form__grupo-btn-enviar,
    .form__mensaje{
        grid-column: 1;
    }
    .form__btn{
        width: 100%;
    }
}
    
</style>