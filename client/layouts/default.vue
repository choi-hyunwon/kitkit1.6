<template>
  <div v-if="this.path === '/'" class="wrap">
      <Header/>
      <nuxt />
      <Footer/>
  </div>
  <div v-else class="wrap">
    <DocHeader/>
    <nuxt/>
  </div>
</template>

<script>
  import Header from "../components/Header"
  import DocHeader from "../components/DocHeader"
  import Aside from "../components/Aside"
  import Footer from "../components/Footer"

  export default {
    name : "default",
    components : {
      Header,
      DocHeader,
      Aside,
      Footer
    },
    computed: {
      path() {
        return this.$route.fullPath;
      }
    }
  }

</script>

