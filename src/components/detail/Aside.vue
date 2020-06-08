<template>
    <aside class="doc-aside">
        <div class="header">
            <router-link to="/">
                <img width="116" height="62" src="https://kitkitschool.com/wp-content/uploads/2019/08/cropped-kitkitlogo_eng.png" class="logo attachment-full size-full" rcset="https://kitkitschool.com/wp-content/uploads/2019/08/cropped-kitkitlogo_eng.png 500w, https://kitkitschool.com/wp-content/uploads/2019/08/cropped-kitkitlogo_eng-300x156.png 300w" sizes="(max-width: 500px) 100vw, 500px" alt="kitkit school logo"/>
            </router-link>
            <div class="account">willychoi</div>
            <button class="btn signout">
                Sign out <i class="fas fa-camera"/>
            </button>
        </div>

        <div>
            <ul v-if="user === 'user'">
                <li><i>fa-</i><span>Dashboard</span></li>
                <li><i>fa-</i><span>Download</span></li>
                <li><i>fa-</i><span>Support</span></li>
            </ul>
            <ul v-if="user === 'admin'">
                <li><i>fa-</i><span>Manage</span></li>
                <li><i>fa-</i><span>Create</span></li>
            </ul>
        </div>
    </aside>
</template>

<script>
    export default {
        name: 'Aside',
        layout : 'detail',
        components: {

        },
        computed: {
            user() {
                return this.$route.params.user;
            }
        }
    }
</script>

<style>
    .doc-aside .header {
        height: 188px;
        border-bottom: 1px solid #dbab15;
    }

    .doc-aside .header .logo {
        margin-top: 40px;
        width: 116px;
        height: 62px;
    }
    .doc-aside .header .account {
        margin: 11px auto;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: -1px;
        color: #5a3428;
    }
    .doc-aside .header .btn.signout {
        margin-top: -35px;
        min-width: 120px;
        width: 120px;
        height: 30px;
        background-color: #be8720;
        color: #fff;
        font-family: 'Lato';
        font-weight: normal;
        line-height: 0;
    }
</style>

