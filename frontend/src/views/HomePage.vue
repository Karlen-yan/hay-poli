<!-- eslint-disable vue/multi-word-component-names -->
// The above code is a Vue.js template that defines the structure and content of a webpage. It includes
// a slider with three images and a text button, followed by a section showcasing some of the company's
// previous work. The slider is implemented using nested HTML elements and CSS classes, and the content
// is dynamically generated using Vue.js data and methods.
<template>
  <div>
    <div class="container">
      <main>
        <!-- slider -->
        <div class="slider">
          <!--  Slider contenido  -->
          <div class="slider-container">
            <figure>
              <img
                src="https://fotos.perfil.com/2015/05/01/trim/1280/720/shirt4.jpg"
                alt="img-1"
                class="img-responsive"
              >
            </figure>

            <div class="caja_slider_text_btn">
              <h1>Personaliza tu ropa con tu marca</h1>
              <br>
              <a
                href="#"
                class="btn_slider"
              >HOLA</a>
            </div>

            <figure>
              <img
                src="https://www.vittorio.es/media/wysiwyg/uniformes_personalizados/bordado_y_serigrafia/Delantal_de_trabajo_personalizado_con_logo_bordado_1_.jpg"
                alt="img-2"
                class="img-responsive"
              >
            </figure>

            <figure>
              <img
                src="https://www.pixmagik.com/blog/wp-content/uploads/2021/09/ropa-personalizada.png"
                alt="img-2"
                class="img-responsive"
              >
            </figure>
          </div>
        </div>
        <h2 class="h2">
          Algunos de nuestros trabajos.
        </h2>

        <!-- raiz Slider 2  -->
        <div class="raiz_slider2">
          <div class="slider2">
            <div class="caja1" />
            <div class="caja2" />
          </div>
          <div class="slider2">
            <div class="caja3" />
            <div class="caja4" />
          </div>
          <div class="slider2">
            <div class="caja5" />
            <div class="caja6" />
          </div>
        </div>
