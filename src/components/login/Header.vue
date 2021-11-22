<template>
    <div>
        <!-- header -->
        <header class="header login-header">
            <div class="bg-header">
                <div class="container-fluid">
                    <router-link to="/">
                        <img width="500" height="260" src="~@/assets/img/common/kitkitlogo.png" class="logo attachment-full size-full"  alt="kitkit school logo"/>
                    </router-link>
                    <h1 class="title">Admin</h1>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'loginHeader',
        components: {

        }
    }
</script>

<style>
    .header .bg-header {
        background-color: #f6c221;
        height: 100%;
    }

    .header .container-fluid {
        padding-top: 16.5px;
        padding-bottom: 16.5px;
        height: 80px;
    }

    .header .logo {
        width: 87px;
        height: 47px;
        vertical-align: bottom;
    }

    .header .title {
        font-size: 38px;
        line-height: 47px;
        padding-left: 13px;
        display: inline-block;
        color: #5a3428;
    }
</style>

