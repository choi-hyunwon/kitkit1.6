<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: 'App',
        watch : {
            'access' (){
                if(!this.access) this.$router.push({path: '/login'});
            }
        },
        mounted (){
          if (this.access) {
              if(this.status === 'admin') this.$router.push({path: '/Create'});
              else this.$router.push({path: '/Dashboard'});
          }else this.$router.push({path: '/login'})
        },
        computed: {
            ...mapGetters({
                status : 'getStatus',
                access : 'getAccess',
            })
        }
    }
</script>

<style src="@/assets/css/bootstrap.css"></style>
<style src="@/assets/css/kitkit1.6.css"></style>
<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
