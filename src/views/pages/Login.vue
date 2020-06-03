<template>
    <div>
        <!-- header -->
        <header class="header login-header">
            <div class="bg-header">
                <div class="container">
                    <router-link to="/">
                        <img class="logo" src="http://kitkitschool.com/wp-content/uploads/2019/08/cropped-kitkitlogo_eng.png" alt="kitkit school logo"/>
                    </router-link>
                    <span class="title">Admin</span>
                </div>
            </div>
        </header>

        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col align-self-center">
                        <div class="card">
                            <h2 class="title">Welcome!</h2>
                            <input type="text"/>
                            <input type="text"/>
                            <button class="btn btn-primary">
                                Sign in
                            </button>
                            <span class="yale">
                                <i>!</i> Need help?
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="footer">
            <div class="container">
                <img src="~@/assets/img/common/enuma-logo.png" alt="enuma logo"/>
                <div class="copyright">
                    ©2020 Enuma, Inc. All Rights Reserved.
                </div>
                <div class="terms">
                    Terms of Service | Legal Privacy | Policy
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'login',
        layout : 'login',
        components: {

        }
    }
</script>

<style>
    .header .bg-header {
        background-color: #f6c221;
        height: 100%;
    }

    .header .container {
        padding: 16px 0;
    }

    .header .logo {
        width: 86.9px;
        height: 46.7px;
    }

    .header .title {
        font-size: 38px;
    }

    .content {
        height: calc(100vh - 160px);
        background-color: #f8f8f8;
    }
    .content .container {
        height: 100%;
    }
    .content .row {
        height: 100%;
    }
    .content .card {
        margin: 0 auto;
        width: 440px;
        height: 416px;
    }
    .content .card .title {
        font-size: 36px;
    }

    .footer {
        border: none;
        border-top: 1px solid #d2d2d2;
        background-color: #fff;
    }
    .footer .container {
        position: relative;
        padding: 30px 0;
    }
    .footer .container > div {
        position: absolute;
    }
    .footer .copyright {
        right: 441px;
    }
    .footer .terms {
        right: 0;
    }
</style>
