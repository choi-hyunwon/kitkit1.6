<template>
  <header class="header">
    <div class="bg-header">
      <nav class="navbar navbar-expand navbar-dark">
        <nuxt-link class="navbar-brand" to="/"><img src="~@/assets/img/common/logo.png" alt="MyUI"></nuxt-link>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/">Home<span class="sr-only">(current)</span></nuxt-link>
          </li>
          <li @click="reload" class="nav-item">
            <nuxt-link class="nav-link" to="/doc/DocumentDoc">Documentation</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
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
