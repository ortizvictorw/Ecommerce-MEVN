<template>
    <div class="nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <img class="img-fluid col-2" src="https://desarrollaweb.com.ar/assets/images/logo-sin-fondo.png" alt="">
              <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Productos
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Remeras Hombre</a></li>
                        <li><a class="dropdown-item" href="#">Remeras Dama</a></li>
                        <li><a class="dropdown-item" href="#">Canguro Hombre</a></li>
                        <li><a class="dropdown-item" href="#">Pantalon deportivo</a></li>

                    </ul>
                  </li>

                  <a  href="http://" class="btn btn-secondary btn-md-block my-3">Mi Carrito <i class="fas fa-shopping-cart"></i> </a>

                  
                </ul>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Buscar Productos" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Buscar</button>
                </form>
              </div>
            </div>
          </nav>
    </div>
</template>
<script>

export default {
    name:'Header',
    
}
</script>