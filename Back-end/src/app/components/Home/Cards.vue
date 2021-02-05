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
          <h5 class="card-title ">{{ producto.titulo }}</h5>
          <h6>${{ producto.precio }}</h6>
          <p class="card-text ">{{ producto.descripcion }}</p>
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
            @click="editarProd(producto.titulo)"
            class="btn btn-warning"
            type="submit"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Modificar producto
          </button>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <strong>Editar</strong>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form action="" method="post" enctype="multipart/form-data" name="">
              <label class="form-label"
                ><strong>Nombre del producto:</strong></label
              >
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="basic-addon3"
                  placeholder="Nombre del producto"
                  required
                />
              </div>
              <label class="form-label"><strong>Precio:</strong></label>
              <div class="input-group mb-3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Precio"
                  min="0"
                  required
                />
              </div>
              <label class="form-label"
                ><strong>Descripción del producto:</strong></label
              >
              <div class="input-group">
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                  rows="5"
                  cols="10"
                  placeholder="Describa el producto..."
                  required
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="file" class="form-label mt-3"
                  >Seleccionar imagenes</label
                >
                <input
                  class="form-control form-control-sm"
                  id="file"
                  type="file"
                  ref="file"
                  v-on:change="subirImg()"
                  required
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button v-on:click="enviar()" class="btn btn-primary">
              Cargar
            </button>
          </div>
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
    editarProd(id,titulo,precio,descripcion) {
      console.log(titulo);
    },
  },
};
</script>

<style></style>
