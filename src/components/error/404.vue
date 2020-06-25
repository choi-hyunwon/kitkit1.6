<template>
    <div class="errorPage page404">
        <div class="error">
            <img class="img" src="~@/assets/img/common/error_404.png" alt="page not found 404 image">
            <div class="title">OOPS! PAGE NOT FOUND</div>
            <div class="detail">We are sorry, but the page you requested was not found</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'E404',
        components: {

        }
    }
</script>

<style>
    .errorPage.page404 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        text-align: center;
    }

    .errorPage.page404 .error {
        width: 600px;
        min-width: 600px;
        margin: calc(50vh - 150px) auto;
        height: 300px;
        min-height: 300px;
        padding: 31.5px 0;
    }

    .errorPage.page404 .error .img {
        width: 184px;
        height: 123px;
    }

    .errorPage.page404 .error .title {
        margin: 17px 0 13px;
        font-family: Ubuntu;
        font-size: 48px;
        font-weight: bold;
        letter-spacing: -0.9px;
        line-height: 54px;
        padding: 0 10px;
        color: #f56049;
    }

    .errorPage.page404 .error .detail {
        font-family: 'Lato-Regular';
        font-size: 23px;
        font-weight: normal;
        line-height: 29px;
        letter-spacing: -0.7px;
        color: #333333;
    }
</style>

