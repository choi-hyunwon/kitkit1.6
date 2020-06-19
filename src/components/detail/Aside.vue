<template>
    <aside class="doc-aside">
        <div class="header">
            <router-link to="/">
                <img width="116" height="62" src="https://kitkitschool.com/wp-content/uploads/2019/08/cropped-kitkitlogo_eng.png" class="logo attachment-full size-full" rcset="https://kitkitschool.com/wp-content/uploads/2019/08/cropped-kitkitlogo_eng.png 500w, https://kitkitschool.com/wp-content/uploads/2019/08/cropped-kitkitlogo_eng-300x156.png 300w" sizes="(max-width: 500px) 100vw, 500px" alt="kitkit school logo"/>
            </router-link>
            <button @click="eventSignOut" class="btn signout">
                Sign out <font-awesome-icon :icon="['fal', 'sign-out-alt']"/>
            </button>
        </div>
        <ul class="menu" v-if="status === 'user'">
            <a href="#">
                <li @click="event => eventMenu(event, userMenu[i].title)" v-for="(userList, i) in userMenu" :key="i" class="item" :class="{active : userMenu[i].title === getActive}">
                    <font-awesome-icon :icon="`${userList.icon}`" class="icon">{{userList.title}}</font-awesome-icon>
                    <div class="text">{{userList.title}}</div>
                    <div class="underline"></div>
                </li>
            </a>
        </ul>
        <ul class="menu" v-else-if="status === 'admin'">
            <a href="#">
                <li @click="event => eventMenu(event, adminMenu[i].title)" v-for="(adminList, i) in adminMenu" :key="i" class="item" :class="{active : adminMenu[i].title === getActive }">
                    <font-awesome-icon :icon="`${adminList.icon}`" class="icon">{{adminList.title}}</font-awesome-icon>
                    <div class="text">{{adminList.title}}</div>
                    <div class="underline"></div>
                </li>
            </a>
        </ul>
    </aside>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'Aside',
        data() {
            return {
                active : '',
                adminMenu : [{
                    title : 'Manage',
                    icon : 'list-ul'
                },{
                    title : 'Create',
                    icon : 'user-check'
                }],
                userMenu : [{
                    title : 'Dashboard',
                    icon : 'desktop'
                },{
                    title : 'Download',
                    icon : 'download'
                },{
                    title : 'Support',
                    icon : 'info-circle'
                }]
            }
        },
        mounted () {
            this.active = this.detail
        },
        watch : {
            'detail' () {
                this.active = this.detail
            }
        },
        computed: {
            ...mapGetters({
                status : 'getStatus'
            }),
            getActive(){
                return this.active
            },
            detail() {
                return this.$route.params.detail;
            }
        },
        methods : {
            eventSignOut() {
                this.$EventBus.$emit('eventSignOut');
            },
            eventMenu (event, path) {
                this.$router.push({path: `/${path}`});
            }
        }
    }
</script>

<style>
    .doc-aside .header {
        height: 178px;
        border-bottom: 1px solid #dbab15;
    }

    .doc-aside .header .logo {
        margin-top: 40px;
        width: 116px;
        height: 62px;
    }
    .doc-aside .header .btn.signout {
        margin-top: 25.9px;
        min-width: 120px;
        width: 120px;
        height: 30px;
        background-color: #be8720;
        color: #fff;
        font-family: 'Lato';
        font-weight: normal;
        line-height: 0;
    }

    .doc-aside .menu {
        border-top: 1px solid #ffda69;
        padding: 0;
        padding-top: 10px;
        text-align: center;
    }

    .doc-aside .menu .item {
        padding: 27px 16px 23.5px 0;
        margin-left: 10px;
        width: 171px;
        height: 120px;
        margin-top: -1px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        font-size: 24px;
        color: #be8720;
        font-weight: bold;
        position: relative;
    }
    .doc-aside .menu .item.active {
        background-color: #fff;
        color: #5a3428;
    }

    .doc-aside .menu .item .icon {
        z-index: 100;
        font-size: 32px;
    }
    .doc-aside .menu .item .text {
        z-index: 100;
        margin-top: 8.5px;
        line-height: 29px;
    }

    .doc-aside .menu .item .underline {
        background-color: #ffda69;
        height: 1px;
        position: absolute;
        bottom: 0;
        right: 15px;
        width: 150px;
    }

    .doc-aside .menu .item.active .underline {
        background-color: #fff;
    }

</style>