<!-- // The above code is displaying a gallery of images with descriptions. The first section
// displays images of people the company works with, while the second section displays images of
// bags the company produces. The gallery is responsive and adjusts the number of images
// displayed based on the screen size. There are also descriptions provided for each image. -->
        <h2 class="h2">
          Con quien trabajamos
        </h2>

        <div class="responsive">
          <div class="gallery">
            <a
              target="_blank"
              href="https://pbs.twimg.com/profile_images/1449434922947579908/1euA0uDh_400x400.jpg"
            >
              <img
                class="imagen-galeria"
                src="https://pbs.twimg.com/profile_images/1449434922947579908/1euA0uDh_400x400.jpg"
                alt="Cinque Terre"
                width="600"
                height="400"
              >
            </a>
            <div class="desc">
              Nuestro descripción
            </div>
          </div>
        </div>


        <div class="responsive">
          <div class="gallery">
            <a
              target="_blank"
              href="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2018/07/03/15306157238008.jpg"
            >
              <img
                class="imagen-galeria"
                src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2018/07/03/15306157238008.jpg"
                alt="Forest"
                width="600"
                height="400"
              >
            </a>
            <div class="desc">
              Add a description of the image here
            </div>
          </div>
        </div>

        <div class="responsive">
          <div class="gallery">
            <a
              target="_blank"
              href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYhzPS2-q7rSj7P_W2iZ9lTQwhAaBQ5EYmg&usqp=CAU"
            >
              <img
                class="imagen-galeria"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYhzPS2-q7rSj7P_W2iZ9lTQwhAaBQ5EYmg&usqp=CAU"
                alt="Northern Lights"
                width="600"
                height="400"
              >
            </a>
            <div class="desc">
              Add a description of the image here
            </div>
          </div>
        </div>

        <div class="responsive">
          <div class="gallery">
            <a
              target="_blank"
              href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSByWzp-jPCpQFSxRn-GcaZxa1Sm_UHZtlXJw&usqp=CAU"
            >
              <img
                class="imagen-galeria"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSByWzp-jPCpQFSxRn-GcaZxa1Sm_UHZtlXJw&usqp=CAU"
                alt="Mountains"
                width="600"
                height="400"
              >
            </a>
            <div class="desc">
              Add a description of the image here
            </div>
          </div>
        </div>

        <div class="clearfix" />

        <div style="padding:50px;">
          <p>This example use media queries to re-arrange the images on different screen sizes: for screens larger than 700px wide, it will show four images side by side, for screens smaller than 700px, it will show two images side by side. For screens smaller than 500px, the images will stack vertically (100%).</p>
          <p>You will learn more about media queries and responsive web design later in our CSS Tutorial.</p>
        </div>




        <h2 class="h2">
          Nuestros trabajos en bolsas
        </h2>


        <div class="responsive">
          <div class="gallery">
            <a
              target="_blank"
              href="https://prd360iptcs.blob.core.windows.net/productspecs-container/28/180x240x80_90_KRAFT_BLACK.png?version=47cdb5380453be18b253fd790044d2c5"
            >
              <img
                class="imagen-galeria"
                src="https://prd360iptcs.blob.core.windows.net/productspecs-container/28/180x240x80_90_KRAFT_BLACK.png?version=47cdb5380453be18b253fd790044d2c5"
                alt="Cinque Terre"
                width="600"
                height="400"
              >
            </a>
            <div class="desc">
              Nuestro descripción
            </div>
          </div>
        </div>


        <div class="responsive">
          <div class="gallery">
            <a
              target="_blank"
              href="https://prd360iptcs.blob.core.windows.net/productspecs-container/28/180x240x80_25_PAPER_BLACK_TWISTED_SILVER.png?version=47cdb5380453be18b253fd790044d2c5"
            >
              <img
                class="imagen-galeria"
                src="https://prd360iptcs.blob.core.windows.net/productspecs-container/28/180x240x80_25_PAPER_BLACK_TWISTED_SILVER.png?version=47cdb5380453be18b253fd790044d2c5"
                alt="Forest"
                width="600"
                height="400"
              >
            </a>
            <div class="desc">
              Nuestro descripción
            </div>
          </div>
        </div>

        <div class="responsive">
          <div class="gallery">
            <a
              target="_blank"
              href="https://prd360iptcs.blob.core.windows.net/productspecs-container/28/180x240x80_PAPER_TWISTED.png?version=2665028cb1df93cb126ce0e329a7ee89"
            >
              <img
                class="imagen-galeria"
                src="https://prd360iptcs.blob.core.windows.net/productspecs-container/28/180x240x80_PAPER_TWISTED.png?version=2665028cb1df93cb126ce0e329a7ee89"
                alt="Northern Lights"
                width="600"
                height="400"
              >
            </a>
            <div class="desc">
              Nuestro descripción
            </div>
          </div>
        </div>

        <div class="responsive responsive_fin">
          <div class="gallery">
            <a
              target="_blank"
              href="https://prd360iptcs.blob.core.windows.net/productspecs-container/product/migrated/bolsa-de-papel-vertical-con-asas-retorcidas-1309-2-290253_h_f_es-es.png?version=0d07c1aabb97ff700bbb4fd9814ee412"
            >
              <img
                class="imagen-galeria"
                src="https://prd360iptcs.blob.core.windows.net/productspecs-container/product/migrated/bolsa-de-papel-vertical-con-asas-retorcidas-1309-2-290253_h_f_es-es.png?version=0d07c1aabb97ff700bbb4fd9814ee412"
                alt="Mountains"
                width="600"
                height="400"
              >
            </a>
            <div class="desc">
              Nuestro descripción
            </div>
          </div>
        </div>
      </main>
    </div>
    <!-- carts -->
    <div class="container2">
      <div class="cards2">
        <div class="card2">
          <div>
            <h3 class="card-title2">
              Encabezado 1
            </h3>
            <div class="card-content2">
              <p>Lorem im ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae magnam harum natus fuga et repellat in maiores.</p>
              <img
                class="img_carts_inicio"
                src="https://cdn.tc.promotron.com/web-images/ef45f8e4-a539-43c8-aca4-1453bd2a627d"
              >
            </div>
          </div>
          <div class="card-link-wrapper2">
            <a
              href=""
              class="card-link2"
            >Learn More</a>
          </div>
        </div>

        <div class="card2">
          <div>
            <h3 class="card-title2">
              Encabezado 2
            </h3>
            <div class="card-content2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae magnam harum natus fuga et repellat in maiores.</p>
              <img
                class="img_carts_inicio"
                src="https://img.ltwebstatic.com/images3_pi/2021/11/06/1636186226de01eb2c6b754687a3c47ac70e80492b_thumbnail_900x.webp"
              >
            </div>
          </div>
          <div class="card-link-wrapper2">
            <a
              href=""
              class="card-link2"
            >Learn More</a>
          </div>
        </div>

        <div class="card2">
          <div>
            <h3 class="card-title2">
              Encabezado 3
            </h3>
            <div class="card-content2">
              <p>Phasellus ultrices lorem vel bibendum ultricies. In hendrerit nulla a ante dapibus pulvinar eu eget quam.</p>
              <img
                class="img_carts_inicio"
                src="https://cdn.tc.promotron.com/web-images/84fc0100-6f01-4ab3-b44e-84a86123c6f7"
              >
            </div>
          </div>
          <div class="card-link-wrapper2">
            <a
              href=""
              class="card-link2"
            >Learn More</a>
          </div>
        </div>

        <div class="card2">
          <div>
            <h3 class="card-title2">
              Encabezado 4
            </h3>
            <div class="card-content2">
              <p>Aenean posuere mauris quam, pellentesque auctor mi bibendum nec. Sed scelerisque lacus nisi, quis auctor lorem ornare vel.</p>
              <img
                class="img_carts_inicio"
                src="https://image.spreadshirtmedia.net/image-server/v1/mp/productTypes/114/views/1/appearances/26,width=300,height=300,backgroundColor=fff.jpg"
              >
            </div>
          </div>
          <div class="card-link-wrapper2">
            <a
              href=""
              class="card-link2"
            >Learn More</a>
          </div>
        </div>

        <div class="card2">
          <div>
            <h3 class="card-title2">
              Encabezado 5
            </h3>
            <div class="card-content2">
              <p>Vestibulum pharetra fringilla felis sit amet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              <img
                class="img_carts_inicio"
                src="https://cdn.tc.promotron.com/web-images/ef45f8e4-a539-43c8-aca4-1453bd2a627d"
              >
            </div>
          </div>
          <div class="card-link-wrapper2">
            <a
              href=""
              class="card-link2"
            >Learn More</a>
          </div>
        </div>

        <div class="card2">
          <div>
            <h3 class="card-title2">
              Encabezado 6
            </h3>
            <div class="card-content2">
              <p>Vestibulum pharetra fringilla felis sit amet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              <img
                class="img_carts_inicio"
                src="https://cdn.tc.promotron.com/web-images/84fc0100-6f01-4ab3-b44e-84a86123c6f7"
              >
            </div>
          </div>
          <div class="card-link-wrapper2">
            <a
              href=""
              class="card-link2"
            >Learn More</a>
          </div>
        </div>

        <div class="card2">
          <div>
            <h3 class="card-title2">
              Encabezado 7
            </h3>
            <div class="card-content2">
              <p>Vestibulum pharetra fringilla felis sit amet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              <img
                class="img_carts_inicio"
                src="https://img.ltwebstatic.com/images3_pi/2021/11/06/1636186226de01eb2c6b754687a3c47ac70e80492b_thumbnail_900x.webp"
              >
            </div>
          </div>
          <div class="card-link-wrapper2">
            <a
              href=""
              class="card-link2"
            >Learn More</a>
          </div>
        </div>

        <div class="card2">
          <div>
            <h3 class="card-title2">
              Encabezado 8
            </h3>
            <div class="card-content2">
              <p> Vestibulum pharetra fringilla felis sit amet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              <img
                class="img_carts_inicio"
                src="https://image.spreadshirtmedia.net/image-server/v1/mp/productTypes/635/views/1/appearances/231,width=300,height=300,backgroundColor=fff.jpg"
              >
            </div>
          </div>
          <div class="card-link-wrapper2">
            <a
              href=""
              class="card-link2"
            >Learn More</a>
          </div>
        </div>

        <div class="card2">
          <div>
            <h3 class="card-title2">
              Encabezado 9
            </h3>
            <div class="card-content2">
              <p>Vestibulum pharetra fringilla felis sit amet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              <img
                class="img_carts_inicio"
                src="https://cdn.tc.promotron.com/web-images/ef45f8e4-a539-43c8-aca4-1453bd2a627d"
              >
            </div>
          </div>
          <div class="card-link-wrapper2">
            <a
              href=""
              class="card-link2"
            >Learn More</a>
          </div>
        </div>

        <div class="card2">
          <div>
            <h3 class="card-title2">
              Encabezado 10
            </h3>
            <div class="card-content2">
              <p>Vestibulum pharetra fringilla felis sit amet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              <img
                class="img_carts_inicio"
                src="https://img.ltwebstatic.com/images3_pi/2021/01/25/1611570961c433df8e89c9ca1ee4b7e50784b3b110_thumbnail_900x.webp"
              >
            </div>
          </div>
          <div class="card-link-wrapper2">
            <a
              href=""
              class="card-link2"
            >Learn More</a>
          </div>
        </div>

        <div class="card2">
          <div>
            <h3 class="card-title2">
              Encabezado 11
            </h3>
            <div class="card-content2">
              <p>Vestibulum pharetra fringilla felis sit amet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              <img
                class="img_carts_inicio"
                src="https://cdn.tc.promotron.com/web-images/84fc0100-6f01-4ab3-b44e-84a86123c6f7"
              >
            </div>
          </div>
          <div class="card-link-wrapper2">
            <a
              href=""
              class="card-link2"
            >Learn More</a>
          </div>
        </div>

        <div class="card2">
          <div>
            <h3 class="card-title2">
              Encabezado 12
            </h3>
            <div class="card-content2">
              <p>Vestibulum pharetra fringilla felis sit amet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              <img
                class="img_carts_inicio"
                src="https://img.ltwebstatic.com/images3_pi/2021/11/06/1636186226de01eb2c6b754687a3c47ac70e80492b_thumbnail_900x.webp"
              >
            </div>
          </div>
          <div class="card-link-wrapper2">
            <a
              href=""
              class="card-link2"
            >Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePage", 
};
</script>
<style>
    /* imagenes de dentro de cards */
