<template>
  <div class="container py-3 my-3">
      <div class="col-12">
          <h3>Carga productos:</h3>
          <form action="" method="post" enctype="multipart/form-data" name="">
            <label  class="form-label"><strong>Nombre del producto:</strong></label>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                aria-describedby="basic-addon3"
                placeholder="Nombre del producto"
                required
              />
            </div>
            <label  class="form-label"><strong>Precio:</strong></label>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                placeholder="Precio"
                min="0"
                required
              />
            </div>
            <label  class="form-label"><strong>Descripción del producto:</strong></label>
            <div class="input-group">
                <textarea class="form-control" aria-label="With textarea" rows="5" cols="10" placeholder="Describa el producto..." required></textarea>
            </div>
            <div class="mb-3">
                <label for="file" class="form-label mt-3">Seleccionar imagenes</label>
                <input class="form-control form-control-sm" id="file" type="file" ref="file" v-on:change="subirImg()"  required />
            </div>
              <button v-on:click="enviar()" class="btn btn-secondary">Cargar</button>
          </form>
        </div>
  </div>
</template>
// <script>
// export default {
//     data(){
//         return{
//             archivo: ''
//         }
//     },
//     methods:{
//         subirImg(){
//             this.file = this.$refs.file.files[0]
//         }
//     }
// }
// </script>


<style>

</style>