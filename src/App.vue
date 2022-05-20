<style scoped>

/* EFECTO DE TRANSICIÓN PARA LAS RUTAS */

.fade-enter-active{
 transition: all .025s ease-in-out;
}
.fade-enter-active, .fade-leave-active {
    opacity: 1;
    transform: scale(.9);
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: scale(.3);
}

</style>

<template>
        <main>
              <div id="sidebar" :class="{active:isactive}">
              <div class="toggle-btn" @click="toggle">
                <div class="menu">
                    <span class="line one"></span>
                    <span class="line two"></span>
                    <span class="line three"></span>
                </div>
              </div>
              <ul>
                <li>
                  <img src="@/assets/icon.png" alt="Logo de Free Courses" class="logo">
                  <span>Free Courses</span>
                </li>
                <li>
                  <router-link to="/" class="nav-link" aria-current="page">
                  <i class="fa-solid fa-house"></i>Inicio</router-link>
                </li>
                <li>
                  <router-link to="/table-coupons" class="nav-link" >
                  <i class="fa-solid fa-graduation-cap"></i>Cupones de Mesa</router-link>  
                </li>
                <li>
                  <router-link to="/about" class="nav-link" >
                  <i class="fa-solid fa-address-card"></i>Sobre Free Courses</router-link>
                  </li>
              </ul>
            </div>
          
            <router-view v-slot="{ Component, route }">
              <transition :name="route.meta.transition || 'fade'" mode="in-out">
                    <component :is="Component" />
              </transition>
            </router-view>

        </main>
</template>

<script>

export default {

  data() {
    return {
    isactive:true,
    window: {
            width: 0,
            height: 0
        }
    }
  },
   created() {

      //CAPTURAR EL TAMAÑO DE LA PANTALLA
        window.addEventListener("resize", this.handleResize);
        this.handleResize();

    },

   methods:{

     //VERFICAR EL TOGGLE
     
     toggle(){
        if (this.isactive==false) {
          this.isactive=true
        }else{
          this.isactive=false
        }

      },

      //CAPTURAR EL TAMAÑO DE LA PANTALLA EN CELULARES PARA ACTIVAR EL TOGGLE
      handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
            if(this.window.width<700){
                  this.isactive=false
            }else{
                  this.isactive=false
            }
        }
  },
  
}
</script>
