<template>
    <div>
        <aside>
            aside

            <div v-if="detail === 'create'">> a-create</div>
            <div v-if="detail === 'download'">> a-download</div>
            <div v-if="detail === 'support'">> a-support</div>
        </aside>
    </div>
</template>

<script>
    export default {
        name: 'aside',
        layout : 'detail',
        components: {

        },
        computed: {
            detail() {
                return this.$route.params.detail;
            }
        }
    }
</script>

<style>

</style>

