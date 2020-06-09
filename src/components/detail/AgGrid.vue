<template>
    <div class="content">
        .content
        <div class="grid">
            .AgGrid

            <div>

                <b-button @click="toggleAlert">Open Alert</b-button>

                <b-modal centered
                         hide-footer
                         v-model="showAlert">
                    <template v-slot:modal-header="{ close }">
                        <!-- Emulate built in modal header close button action -->
                        <h5>Modal Title</h5>
                        <button type="button" class="close" @click="close()">
                            <span aria-hidden="true">×</span>
                        </button>
                    </template>

                    <template v-slot:default="{ ok, cancel }">
                        <p>Modal Body with button</p>
                        <b-button size="sm" variant="secondary" @click="cancel()">
                            Cancel
                        </b-button>
                        <b-button size="sm" variant="primary" @click="ok()">
                            Ok
                        </b-button>
                    </template>
                </b-modal>



            </div>

        </div>
    </div>
</template>

<script>
    import {BModal, VBModal, BButton} from 'bootstrap-vue'

    export default {
        name: 'AgGrid',
        layout : 'detail',
        components: {
            'b-modal': BModal,
            'b-button': BButton
        },
        directives: {
            // Note that Vue automatically prefixes directive names with `v-`
            'b-modal': VBModal
        },
        data: function() {
            return {
                showAlert: false,
                showConfirm: false
            }
        },
        methods: {
            showModal: function() {
                this.$refs['alert-modal'].show();
            },
            toggleAlert: function() {
                this.showAlert = !this.showAlert;
                console.log(this.showAlert)
            },
            toggleConfirm: function() {
                console.log(this.showConfirm)
                this.showConfirm = !this.showConfirm;
            }
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

