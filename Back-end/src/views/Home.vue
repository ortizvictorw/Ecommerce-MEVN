<template>
  <div id="home">
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
import Header from "../app/components/Home/Header.vue";
import Card from "../app/components/Home/Cards.vue";
import List from "../app/components/Home/List.vue";

export default {
  name: "home",
  components: {
    Header,
    Card,
    List,
  },
};
</script>

