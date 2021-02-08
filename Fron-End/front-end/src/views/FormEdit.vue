<template>
<NavbarCreate /> 
<Editar />
</template>
<script>
import Editar from '../components/Formulario-productos-editar'
import NavbarCreate from '../components/NavbarCreate'

export default {
  components: { Editar,NavbarCreate }
};
</script>
