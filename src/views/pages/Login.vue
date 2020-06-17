<template>
    <div>
        <Header/>
        <Login :signInError="signInError"/>
        <Footer/>
    </div>
</template>

<script>
    import {mapGetters, mapActions, mapMutations} from 'vuex'
    import Header from '../../components/login/Header'
    import Login from '../../components/login/Login'
    import Footer from '../../components/login/Footer'

    export default {
        name: 'login',
        data() {
            return {
                signInError : false
            }
        },
        components: {
            Header, Login, Footer
        },
        created(){
            this.$EventBus.$on('eventSignin', (signIn) => {
                this.fetchSignin(signIn)
            });
        },
        mounted(){
            if (this.access) {
                if(this.status === 'admin') this.$router.push({path: '/Manage'});
                else this.$router.push({path: '/Dashboard'});
            }
        },
        computed: {
            ...mapGetters({
                status : 'getStatus',
                access : 'getAccess'
            })
        },
        methods: {
            ...mapActions({
                postSignIn : 'postSignIn'
            }),
            ...mapMutations({
                setLoginID : 'setLoginID'
            }),
            fetchSignin(signIn){
                this.postSignIn(signIn)
                    .then((result) => {
                        console.log(`postSignInResult : ${result}`);
                        if(result){
                            this.signInError = false;
                            this.setLoginID(signIn.account);
                            if (this.status === 'admin') this.$router.push({path: '/Manage'});
                            else if (this.status === 'user') this.$router.push({path: '/Dashboard'});
                        }else this.signInError = true;
                    })
            }
        },
        beforeDestroy () {
            this.$EventBus.$off('eventSignin')
        }
    }
</script>


