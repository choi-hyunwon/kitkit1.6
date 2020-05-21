<template>
  <div>
    <no-ssr>
      <Aside :menu="menu"  v-if="menu === 'DocumentDoc' || menu === 'ComponentDoc' "/>
      <DocumentDoc v-if="menu === 'DocumentDoc'" />
      <ComponentDoc v-else-if="menu === 'ComponentDoc'"/>
    </no-ssr>
  </div>
</template>

<script>
   import Aside from "../../components/Aside"
   import ComponentDoc from "../../components/doc/ComponentDoc"
   import DocumentDoc from "../../components/doc/DocumentDoc"

    export default {
      components: {
          Aside,
          DocumentDoc,
          ComponentDoc
      },
      computed: {
        menu() {
          return this.$route.params.menu;
        }
      }
    }
</script>

<style >

</style>
