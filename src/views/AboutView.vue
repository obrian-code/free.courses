<style scoped>


    .container{
        display: flex;
        width: 70%;
        height: 85vh;
        justify-content: center;
        align-content: center;
        flex-direction: column;
    } 

    .display-6{
        font-size: calc(.7rem + .9vw);
    }

    .lead {
        font-size: calc(.4rem + .6vw);
    }

    .conten_dev{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px; 
        font-size: calc(.4rem + .6vw);
    
    }

    p i{
        margin-right: 5px;
    }

    @media screen and (max-width:992px) {

      .container{
        width: 90%;
        height: 100vh;
      }

      .lead{
          font-size: calc(.3rem + .4vw);
          width: 100%;
      }
     

    }
    
</style>

<template :is="about">
  <div class="contenedor">
      
            <div class="container jumbotron">
              <h1 class="display-6 bounceIn">¿Por qué?</h1>
                <p class="lead bounceIn">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur labore expedita fuga, dolor incidunt, culpa cumque deserunt quaerat hic, voluptatem eos quo! Libero assumenda cupiditate sequi accusamus necessitatibus explicabo quaerat?<br> <br>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur labore expedita fuga, dolor incidunt, culpa cumque deserunt quaerat hic, voluptatem eos quo! Libero assumenda cupiditate sequi accusamus necessitatibus explicabo quaerat?
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur labore expedita fuga, dolor incidunt, culpa cumque deserunt quaerat hic, voluptatem eos quo! Libero assumenda cupiditate sequi accusamus necessitatibus explicabo quaerat?
                </p>
        <hr class="my-2">

            <p class="display-6 bounceIn">Desarrollado con:</p>
            
            <div class="conten_dev bounceIn">
              <p><i class="fab fa-vuejs" style="color: green;"></i>Vue</p>
              <p><i class="fab fa-vuejs" style="color: green;"></i>Vuex</p>
              <p><i class="fa-brands fa-js" style="color:red;"></i>Axios</p>
              <p><i class="fa-brands fa-js" style="color: green;"></i>Node</p>
              <p><i class="fab fa-php" style="color:blueviolet;"></i> Php</p>
              <p><i  class="fab fa-bootstrap" style="color: purple;"></i>Bootstrap</p>
              <p><i class="fab fa-js-square" style="color: blueviolet;"></i>SweetAlert2</p> 
              <p><i class="fa-brands fa-html5" style="color: red;"></i>HTML</p> 
              <p><i class="fa-brands fa-css3-alt" style="color: blue;"></i>CSS</p> 
            </div>

         </div>
          
            <footerView></footerView> 

              </div>
</template>


<script>

import footerView from '@/components/footer.vue'

export default {

  components: {

      footerView
  }
}
</script>