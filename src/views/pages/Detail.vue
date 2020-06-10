<template>
    <div class="detail">
        <Header :detail="detail"/>
        <Footer/>
        <Aside/>
        <AgGrid v-if="detail === 'Manage' || detail === 'Dashboard'" />
        <Create v-if="detail === 'Create'" />
        <Download v-if="detail === 'Download'" />
        <Support v-if="detail === 'Support'" />
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import Header from "../../components/detail/Header";
    import Aside from "../../components/detail/Aside";
    import Footer from "../../components/detail/Footer";
    import AgGrid from "../../components/detail/AgGrid";
    import Create from "../../components/detail/admin/Create";
    import Download from "../../components/detail/user/Download";
    import Support from "../../components/detail/user/Support";

    export default {
        components: {
            Header,
            Aside,
            Footer,
            AgGrid,
            Create,
            Download,
            Support
        },
        created(){
            this.$EventBus.$on('eventSignOut', () => {
                this.setSignOut()
            });
        },
        computed: {
            detail() {
                return this.$route.params.detail;
            }
        },
        methods: {
            ...mapMutations({
                setSignOut : 'setSignOut'
            })
        }
    };
</script>
