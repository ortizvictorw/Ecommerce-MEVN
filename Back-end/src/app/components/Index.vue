
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <img
          class="img-fluid col-2"
          src="https://desarrollaweb.com.ar/assets/images/logo-sin-fondo.png"
          alt=""
        />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Metodos de Pago</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Remeras Hombre</a></li>
                <li><a class="dropdown-item" href="#">Remeras Dama</a></li>
                <li><a class="dropdown-item" href="#">Canguro Hombre</a></li>
                <li>
                  <a class="dropdown-item" href="#">Pantalon deportivo</a>
                </li>
              </ul>
            </li>

            <a href="http://" class="btn btn-secondary btn-md-block my-3"
              >Mi Carrito <i class="fas fa-shopping-cart"></i>
            </a>
          </ul>
          <form  class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar Productos"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
    <div class="row container mx-auto">
      <div class="card col-12 my-1">
        <img
          src="https://files.cdn.printful.com/o/upload/variant-image/12/123eded87f4c54cee78f7c299e517fd4_l"
          class="card-img-top"
          alt="..."
          
        />
        <div class="card-body">
          <h5 class="card-title">Remera Dama</h5>
          <p class="card-text">Exelente opcion para cualquier ocasion</p>
          <a href="#" class="btn btn-primary">Agregar a Carrito</a>
        </div>
      </div>
      <div class="card col-12 my-1">
        <img
          src="https://files.cdn.printful.com/o/upload/variant-image/2e/2ecfce77feb3657d328119783492dc5e_l"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Remera Caballero</h5>
          <p class="card-text">Exelente opcion para cualquier ocasion</p>
          <a href="#" class="btn btn-primary">Agregar a Carrito</a>
        </div>
      </div>
      <div class="card col-12 my-1">
        <img
          src="https://files.cdn.printful.com/o/upload/variant-image/40/40a573d12e9fa5f5c0228d132bfd7f07_l"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Canguro Hombre</h5>
          <p class="card-text">Exelente opcion para cualquier ocasion</p>
          <a href="#" class="btn btn-primary">Agregar a Carrito</a>
        </div>
      </div>

      <div class="card col-12 my-1">
        <img
          src="https://files.cdn.printful.com/o/upload/variant-image-jpg/89/89140b7773b9183565e79267508221e7_l"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Pantalon deportivo</h5>
          <p class="card-text">Exelente opcion para cualquier ocasion</p>
          <a href="#" class="btn btn-primary">Agregar a Carrito</a>
        </div>
      </div>
      <ul class="list-group my-3 col-12">
        <h2>Mi Carrito <i class="fas fa-shopping-cart"></i></h2>

        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          Cras justo odio
          <span class="badge bg-primary rounded-pill">14</span>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          Dapibus ac facilisis in
          <span class="badge bg-primary rounded-pill">2</span>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          Morbi leo risus
          <span class="badge bg-primary rounded-pill">1</span>
        </li>
      </ul>
      <button type="button" class="btn btn-secondary btn-md-block my-3">
        Pagar
      </button>
      <img  v-bind:src="imagen" alt="imagen por default">
    </div>
  </div>
</template>

// Mostrar imagen
<script>
  
</script>

// Llamo a axios //

<script>
import axios from "axios";
export default {
  data() {
    return {
      producto: null,
    };
  },
  mounted() {
    // console.log("ciclo montado");
    this.getListar();
  },
  methods: {
    getListar() {
      axios
        .get("http://localhost:3000/api/productos")
        .then((res) => {
          console.log(res.data);
          this.producto = res.data;
        })
        .catch((e) => console.warn(e));
    },
  },
};
</script>
