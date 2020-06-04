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
                    <div class="terms">Terms of Service | Legal Privacy | Policy</div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'footer',
        layout : 'login',
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
    .footer .container-fluid > div {
        color: #999;
        font-size: 16px;
        line-height: 27px;
    }
</style>