.container2 {
  max-width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  background-color: #ffffff;
}    
.img_carts_inicio{
  width: 200px;
  height: 200px;
  padding-top:20px;
}
/* link de carts */
.card-link2{
  text-decoration: none;
  background: #d4dce1;
  color:black;
  padding: 10px;
  border-radius: 5px;
}

.card-link2:hover{
  background-color: white;
  color:#07668C;
}


h2 {
  font-size: 32px;
  margin-bottom: 1em;
}

h3{
  font-family:'Times New Roman', Times, serif;
  padding: 10px;
  text-shadow: rgba(0, 0, 0, 0.63) 0.1em 0.1em 0.2em
}

.cards2 {
    display: flex;
    padding: 20px;
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
  scroll-snap-align: start;
  transition: all 0.2s;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
   
 
}

.card2 {
  max-width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  flex: 0 0 ;
  scroll-snap-align: start;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border-radius: 5%;
  background-color: #07668c2a;
  text-align: center;
}

.card2 .card-link-wrapper2 {
  margin-top: auto;
   
}
.cards2::-webkit-scrollbar {
  /* height: 12px; */
}
.cards2::-webkit-scrollbar-thumb,
.cards2::-webkit-scrollbar-track {
  border-radius: 92px;
}
.cards2::-webkit-scrollbar-thumb {
  background: var(--darkred);
}
.cards2::-webkit-scrollbar-track {
  background: var(--thumb);
}



