<template>
  <div class="contenedor">

    <ViewCourse></ViewCourse>
    <footerView></footerView> 

  </div>


</template>

<script>

import ViewCourse from '@/components/ViewCourse.vue'
import footerView from '@/components/footer.vue'

export default {

  name: 'HomeView',
  components: {
      ViewCourse,
      footerView
  }

}
</script>
