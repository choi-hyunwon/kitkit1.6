<template>
    <div>
        <Header/>
        <Login :signInError="signInError"/>
        <Footer/>
    </div>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
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
            Header,
            Login,
            Footer
        },
        created(){
            this.$EventBus.$on('eventSignin', (signIn) => {
                this.fetchSignin(signIn)
            });
        },
        computed: {
            ...mapGetters({
                signInfo : 'getSignInfo'
            })
        },
        methods: {
            ...mapMutations({

            }),
            ...mapActions({
                postSignIn : 'postSignIn'
            }),
            fetchSignin(signIn){
                this.postSignIn(signIn)
                    .then((result) => {
                        if(result){
                            console.log('로그인 성공');
                            this.signInError = false;
                            if (this.signInfo.status === 9){ // 관리자
                                this.$router.push({
                                    path: '/create'
                                });
                            }else if (this.signInfo.status === 2) {// 사용자
                                this.$router.push({
                                    path: '/grid'
                                });
                            }
                        }else{
                            console.log('로그인 실패');
                            this.signInError = true;
                        }
                    })
            }
        }
    }
</script>

<style>
    .container-fluid {
        padding-left: 20px;
        padding-right: 20px;
    }
</style>

