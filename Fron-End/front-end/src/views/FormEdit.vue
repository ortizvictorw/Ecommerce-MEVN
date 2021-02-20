<template>
<Header />
<NavbarCreate /> 
<Editar />
</template>
<script>
import Editar from '../components/Formulario-productos-editar'
import NavbarCreate from '../components/NavbarCreate'
import Header from '../components/Header.vue';

export default {
  components: { Editar,NavbarCreate,Header }
};
</script>
