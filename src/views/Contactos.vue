<!-- eslint-disable vue/multi-word-component-names -->
<template >
<div class="content">
  
       <div class="logo_caja_img">

       <div class="contenido_caja_img"> 
         <h1 class="logoText">Contacta con <span>Nosotros</span></h1>
        </div>
       </div>
        <div class="contact-wrapper animated bounceInUp">
            <div class="contact-form">
                <h3>Contacta con nosotros</h3>
                <form action="">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="fullname">
                    </p>
                    <p>
                        <label>Email </label>
                        <input type="email" name="email">
                    </p>
                    <p>
                        <label>Teléfono</label>
                        <input type="tel" name="phone">
                    </p>
                    <p>
                        <label>Asunto</label>
                        <input type="text" name="affair">
                    </p>
                    <p class="block">
                       <label>Mensage</label> 
                        <textarea name="message" rows="3"></textarea>
                    </p>
                    <p class="block">
                        <button>
                            Enviar
                        </button>
                    </p>
                </form>
            </div>
            <div class="contact-info">
                <h4>Más información</h4>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i> HayPoli</li>
                    <li><i class="fas fa-phone"></i> (+34) 111 111 111</li>
                    <li><i class="fas fa-envelope-open-text"></i> Hay@Poli.com</li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam necessitatibus repellendus?</p>
                <p>HayPoli.com</p>
                <!-- Google mapa  -->
                <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23946.36456083902!2d2.105628546596092!3d41.38938706885139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a279425a8f21%3A0x23e0874a0e6110c2!2sPlaza%20de%20Espa%C3%B1a%2C%2008004%20Barcelona!5e0!3m2!1ses!2ses!4v1671814432574!5m2!1ses!2ses" width="400" height="250" style="border:0;margin: 0 auto; display: block;    box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.684);
" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    </div>
</template>


<style>


.logoText {
    text-align: center;
    font-size: 3em;
    background-color: rgba(255, 255, 255, 0.541);
 }

.logoText span {
    color: #B70E21;
}
.contenido_caja_img{
position: relative;
top: 40%;

  
}
.logo_caja_img{
  background-image: url("https://estaticos.muyinteresante.es/uploads/images/article/606255a15bafe87b31e6dabc/eliminar-contactos-iphone_s.jpg");
  position: relative;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 400px;
  opacity: .90;
}

.contact-wrapper {
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, .3);
}

.contact-wrapper > * {
    padding: 1em;
}

.contact-form {
    background: #02385972;
    color: white;
}

.contact-form form {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.contact-form form label {
    display: block;
}

.contact-form form p {
    margin: 0;
    padding: 1em;
}

.contact-form form .block {
    grid-column: 1 / 3;
}

.contact-form form button,
.contact-form form input,
.contact-form form textarea {
    width: 100%;
    padding: .6em;
    border: none;
    /* background: rgba(192, 192, 192, 0.11); */
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.684);
    outline: 0;
    /* color: #fff; */
    border-bottom: 1px solid #d63031;
}

.contact-form form button {
    background: #B70E21;
    color: white;
    border: 0;
    text-transform: uppercase;
    padding: 1em;
}

.contact-form form button:hover,
.contact-form form button:focus {
    background: #d63031;
    color: #fff;
    transition: background-color 1s ease-out;
    outline: 0;
}

/* CONTACT INFO */
.contact-info {
    background-color: #023859a4;
    color:white;

}

.contact-info h4, .contact-info ul, .contact-info p {
    text-align: center;
    margin: 0 0 1rem 0;
}

/* LARGE SIZE */
@media(min-width: 768px) {
    .contact-wrapper {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
    .contact-wrapper > * {
        padding: 2em;
    }
    .contact-info h4,
    .contact-info ul,
    .contact-info p {
        text-align: left;
        

    }
    
}
</style>