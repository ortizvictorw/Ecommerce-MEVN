

<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <main>
      <div class="row container mx-auto d-flex justify-content-center">
        <div class="container">
        <Carrucel />
         <Categorias />
        <Card />
        </div>
      </div>
       
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>


<script>
import Header from "../components/Header";
import Card from "../components/Cards.vue";
import Carrucel from '../components/Carrucel'
import Footer from '../components/Footer.vue';
import Categorias from '../components/Categorias.vue';

export default {
  components: { Header, Card, Carrucel, Footer,Categorias },
};
</script>
