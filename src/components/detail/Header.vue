<template>
    <div>
        <header class="header login-header">
            header
        </header>
    </div>
</template>

<script>
    export default {
        name: 'header',
        layout : 'detail',
        components: {

        }
    }
</script>

<style>
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
</style>

