<template>
  <header class="doc-header">
    <nav class="navbar navbar-expand">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <nuxt-link class="nav-link" to="/">MyUI Home<span class="sr-only">(current)</span></nuxt-link>
        </li>
        <li @click="reload" class="nav-item active">
          <nuxt-link class="nav-link" to="/doc/DocumentDoc">Documentation</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    computed: {
      menu() {
        return this.$route.params.menu;
      }
    },
    methods: {
      reload (){
        window.location.reload() ;
      }
    }
  }
</script>
