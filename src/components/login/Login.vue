<template>
    <div class="section">
        <div class="container-fluid">
            <div class="row">
                <div class="col align-self-center">
                    <div class="card">
                        <form>
                            <h2 class="title">Welcome!</h2>
                            <div class="form-group">
                                <input v-model="account" type="text" class="form-control" title="ID" placeholder="ID"/>
                                <input v-model="password" type="text" class="form-control" title="Password" placeholder="Password"/>
                            </div>
                            <!-- todo 임시 소스, 수정 필요 -->
                            <div class="error" v-if="signInError">We cannot find that username or password</div>
                            <!-- todo 임시 소스, 수정 필요 -->
                            <button @click="eventSignin" class="btn btn-primary btn-lg signin">
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
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                account : '',
                password: ''
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
    /**
    * todo 임시 소스, 수정 필요
    */
    .section .card .error {
        color: #f56049;
    }

</style>

