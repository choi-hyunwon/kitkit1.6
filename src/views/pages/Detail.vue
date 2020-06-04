<template>
    <div>
        <Header/>
        <Aside :detail="detail"/>
        <Footer/>
        <Create v-if="detail === 'create'" />
        <Download v-if="detail === 'download'" />
        <Support v-if="detail === 'support'" />
    </div>
</template>

<script>
    import Header from "../../components/detail/Header";
    import Aside from "../../components/detail/Aside";
    import Footer from "../../components/detail/Footer";

    import Create from "../../components/detail/admin/Create";
    import Download from "../../components/detail/user/Download";
    import Support from "../../components/detail/user/Support";

    export default {
        components: {
            Header,
            Aside,
            Footer,
            Create,
            Download,
            Support
        },
        computed: {
            detail() {
                return this.$route.params.detail;
            }
        }
    };
</script>

<style></style>
