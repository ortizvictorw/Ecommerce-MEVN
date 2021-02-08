

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


<script>
import Header from "../components/Header";
import Card from "../components/Cards.vue";
import List from "../components/List.vue";
export default {
  components: { Header, Card, List },
};
</script>
