<template>
    <div>
        <!-- header -->
        <header class="header login-header">
            <div class="bg-header">
                <div class="container-fluid">
                    <router-link to="/">
                        <img width="500" height="260" src="https://kitkitschool.com/wp-content/uploads/2019/08/cropped-kitkitlogo_eng.png" class="logo attachment-full size-full" rcset="https://kitkitschool.com/wp-content/uploads/2019/08/cropped-kitkitlogo_eng.png 500w, https://kitkitschool.com/wp-content/uploads/2019/08/cropped-kitkitlogo_eng-300x156.png 300w" sizes="(max-width: 500px) 100vw, 500px" alt="kitkit school logo"/>
                    </router-link>
                    <h1 class="title">Admin</h1>
                </div>
            </div>
        </header>

        <div class="section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col align-self-center">
                        <div class="card">
                            <form>
                                <h2 class="title">Welcome!</h2>
                                <div class="form-group">
                                    <input type="text" class="form-control" title="ID" placeholder="ID"/>
                                    <input type="text" class="form-control" title="Password" placeholder="Password"/>
                                </div>
                                <button class="btn btn-primary btn-lg signin">
                                    Sign in
                                </button>
                                <div class="help yale">
                                    <i>!</i><span>Need help?</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col text-left">
                        <img src="~@/assets/img/common/enuma-logo.png" alt="enuma logo"/>
                    </div>
                    <div class="col text-center">
                        <div class="copyright">©2020 Enuma, Inc. All Rights Reserved.</div>
                    </div>
                    <div class="col text-right">
                        <div class="terms">Terms of Service | Legal Privacy | Policy</div>
                    </div>
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
    .container-fluid {
        padding-left: 20px;
        padding-right: 20px;
    }

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

    .section {
        min-width: 1200px;
        height: calc(100vh - 160px);
        background-color: #f8f8f8;
    }
    .section .container-fluid {
        height: 100%;
    }
    .section .row {
        height: 100%;
    }
    .section .card {
        margin: 0 auto;
        width: 440px;
        height: 416px;
        padding: 23px 30px 0;
        border-radius: 8px;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.26);
    }
    .section .card .title {
        font-size: 36px;
        text-align: center;
        color: #5a3428;
    }
    .section .card .form-group {
        margin-top: 10px;
    }
    .section .card .form-group .form-control {
        margin-top: 20px;
    }
    .section .card .btn.signin {
        margin-top: 14px;
        width: 100%;
    }
    .section .card .help {

    }

    .footer {
        border: none;
        border-top: 1px solid #d2d2d2;
        background-color: #fff;
        height: 80px;
    }
    .footer .container-fluid {
        position: relative;
        padding-top: 25px;
        padding-bottom: 24px;
        text-align: center;
    }
    .footer .container-fluid > div {
        color: #999;
        font-size: 16px;
        line-height: 27px;
    }
</style>

