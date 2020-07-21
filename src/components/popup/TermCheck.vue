<template>
    <div>
        <slot :toggleAlert="toggleTermCheck"></slot>
        <b-modal centered
                 size="lg"
                 modal-class="termsCollection"
                 footer-class="kitkit-modal-footer"
                 v-model="showTermCheck"
                 no-close-on-backdrop>
            <template #modal-header="">
                <h2 class="modal-title">Terms on Data Collection</h2>
            </template>
            <template #default>
                <h3 class="subtitle">Terms on Data Collection</h3>

                <div class="terms-content">
                    <p class="detail">Play data and student information, such as student name, entered into the Kitkit School app will be collected by Enuma. Please check your local laws regarding data privacy of student information. By entering student information, you are confirming that either:</p>
                    <div class="indentation">
                        <div class="index">a)</div>
                        <div class="text">consent to collect personally identifiable  student information is not required, or</div>
                    </div>
                    <div class="indentation">
                        <div class="index">b)</div>
                        <div class="text">you have obtained the necessary consents from legal guardians of the students.</div>
                    </div>
                    <p class="detail">
                        If you do not want us to collect personally identifiable information on your students, please use non-personally identifiable usernames for student profiles. You can also take photos for student profiles which provides a user interface tool for ease of usability. We do not collect such photos; they remain solely on the devices locally.
                    </p>
                    <p class="detail">
                        We only collect information that is necessary for our services. We do not sell or rent information, nor do we create profiles on students for advertising. All information collected from the app is for our legitimate purposes to provide you and your students a better user and learning experience. We may also use your email address to communicate with you about our services and respond to you when you contact us.
                    </p>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" v-model="termCheck" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck1">
                        I understand and accept the above and Enuma’s
                        <a class="link" target="_blank" href="https://enuma.com/tos/">Terms of Service</a>
                        and
                        <a class="link" target="_blank" href="https://enuma.com/policy/">Privacy Policy</a>
                    </label>
                </div>
            </template>

            <template  #modal-footer="">
                <b-button size="sm" variant="primary" @click="eventTermCheck">OK</b-button>
            </template>

        </b-modal>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {BModal, VBModal, BButton} from 'bootstrap-vue'

    export default {
        name: 'TermCheck',
        components: {
            'b-modal': BModal,
            'b-button': BButton
        },
        directives: {
            'b-modal': VBModal
        },
        data: function() {
            return {
                showTermCheck: false,
                termCheck : false
            }
        },
        computed: {
            ...mapGetters({
                getAgreement : 'getAgreement'
            })
        },
        mounted () {
          this.showTermCheck = this.getAgreement;
        },
        methods: {
            toggleTermCheck: function() {
                this.showTermCheck = !this.showTermCheck;
            },
            eventTermCheck :function () {
                if(!this.termCheck){
                    alert('Kitkit School can be downloaded after agreeing to the terms on data collection.');
                }else{
                    this.showTermCheck = false;
                    this.$EventBus.$emit('eventTermCheck')
                }
            }
        }
    }
</script>

<style>
    .termsCollection .modal-body {
        padding-top: 36px;
        padding-bottom: 40px;
    }

    .termsCollection .modal-header .modal-title {
        font-family: 'Lato-Regular';
        font-size: 24px;
        font-weight: normal;
        line-height: 29px;
    }

    .termsCollection .modal-header .close {
        padding: 0 10px;
    }

    .termsCollection .subtitle {
        font-family: 'Lato-Black';
        font-size: 32px;
        font-weight: normal;
        line-height: 29px;
        color: #333;
    }

    .termsCollection .terms-content {
        margin: 19px 0 20px;
        padding: 0 30px 30px 20px;
        border: 1px solid #c2c2c2;
        background-color: #f2f2f2;
        height: 392px;
        overflow-y: scroll;
        color: #333;
        font-size: 24px;
        line-height: 32px;
        font-family: 'Lato-Bold';
    }

    .termsCollection .terms-content .detail {
        padding-top: 30px;
    }

    .termsCollection .terms-content .detail:first-child {
        padding-bottom: 10px;
    }

    .termsCollection .terms-content .indentation {
        position: relative;
        margin-left: 20px;
        padding-top: 10px;
    }

    .termsCollection .terms-content .indentation .index {
        position: absolute;
        top: 10px;
        left: 0;
    }

    .termsCollection .terms-content .indentation .text {
        padding-left: 25px;
    }

    .termsCollection .modal-body .custom-control.custom-checkbox {
        padding-left: 0;
    }

    .termsCollection .modal-body .custom-control.custom-checkbox:hover, .termsCollection .modal-body .custom-control.custom-checkbox .custom-control-label:hover {
        cursor: pointer;
    }

    .termsCollection .modal-body .custom-control.custom-checkbox .custom-control-label {
        padding-left: 35px;
        font-family: 'Lato-Regular';
        font-size: 24px;
        line-height: 36px;
        font-weight: normal;
        color: #333;
    }

    .termsCollection .modal-body .custom-control.custom-checkbox .custom-control-label::before {
        left: 0;
        top: 4px;
        border: 2px solid #b3b3b3;
    }

    .termsCollection .modal-body .custom-control.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
        border-color: #d2931d;
    }

    .termsCollection .modal-body .custom-control.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
        background-size: 21px 21px;
        top: 9px;
        left: 5px;
    }

    .termsCollection .modal-body .custom-control.custom-checkbox .custom-control-label .link {
        font-family: 'Lato-Bold';
        color: #0c6290;
        text-decoration: underline;
    }

    .termsCollection footer.modal-footer.kitkit-modal-footer {
        padding-bottom: 40px;
    }

    .termsCollection footer.modal-footer.kitkit-modal-footer .btn {
        font-family: 'Lato-Regular';
        font-weight: bold;
        width: 380px;
    }
</style>