@media (min-width: 500px) {
  .card2 {
    flex-basis: calc(50% - 10px);
  }
  .card2:not(:last-child) {
    margin-right: 20px;
  }
}

@media (max-width: 768px) {
  .card2 {
    flex-basis: calc(calc(100% / 3) - 20px);
  }
  .card2:not(:last-child) {
    /* margin-right: 30px; */
  }
}



@media (min-width: 1400px) {
  .card {
    flex-basis: calc(25% - 30px);
  }

  .card:not(:last-child) {
    margin-right: 40px;
  }
}



/* FOOTER STYLES */
.page-footer {
  position: fixed;
  right: 0;
  bottom: 50px;
  display: flex;
  align-items: center;
  padding: 5px;
  z-index: 1;
}

.page-footer a {
  display: flex;
  margin-left: 4px;
}



 /*galeria  */

.contenido-galeria{
  padding: 50px;

}
 .imagen-galeria{
  width: 150px;
  height: 150px;
 }

div.gallery {
  border: 1px solid #ccc;
}

div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
}

* {
  box-sizing: border-box;
}

.responsive {
  padding: 0 6px;
  float: left;
  width: 24.99999%;
  margin-top: 50px;
  
}

.responsive_fin{
  padding-bottom: 100px;

}
.h2{
  margin-top: 30px;
 background-color: white;
  width: 100%;
  height: 100px;
  padding: 30px;
}

@media only screen and (max-width: 700px) {
  .responsive {
    width: 49.99999%;
    margin: 6px 0;
  }
}

@media only screen and (max-width: 500px) {
  .responsive {
    width: 100%;
  }
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

</style>