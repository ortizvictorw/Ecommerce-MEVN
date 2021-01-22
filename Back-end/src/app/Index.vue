
<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <main>
      <div class="row container mx-auto">
        <Card />
        <List />
      </div>
    </main>
  </div>
</template>




// Llamo a axios //

<script>
import Header from "./components/Header.vue";
import Card from "./components/Cards.vue";
import List from "./components/List.vue";

import axios from "axios";
export default {
  components: { Header, Card, List },
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
