<template>
    <footer class="footer detail-footer">
        <div class="row">
            <div class="col text-left">
                <img src="~@/assets/img/common/enuma-logo.png" alt="enuma logo"/>
            </div>
            <div class="col text-center">
                <div class="copyright">©2020 Enuma, Inc. All Rights Reserved.</div>
            </div>
            <div class="col text-right">
                <div class="terms">
                    <a href="https://enuma.com/tos/">Terms of Service | </a>
                    <a href="http://kitkitschool.com/legal-kitkit/">Legal Privacy | </a>
                    <a href="https://enuma.com/policy/">Policy</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        layout : 'detail',
        components: {

        }
    }
</script>

<style>
    .detail .footer.detail-footer {
        position: fixed;
        bottom: 0;
        width: calc(100% - 180px);
        min-width: 1020px;
        margin-left: 180px;
        padding: 26px 40px;
        text-align: center;
    }

    .detail .footer.detail-footer .row {
        color: #999;
        font-size: 16px;
        line-height: 27px;
    }

    .detail .footer.detail-footer .row .terms a {
        color: #999;
        font-size: 16px;
        line-height: 27px;
    }
</style>

