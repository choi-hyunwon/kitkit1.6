<template>
    <div>
        <slot :toggleAlert="toggleAlert"></slot>
        <b-modal centered
                 hide-footer
                 size="lg"
                 modal-class="individualData"
                 v-model="showAlert">
            <template #modal-header="{ close }">
                <h5 class="modal-title">Individual Log Data</h5>
                <button type="button" class="close" @click="close()"><span aria-hidden="true">×</span></button>
            </template>
            <template #default>
                <h2 class="subtitle">
                    <font-awesome-icon class="icon" :icon="['fas', 'circle']"/>
                    <div class="text">About individual log data</div>
                </h2>
                <p class="detail">
                    You can see the detailed log of when and for how long the selected user
                    played Kitkit School each time, literacy and math game levels reached,
                    and scores on each section of the pre- or post-test.
                </p>

                <h2 class="subtitle" style="margin-top: 40px">
                    <font-awesome-icon class="icon" :icon="['fas', 'circle']"/>
                    <div class="text">Is data analysis important for you?</div>
                </h2>
                <p class="detail">
                    Kitkit School has many data points that enable data-based monitoring
                    and provide insight into the users progress. If user data collection is an
                    important factor in your project or research, contact our team at
                    <a class="email" href="mailto:kitkitSupport@enuma.com">kitkitSupport@enuma.com</a>.
                </p>

            </template>
        </b-modal>
    </div>
</template>

<script>
    import {BModal, VBModal} from 'bootstrap-vue'

    export default {
        name: 'Alert',
        components: {
            'b-modal': BModal
        },
        directives: {
            'b-modal': VBModal
        },
        data: function() {
            return {
                showAlert: false
            }
        },
        mounted() {
            console.log('alert')
        },
        methods: {
            toggleAlert: function() {
                this.showAlert = !this.showAlert;
            }
        }
    }
</script>

<style>
    .individualData .modal-header .close {
        padding: 0 10px;
    }

    .individualData .subtitle {
        font-family: Lato;
        position: relative;
        font-size: 24px;
        font-weight: bold;
        line-height: 29px;
        color: #f6921e;
    }

    .individualData .subtitle .icon {
        font-size: 10px;
        position: absolute;
        top: 9.5px;
        left: 0;
    }

    .individualData .subtitle .text {
        margin-left: 20px;
    }

    .individualData .detail {
        font-family: Lato;
        margin-top: 20px;
        font-size: 24px;
        font-weight: bold;
        line-height: 34px;
        color: #333333;
    }


</style>
