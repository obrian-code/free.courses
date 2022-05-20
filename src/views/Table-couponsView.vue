<style scoped>

 .conten-group{
      display: flex;
      justify-content: flex-end;
      width: 70%;
  }  

  .search-box{
       margin-left: 6%;
      border-radius: 6px;
      width: 220px;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

  }

  .search-box input{
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
      margin-left: 10px;
      background-color:var(--sidebar-body-color);
      font-size: calc(.9rem + .1vw);
      color: var(--text-color);
      border-radius: 6px;
      font-size: 17px;
      font-weight: 500;
      text-transform: capitalize;
  }

  .search-box  input:focus{
      background-color: var(--toggle-color);
      color: var(--bs-table-bg);;
  }
   
  .search-box  input::placeholder{
      color: var(--text-color);
  }

  .btn{
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      margin:5px;
      cursor:pointer;
      background-color: var(--buttons);
      color: var(--toggle-color);
      font-size: calc(.5rem + .3vw);
      padding: 8px 22px;
      border-radius: 50px; 
  }

  .btn:hover{
    background-color: var(--hover);
    color: var(--toggle-color);
  }
    
  .btn i{
      margin-right:5px;  
  }
  .btn-enable{
    background-color:var(--enable);
    color:black;
  }
  
  .table-responsive-sm{
      width: 70%;
      overflow: auto;
      background-color: var(--toggle-color);
  }
  
  

  .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }

  .table_title{
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      background-color: var(--sidebar-color);
      color:var(--toggle-color);
      padding: 50px;
  }

  @media screen and (max-width:1800px) {

      .table-responsive-sm{
          height: 64.9vh;
      }

  }

  @media screen and (max-width:992px) {

      .table-responsive-sm{
          height: 100vh;
      }

  }

  @media screen and (max-width:700px) {
    
      .table-responsive-sm {
        width: 90%;
      }
       td,th{
           font-size: calc(.3rem + .9vw);
      }

  }

</style>

<template>
  <div class="contenedor">
                        <div class="container">
                 
                                  <div class="conten-group ">
                                      <div class="search-box fade-in">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                        <input type="search" v-model="search"   class="form-control" 
                                        placeholder="Search ....." >
                                      </div>
                                    </div>


                            <div class="table-responsive-sm">
                              <table class="table table-hover ">
                              <thead>
                              <tr class="table_title">		
                                <th scope="col">#</th>
                                <th scope="col">Curso</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Cupón</th>
                                <th scope="col">Publicación</th>
                                <th scope="col">Expira</th>
                                <th scope="col">Idioma</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Acción</th>
                              </tr>
                              </thead>
                              <tbody>
                      
                              <tr scope="row" v-for="(curso, index) in filterSearch" 
                              :key="curso.index" @click="table_active">
                                <td>{{index+=1}}</td>
                                <td>{{curso.name}}</td>
                                <td>{{ curso.description }}</td>
                                <td>{{ curso.coupon }}</td>
                                <td>{{ curso.days_public}}</td>
                                <td>{{ curso.days }}</td>
                                <td>{{ curso.idiom }}</td>
                                <td>{{ curso.category}}</td>
                                  <td>
                                      <a class="btn" @click="edit(curso.id,
                                      curso.name,curso.description,curso.coupon,curso.days,curso.url,
                                      curso.idiom,curso.category,curso.url_img,curso.rating)">
                                        <i class="fas fa-dot-circle"></i> Editar
                                      </a>

                                      <a class="btn btn-enable" @click="remove(curso.id)">
                                        <i class="fas fa-minus-circle"></i>Eliminar   
                                      </a>
                                  </td>
                              </tr>
                              </tbody>
                                </table> 
                            </div>

                        </div>    

                       <footerView></footerView>         
            </div>
 
</template>

<script>

import footerView from '@/components/footer.vue'
import {mapState,mapActions } from 'vuex'
export default {
  name: 'Table-couponsView',

  components: {
    footerView
  },

  data: function () {
    return {
      search:'',
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
    ...mapActions(['putCourses']), //GLOBALES METODO ACTULIZAR  CURSO
    ...mapActions(['deleleteCourses']), //GLOBALES METODO ELIMINAR CURSO

      //METODO ACTULIZAR CURSO
        edit: function (id,name,description,coupon,
              days,url,idiom,category,url_img,rating) {
    
          this.$swal({
                    title: '<i>Edit Course</i>',
                    html:
                      ` <div  class="modal-body">
                  <input type="text" placeholder="Nombre" name="name" value="${name}" class="form-control" id="name"><br>
                  <input type="text" placeholder="Descripción" name="description" value="${description}"  id="description" class="form-control "><br>
                  <input type="text" placeholder="Cupón" name="coupon" id="coupon" value="${coupon}" class="form-control"><br>
                  <input type="date" title="Fecha de expiración"" name="daysLeft" id="days" value="${days}" class="form-control "><br>
                  <input type="url" placeholder="Url del curso" name="url" id="url" value="${url}" class="form-control "><br>
                
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
                  <input " type="url" placeholder="Url de laImagen" value="${url_img}" name="image" id="image" class="form-control">
                  <br>

                  <input type="number" min="0" max="5" size="1" name="rating" id="rating" value="${rating}"  placeholder="Rating" class="form-control">
                    `,
                  showCloseButton: true,
                  showCancelButton: true,
                  confirmButtonColor: '#0d6efd',
                  cancelButtonColor: '#6c757d',
                  confirmButtonText: 'Editar'
                  }).then((result) => {//VERFICAR SI SE PULSO EN CLICK EN EDITAR
                    if(result.value) {

                      const new_Courses = {
                          id:id, 
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

                    this.putCourses(new_Courses)//GLOBALES METODO ACTULIZAR  CURSO
                    

                    } 
                  })

    },
    //METODO ELEIMINAR CURSO
    remove:function(id){

      this.deleleteCourses(id) //GLOBALES METODO ELIMINAR CURSO

    },


  },
 
  mounted() {
    this.obtenerCouses()

  }
  

}
</script>
