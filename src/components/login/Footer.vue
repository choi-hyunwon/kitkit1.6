<template>
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
                    <div class="terms">
                        <a href="https://enuma.com/tos/" target="_blank">Terms of Service | </a>
                        <a href="http://kitkitschool.com/legal-kitkit/" target="_blank">Legal Privacy | </a>
                        <a href="https://enuma.com/policy/" target="_blank">Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'loginFooter',
        components: {

        }
    }
</script>

<style>
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
    .footer .container-fluid > div, .footer .container-fluid .terms a {
        color: #999;
        font-size: 16px;
        line-height: 27px;
    }
</style>

