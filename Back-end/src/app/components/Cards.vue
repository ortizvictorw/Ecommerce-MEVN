<template>
  <div class="row container mx-auto">
    <div v-for="(producto,index) in productos" :key="index">
      <div class="card col-12 my-1 mx-2">
        <img :src="producto.src" class="card-img-top" :alt="producto.titulo" />
        <div class="card-body">
          <h5 class="card-title">{{ producto.titulo }}</h5>
          <h6>${{producto.precio}}</h6>
          <p class="card-text">Excelente opcion para cualquier ocasion</p>
          <a href="#" class="btn btn-primary">Agregar a Carrito</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props:{
    
  },
  data() {
    return {
      productos: [
        {
          titulo: "Remera blanca de dama",
          src:
            "https://files.cdn.printful.com/o/upload/variant-image/12/123eded87f4c54cee78f7c299e517fd4_l",
          precio:1000,
        },
        {
          titulo: "Remera blanca de caballero",
          src:
            "https://files.cdn.printful.com/o/upload/variant-image/2e/2ecfce77feb3657d328119783492dc5e_l",
            precio:900,
        },
        {
          titulo: "Canguro blanco de caballero",
          src:
            "https://files.cdn.printful.com/o/upload/variant-image/40/40a573d12e9fa5f5c0228d132bfd7f07_l",
            precio:2500,
        },
        {
          titulo: "Pantalon deportivo negro de caballero",
          src:
            "https://files.cdn.printful.com/o/upload/variant-image-jpg/89/89140b7773b9183565e79267508221e7_l",
            precio:2000,
        },
        {
          titulo: "Producto sin imagen",
          src: "https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg",
          precio:0,
        },
      ],
    };
  },
};
</script>

<style></style>
