<template>
  <div class="row container mx-auto">
    <div v-for="(producto, i) in productos" :key="i">
      <div class="card col-12 my-1 mx-2">
        <img
          :src="producto.imagen"
          class="card-img-top"
          :alt="producto.titulo"
        />
        <div class="card-body">
          <h5 class="card-title">{{ producto.titulo }}</h5>
          <h6>${{ producto.precio }}</h6>
          <p class="card-text">{{ producto.descripcion }}</p>
          <a href="#" class="btn btn-primary">Agregar a Carrito</a>
        </div>
        <div class="p-3 justify-content-between">
          <button
            @click="eliminarProd(producto._id)"
            class="btn btn-danger"
            type="submit"
          >
            Eliminar producto
          </button>
          <button
            @click="editarProd(producto._id)"
            class="btn btn-warning"
            type="submit"
          >
            Modificar producto
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "Cards",
  props: {},
  data() {
    return {
      productos: [],
    };
  },
  mounted() {
    this.leerApi();
  },
  methods: {
    leerApi() {
      axios
        .get("https://mini-ecommerce-api.herokuapp.com/api/productos/")
        .then((res) => {
          console.table(res.data);
          this.productos = res.data;
        })
        .catch((e) => console.log(e));
    },
    eliminarProd(item) {
      console.log(item);
      const index = this.productos.indexOf(item);
      const respuesta =
        confirm("Estas seguro de eliminar este producto?") &&
        this.productos.splice(index, 1);
      console.log(respuesta);

      if (respuesta) {
        this.axios.delete(
          `https://mini-ecommerce-api.herokuapp.com/api/productos/${item}`,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "token",
            },
          }
        );
      }
    },
  },
};
</script>

<style></style>
