<template>
    <div class="section">
        <div class="container-fluid">
            <div class="row">
                <div class="col align-self-center">
                    <div class="card">
                        <form @submit.prevent="eventSignin">
                            <h2 class="title">Welcome!</h2>
                            <div class="form-group">
                                <input type="text" v-model="account"  class="form-control" placeholder="ID"/>
                                <input type="password" v-model="password" class="form-control" placeholder="Password"/>
                            </div>
                            <div class="accountError" v-if="signInError">
                                <div class="errorIcon">
                                    <font-awesome-icon :icon="['far', 'exclamation-triangle']"/>
                                </div>
                                <div class="errorMsg">
                                    <span>We cannot find that username or password</span>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary btn-lg signin">
                                Sign in
                            </button>
                            <div class="help yale"
                                 v-b-tooltip="{
                                    html: true,
                                    title: tipData,
                                    placement: 'top',
                                    animation: false
                                }"
                            >
                                <font-awesome-icon :icon="['far', 'exclamation-circle']"/>
                                <span class="text">Need help?</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {VBTooltip} from "bootstrap-vue";

    export default {
        name: 'login',
        directives: {
            'b-tooltip': VBTooltip
        },
        data() {
            return {
                account : '',
                password: '',
                tipData: '<span>Please send your account information (your name, email address, and organization) '
                       + 'to <b class="email">kitkitsupport@enuma.com</b> and we will respond to you with the ID and Password.</span>'
            }
        },
        props : {
            signInError : {
                Boolean,
                default(){return false}
            }
        },
        methods : {
            eventSignin: function() {
                this.$EventBus.$emit('eventSignin', {account : this.account, password : this.password});
            }
        }
    }
</script>

<style>
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
        padding: 23px 30px 40px;
        border-radius: 8px;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.26);
    }
    .section .card form {
        position: relative;
    }
    .section .card .title {
        padding-bottom: 10px;
        font-size: 36px;
        text-align: center;
        color: #5a3428;
    }
    .section .card .form-group {
        margin-top: 10px;
        margin-bottom: 20px;
    }
    .section .card .form-group .form-control {
        margin-top: 20px;
    }
    .section .card .accountError {
        color: #f56049;
        font-size: 24px;
        margin-bottom: 20px;
    }
    .section .card .accountError.show {
        display: block;
    }
    .section .card .accountError .errorIcon {
        position: absolute;
    }
    .section .card .accountError .errorMsg {
        margin-left: 35px;
    }
    .section .card .btn.signin {
        width: 100%;
        margin-bottom: 20px;
    }
    .section .card .help .text {
        margin-left: 10px;
    }

    .tooltip {
        opacity: 1 !important;
        /*transform: unset !important;*/
        /*will-change: unset !important;*/
    }

    .tooltip-inner {
        margin-left: 17px !important;
        max-width: 420px !important;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4) !important;
        border: solid 2px #ff9800 !important;
        background-color: #ffffff !important;
        padding: 20px !important;
        color: #333 !important;
        font-size: 19px !important;
        font-weight: 400;
        line-height: 26px !important;
        text-align: left !important;
        letter-spacing: normal !important;
    }

    .tooltip-inner .email {
        color: #0c6290;
        font-weight: normal;
        text-decoration: underline;
    }

    .bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^="top"] .arrow::before {
        top: 0;
        left: -170px;
        border-width: 0.4rem 0.4rem 0;
        border-top-color: #ff9800 !important;
    }

    .bs-tooltip-top .arrow::after, .bs-tooltip-auto[x-placement^="top"] .arrow::after {
        top: -2px;
        left: -169px;
        border-width: 0.35rem 0.35rem 0;
        border-top-color: #fff !important;
    }

    .tooltip .arrow::after {
        position: absolute;
        content: "";
        border-color: transparent;
        border-style: solid;
    }
</style>

