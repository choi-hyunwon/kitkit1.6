<template>
    <footer class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col text-left">
                    <img src="~@/assets/img/common/enuma-logo.png" alt="enuma logo" width="89" height="26"/>
                </div>
                <div class="col text-center">
                    <div class="copyright">©2020 Enuma, Inc. All Rights Reserved.</div>
                </div>
                <div class="col text-right">
                    <div class="terms">
                        <a class="terms-of-service" href="https://enuma.com/tos/" target="_blank">Terms of Service</a>
                        <a class="legal-privacy" href="http://kitkitschool.com/legal-kitkit/" target="_blank">Legal Privacy</a>
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
    .footer .container-fluid .terms a {
        position: relative;
        padding-left: 11px;
    }
    .footer .container-fluid .terms .terms-of-service {
        padding-right: 11px;
        padding-left: 0;
    }

    .footer .container-fluid .terms .terms-of-service:after {
        position: absolute;
        top: 1px;
        right: 0;
        content: '';
        width: 1px;
        height: 20px;
        background-color: #999;
    }

    .footer .container-fluid .terms .legal-privacy {
        padding-right: 11px;
    }

    .footer .container-fluid .terms .legal-privacy:after {
        position: absolute;
        top: 1px;
        right: 0;
        content: '';
        width: 1px;
        height: 20px;
        background-color: #999;
    }
</style>

