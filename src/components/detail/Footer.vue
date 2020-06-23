<template>
    <footer class="footer detail-footer">
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
    </footer>
</template>

<script>
    export default {
        name: 'detailFooter',
        components: {

        }
    }
</script>

<style>
    .detail .footer.detail-footer {
        position: relative;
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
        position: relative;
        padding-left: 11px;
    }

    .detail .footer.detail-footer .row .terms .terms-of-service {
        padding-right: 11px;
        padding-left: 0;
    }

    .detail .footer.detail-footer .row .terms .terms-of-service:after {
        position: absolute;
        top: 1px;
        right: 0;
        content: '';
        width: 1px;
        height: 20px;
        background-color: #999;
    }

    .detail .footer.detail-footer .row .terms .legal-privacy {
        padding-right: 11px;
    }

    .detail .footer.detail-footer .row .terms .legal-privacy:after {
        position: absolute;
        top: 1px;
        right: 0;
        content: '';
        width: 1px;
        height: 20px;
        background-color: #999;
    }

</style>

