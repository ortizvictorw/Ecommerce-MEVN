<template>
<Header />
<NavbarCreate/>
<CardsEdit />
</template>
<script>
import Crear from '../components/Formulario-productos-crear'
import Header from '../components/Header.vue';
import NavbarCreate from '../components/NavbarCreate'
import CardsEdit from '../components/CardsEdit'

export default {
  components: { Crear,Header,NavbarCreate,CardsEdit }
};
</script>
