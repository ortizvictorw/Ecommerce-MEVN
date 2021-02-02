<template>
    <div id="carga" class="container">
      <header>
        <Header />
      </header>
      <main class="container">
        <Navegador />
        <Carga />
      </main>
    </div>
</template>

<script>
import Header from "../app/components/Producto/Header-Prod.vue";
import Navegador from "../app/components/Producto/Navegador.vue";
import Carga from "../app/components/Producto/Carga.vue";
export default {
  name: "carga",
  components: {
    Header,
    Navegador,
    Carga

  },
}
</script>