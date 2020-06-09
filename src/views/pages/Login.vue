<template>
    <div>
        <Header/>
        <Login/>
        <Footer/>
    </div>
</template>

<script>
    import Header from '../../components/login/Header'
    import Login from '../../components/login/Login'
    import Footer from '../../components/login/Footer'

    export default {
        name: 'login',
        layout : 'login',
        components: {
            Header,
            Login,
            Footer
        }
    }
</script>

<style>
    .container-fluid {
        padding-left: 20px;
        padding-right: 20px;
    }
</style>

