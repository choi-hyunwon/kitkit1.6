<template>
    <div>
        <slot :toggleConfirm="toggleConfirm" :setCreateList="setCreateList"></slot>
        <b-modal centered
                 modal-class="accountCheck"
                 footer-class="kitkit-modal-footer"
                 v-model="showConfirm">
            <template #modal-header="{ close }">
                <h5 class="modal-title">Create Account</h5>
                <button type="button" class="close" @click="close()"><span aria-hidden="true">×</span></button>
            </template>
            <template #default>
                <p class="notice text-center">Please check one more time before<br/>sending the confirmation email to the user.</p>
                <div class="info">
                    <div class="accountId row">
                        <div class="col infoType">ID :</div>
                        <div class="col infoValue">{{createList.id}}</div>
                    </div>
                    <div class="accountPwd row">
                        <div class="col infoType">PW :</div>
                        <div class="col infoValue">{{createList.pw}}</div>
                    </div>
                    <div class="accountProduct row">
                        <div class="col infoType">Product :</div>
                        <div class="col infoValue">{{createList.product === 1 ? 'English and Math' : 'Swahili and Math' }}</div>
                    </div>
                    <div class="accountLicense row">
                        <div class="col infoType">Number of Licenses :</div>
                        <div class="col infoValue">{{createList.licenses}}</div>
                    </div>
                    <div class="accountExpDate row">
                        <div class="col infoType">Expiration Date :</div>
                        <div class="col infoValue">{{createList.date}}</div>
                    </div>
                </div>
            </template>
            <template #modal-footer="{ ok, cancel }">
                <b-button size="sm" variant="secondary" @click="cancel()">Cancel</b-button>
                <b-button size="sm" variant="primary" @click="eventConfirm">Ok</b-button>
            </template>
        </b-modal>
    </div>
</template>

<script>
    import {BModal, VBModal, BButton} from 'bootstrap-vue'

    export default {
        name: 'Confirm',
        components: {
            'b-modal': BModal,
            'b-button': BButton
        },
        directives: {
            'b-modal': VBModal
        },
        data: function() {
            return {
                showConfirm: false,
                createList : {}
            }
        },
        methods: {
            toggleConfirm: function() {
                this.showConfirm = !this.showConfirm;
            },
            setCreateList: function(list) {
                this.createList = list;
            },
            eventConfirm: function() {
                this.showConfirm = false
                this.$EventBus.$emit('eventConfirm')

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
        font-weight: 500;
    }
    .accountCheck .info .infoValue {
        font-size: 24px;
        line-height: 24px;
        color: #0c6290;
        font-family: 'Lato';
        font-weight: bold;
        letter-spacing: -0.9px;
    }
</style>
