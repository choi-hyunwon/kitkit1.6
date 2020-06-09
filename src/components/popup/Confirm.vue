<template>
    <div>
        <b-button @click="toggleConfirm">Open Alert</b-button>

        <b-modal centered
                 modal-class="accountCheck"
                 footer-class="kitkit-modal-footer"
                 v-model="showConfirm">
            <template v-slot:modal-header="{ close }">
                <!-- Emulate built in modal header close button action -->
                <h5 class="modal-title">Modal Title</h5>
                <button type="button" class="close" @click="close()">
                    <span aria-hidden="true">×</span>
                </button>
            </template>

            <template v-slot:default>
                <p class="notice text-center">
                    Please check one more time before<br/>
                    sending the confirmation email to the user.
                </p>
                <div class="info">
                    <div class="accountId row">
                        <div class="col infoType">ID :</div>
                        <div class="col infoValue">John park</div>
                    </div>
                    <div class="accountPwd row">
                        <div class="col infoType">PW :</div>
                        <div class="col infoValue">Johnpark123</div>
                    </div>
                    <div class="accountProduct row">
                        <div class="col infoType">Product :</div>
                        <div class="col infoValue">English and Math</div>
                    </div>
                    <div class="accountLicense row">
                        <div class="col infoType">Number of Licenses :</div>
                        <div class="col infoValue">100</div>
                    </div>
                    <div class="accountExpDate row">
                        <div class="col infoType">Expiration Date :</div>
                        <div class="col infoValue">2021.12.31</div>
                    </div>
                </div>
            </template>

            <template v-slot:modal-footer="{ ok, cancel }">
                <b-button size="sm" variant="secondary" @click="cancel()">
                    Cancel
                </b-button>
                <b-button size="sm" variant="primary" @click="ok()">
                    Ok
                </b-button>
            </template>
        </b-modal>
    </div>
</template>


<script>
    import {BModal, VBModal, BButton} from 'bootstrap-vue'

    export default {
        name: 'Confirm',
        layout : 'popup',
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
                showConfirm: false
            }
        },
        methods: {
            toggleConfirm: function() {
                this.showConfirm = !this.showConfirm;
            }
        }
    }
</script>

<style>
    .accountCheck .notice {
        font-size: 24px;
        line-height: 32px;
        color: #333;
    }
    .accountCheck .info {
        margin-top: 20px;
    }
    .accountCheck .info .row {
        margin-top: 15px;
    }
    .accountCheck .info .infoType {
        text-align: right;
        font-size: 20px;
        line-height: 24px;
        color: #333;
    }
    .accountCheck .info .infoValue {
        font-size: 24px;
        line-height: 24px;
        color: #0c6290;
    }
</style>
