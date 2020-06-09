<template>
    <div class="content">
        .content
        <div class="grid">
            .AgGrid
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AgGrid',
        layout : 'detail',
        components: {

        }
    }
</script>

<style>
    .content {
        /*border: 1px solid lightseagreen;*/
        position: absolute;
        top: 80px;
        left: 180px;
        /*height: calc(100% - 160px);*/
        width: calc(100% - 180px);
        min-width: 1020px;
        overflow-y: auto;
    }
    .grid {
        height: 1000px;
        /*border: 1px solid lightsalmon;*/
        /*border-bottom: 10px solid rebeccapurple;*/
    }

</style>

