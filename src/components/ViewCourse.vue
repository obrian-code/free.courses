<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   
      .conten-group{
          display: flex;
          justify-content: space-between;
          width: 100%;
      }  

      .button{
        margin-right: 7.5%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .button .btn-primary-style{
        outline: none;
        border: none;
        font-size: calc(.5rem + .3vw);
        padding: 8px 22px;
        border-radius: 50px;
        background-color: var(--buttons); 
        color: var(--toggle-color);
      }

      .search-box{
        margin-left: 6%;
        border-radius: 6px;
        transition: var(--tran-05);
        width: 220px;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
  
      .search-box input{
          height: 100%;
          width: 100%;
          outline: none;
          border: none;
          margin-left: 10px;
          background-color:var(--sidebar-body-color);
          font-size: calc(.9rem + .1vw);
          color: var(--text-color);
          border-radius: 6px;
          font-size: 17px;
          font-weight: 500;
          transition: var(--tran-05);
          text-transform: capitalize;
      }

        .search-box  input:focus{
        background-color: var(--toggle-color);
          color: var(--sidebar-color);
        
        }
   
      .search-box  input::placeholder{
      color: var(--text-color);
      }
 
      section{
        position: relative;  
        height: 100%;
        padding:20px 0;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5,16%);
        grid-gap: 20px;
        align-items: center;
        justify-content: center;
      }

      .card{
        position: relative;
        background-color: var(--toggle-color);
        border-radius: 20px;
        height: 350px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
      }
      
      .card::before{
        content: "";
        position: absolute;
        height: 40%;
        width: 100%;
        background-color:var(--buttons);
        border-radius: 20px 20px 0 0;
      }
      
      .card .card-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        position: relative;
        z-index: 90;
      }
      
      section .card .image{
        height: 140px;
        width: 140px;
        max-width: 100%;
        max-height: 100%;
        border-radius: 50%;
        padding: 3px;
        background-color:var(--buttons);
      }
      
      section .card .image img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
        border: 3px solid var(--toggle-color);
      }
      
      .card .courses{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
      } 
      
      .courses .name{
        font-size: calc(.9rem + .1vw);
        text-align: center;
        font-weight: 600;
        line-clamp: 1; /*limitar*/
        -webkit-line-clamp: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      
      .courses .description{
        font-size: calc(.5rem + .3vw);
        font-weight: 500;
        text-align: center;
        line-clamp: 1; /*limitar*/
        -webkit-line-clamp: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      
      .card .rating{
        display: flex;
        align-items: center;
        margin-top: 18px;
        cursor: default;
      }
      
      .card .rating i{
        font-size: calc(.5rem + .3vw);
        margin: 0 2px;
        color: var(--buttons);
      }
      
      .card .button{
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 20px;
      }
      
      .card .button button{
        outline: none;
        border: none;
        padding: 8px 22px;
        border-radius: 20px;
        font-size: calc(.5rem + .3vw);
        transition: all 0.3s ease;
        cursor: pointer;
      }
      
      .View{
        background-color:var(--buttons); 
        color: var(--toggle-color);
      }

      .Link{
        background-color: var(--enable);
      }

      .button button:hover{
        background-color: var(--hover);
        color: var(--toggle-color);
        
      }
    
      @media(max-width:992px) {

        section{
          grid-template-columns: repeat(2,40%);
          grid-gap: 20px;
        }

      }

      @media(max-width:600px) {

            section{
              grid-template-columns: repeat(1,70%);
              grid-gap: 20px;
            }
            
      }
</style>


<template>

 <main>

  <div class="conten-group ">
    <div class="search-box fade-in">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="search" v-model="search"   class="form-control" placeholder="Search ....." >
    </div>

        <div class="button fade-in"> 
        <button type="button" class="btn-primary-style" @click="agregar" >
          <i class="fa-solid fa-circle-plus"></i> Agregar</button>
        </div>
  </div>

<section>
  <div class="card" v-for="curso in filterSearch" :key="curso.text" >
                  <div class="card-content">
                              <div class="image">
                                <img v-bind:src="curso.url_img" alt="">
                              </div>

                              <div class="courses">
                                <span class="name">{{ curso.name }}</span>
                                <span class="description">{{ curso.description }}</span>
                              </div>

                              <div class="rating" title="Rating">
                              <i> {{curso.rating}} / 5</i>
                              </div>

                              <div class="button">
                                <button class="View" 
                                @click="ViewCourse(curso.name,curso.description,curso.days,
                                                  curso.idiom,curso.category,curso.url_img,curso.rating)">View</button>
                                <button class="Link" @click="hrefCourse(curso.url,curso.coupon)">Link</button>
                              </div>
                            </div>
      
                  </div>
</section>

</main>
</template>

<script>
import {mapState,mapActions } from 'vuex';

export default {
  name: 'ViewCourse',

 data: function () {
    return {
      search:''
    }
  },

  computed:{
    ...mapState(['courses']),   

    //METODO BUSCAR UN CURSO
    filterSearch(){
        return this.courses.filter((course) => {
        return course.name.toLowerCase().includes(this.search.toLowerCase())
      })

  }
},
  methods: {
    ...mapActions(['obtenerCouses']), //GLOBALES METODO OBTENER  CURSOS
    ...mapActions(['addCourses']), //GLOBALES METODO AGREGAR  CURSO

  //METODO AGREGAR  CURSO
  agregar: function () {
        this.$swal({
                  title: '<i>Nuevo Courso</i>',
                  html:
                    ` <div  class="modal-body">
                <input type="text" placeholder="Nombre" name="name"  class="form-control" id="name"><br>
                <input type="text" placeholder="Descripción" name="description"  id="description" class="form-control "><br>
                <input type="text" placeholder="Cupón" name="coupon" id="coupon" class="form-control"><br>
                <input type="date" title="Fecha de expiración" name="daysLeft" id="days" class="form-control "><br>
                <input type="url" placeholder="Url del Curso" name="url" id="url" class="form-control "><br>
              
                <select type="text" name="Idioma" id="idiom" class="form-control"><br>
                <option disabled selected>Idiom</option>
                <option value="Árabe">Árabe</option>
                <option value="Alemán">Alemán</option>
                <option value="Bengalí">Bengalí</option>
                <option value="Corenano">Corenano</option>
                <option value="Chino">Chino</option>
                <option value="Español">Español</option>
                <option value="Francés">Francés</option>
                <option value="Hindi">Hindi</option>
                <option value="Inglés">Inglés</option>
                <option value="Japones">Japones</option>
                <option value="Portugués">Portugués</option>
                <option value="Ruso">Ruso</option>
                <option value="Turco">Turco</option>
                <option value="Suajili">Suajili</option>
                <option value="Urdu">Urdu</option>
                <option value="Vietnamita">Vietnamita</option>
                </select>
                <br>

                <select type="text" placeholder="Categoria"  id="category" class="form-control"><br>
                <option disabled selected>Category</option>
                <option value="Development">Development</option>
                <option value="Business">Business</option>
                <option value="Finance &amp; Accounting">Finance &amp; Accounting</option>
                <option value="IT &amp; Software">IT &amp; Software</option>
                <option value="Office Productivity">Office Productivity</option>
                <option value="Personal Development">Personal Development</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Life Style">Life Style</option>
                <option value="Photography &amp; Video">Photography &amp; Video</option>
                <option value="Health &amp; Fitness">Health &amp; Fitness</option>
                <option value="Music">Music</option>
                <option value="Teaching &amp; Academics">Teaching &amp; Academics</option>
                </select>
                <br>
                <input " type="url" placeholder="Url de la Imagen" name="image" id="image" class="form-control">
                <br>

                <input type="number" min="0" max="5" size="1" name="rating" id="rating"  placeholder="Rating" class="form-control">
                  `,
                showCloseButton: true,
                showCancelButton: true,
                confirmButtonColor: '#0d6efd',
                cancelButtonColor: '#6c757d',
                confirmButtonText: 'Agregar'
                }).then((result) => { //VERFICAR SI SE PULSO EN CLICK EN AGREGAR
                  if(result.value) {
                    const new_Courses = {
                        name: document.getElementById('name').value,
                        description: document.getElementById('description').value,
                        coupon: document.getElementById('coupon').value,
                        days:document.getElementById('days').value,
                        url:document.getElementById('url').value,
                        idiom:document.getElementById('idiom').value,
                        category:document.getElementById('category').value,
                        url_img:document.getElementById('image').value,
                        rating:document.getElementById('rating').value
                    }

                    this.addCourses(new_Courses) //GLOBALES METODO AGREGAR  CURSO

          
                  } 


                })

    },

  //METODO PARA VERIFICAR EL CONTENIDO DE UN CURSO EN ESPECÍFICO
  ViewCourse: function(name,description,days,idiom,category,url_img,rating){

        this.$swal({
          title: `<i style="font-size:18px">${name}</i>`,
          html:
            ` 
          <div  class="modal-body">
            <label class="form-control"> 
            <img src="${url_img}" alt="" width="90%"; style="padding-top:20px;padding-bottom:20px;">
            </label>
          <br>
          <label class="form-control">${description}</label><br>
          <label class="form-control">${days}</label><br>
          <label class="form-control">${idiom}</label><br>
          <label class="form-control">${category}</label><br>
          <label class="form-control">${rating} / 5</label><br>
          `,
        showCloseButton: true,
        cancelButtonColor: '#6c757d',
        })
    },
    hrefCourse: function(url,coupon){
console.log(url+"couponCode="+coupon);
window.open(url+"couponCode="+coupon, '_blank');
    }

  },

  mounted() { 
      this.obtenerCouses() //GLOBALES METODO OBTENER  CURSOS
  }
  
}
</script>



