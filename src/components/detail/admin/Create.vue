<template>
    <div class="content">
        <Confirm v-slot="slotProps">
        <ValidationObserver ref="form" v-slot="{ handleSubmit , reset , invalid}">
        <form class="createAccountForm" @submit.prevent="handleSubmit(showPopup(slotProps))"  @reset.prevent="reset">
            <div class="category accountInfo">
                <div class="font-weight-bold subtitle">Account Information</div>
                <div class="row">
                    <div class="col item">
                        <div class="form-group row">
                            <label class="col col-form-label"><span class="col-label-text">ID *</span></label>
                            <div class="col col-form-input">
                                <ValidationProvider name="ID" rules="required|alpha_num|max:20" v-slot="{ errors }">
                                <input type="text"
                                       class="form-control"
                                       placeholder="Please Enter ID"
                                       v-model="createInfo.account">
                                    <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                    </div>
                    <div class="col item" style="padding-right: 60px;">
                        <div class="form-group row">
                            <label class="col col-form-label"><span class="col-label-text">Password *</span></label>
                            <div class="col col-form-input">
                                <ValidationProvider name="Password" rules="required|alpha_num|max:20" v-slot="{ errors }">
                                <input type="password"
                                        class="form-control"
                                        placeholder="Please Enter Password"
                                       v-model="createInfo.password">
                                    <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col item">
                        <div class="form-group row">
                            <label class="col col-form-label"><span class="col-label-text">Name *</span></label>
                            <div class="col col-form-input">
                                <ValidationProvider name="Name" rules="required|alpha_num|max:20" v-slot="{ errors }">
                                <input type="text"
                                       class="form-control"
                                       placeholder="Please Enter Name"
                                       v-model="createInfo.sitename">
                                <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                    </div>
                    <div class="col item" style="padding-right: 60px;">
                        <div class="form-group row">
                            <label class="col col-form-label"><span class="col-label-text">Email Address *</span></label>
                            <div class="col col-form-input">
                                <ValidationProvider name="Email Address" rules="required|email|max:20" v-slot="{ errors }">
                                <input type="text"
                                       class="form-control"
                                       placeholder="Please Enter Email Address"
                                       v-model="createInfo.siteEMail">
                                    <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col item">
                        <div class="form-group row">
                            <label class="col col-form-label"><span class="col-label-text">Organization *</span></label>
                            <div class="col col-form-input">
                                <ValidationProvider name="Organization" rules="required|alpha_num|max:20" v-slot="{ errors }">
                                <input type="text"
                                       class="form-control"
                                       placeholder="Please Enter Organization"
                                       v-model="createInfo.organization">
                                <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                    </div>
                    <div class="col item" style="padding-right: 60px;">
                        <div class="form-group row">
                            <label class="col col-form-label"><span class="col-label-text">Organization Type *</span></label>
                            <div class="col col-form-input">
                                <ValidationProvider name="Organization Type" rules="required|alpha_num|max:20" v-slot="{ errors }">
                                <input type="text"
                                       class="form-control"
                                       placeholder="Please Enter Organization Type"
                                       v-model="createInfo.organizationType">
                                    <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="category userInfo">
                <div class="font-weight-bold subtitle">User Information</div>
                <div class="row">
                    <div class="col item">
                        <div class="form-group row">
                            <label class="col col-form-label"><span class="col-label-text">Country *</span></label>
                            <div class="col col-form-input">
                                <ValidationProvider name="Country" rules="required|alpha_num|max:20" v-slot="{ errors }">
                                <input type="text"
                                       class="form-control"
                                       placeholder="Please Enter Country"
                                       v-model="createInfo.country">
                                <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                    </div>
                    <div class="col item" style="padding-right: 60px;">
                        <div class="form-group row">
                            <label class="col col-form-label"><span class="col-label-text">City/Province *</span></label>
                            <div class="col col-form-input">
                                <ValidationProvider name="City/Province" rules="required|alpha_num|max:20" v-slot="{ errors }">
                                <input type="text"
                                       class="form-control"
                                       placeholder="Please Enter City/Province"
                                       v-model="createInfo.city">
                                    <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col item">
                        <div class="form-group row">
                            <label class="col col-form-label"><span class="col-label-text">Number Of license *</span></label>
                            <div class="col col-form-input">
                                <ValidationProvider name="Number Of license" rules="required|numeric|max:20" v-slot="{ errors }">
                                <input type="text"
                                       class="form-control"
                                       placeholder="Please Enter Number Of license"
                                       v-model="createInfo.numberOfLicenses">
                                <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                    </div>
                    <div class="col item" style="padding-right: 60px;">
                        <div class="form-group row">
                            <label class="col col-form-label"><span class="col-label-text">Expiration date *</span></label>
                            <div class="col col-form-input">
                                <ValidationProvider name="Expiration date" rules="required|max:20" v-slot="{ errors }">
                                <input type="text"
                                       class="form-control"
                                       placeholder="Please Enter Expiration date"
                                       v-model="createInfo.expdate">
                                    <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col item">
                        <div class="form-group row">
                            <label class="col col-form-label"><span class="col-label-text">Product *</span></label>
                            <div class="col col-form-input">
                                <select v-model="createInfo.productType" class="custom-select">
                                    <option value='1'>English and Math</option>
                                    <option value='2'>Swahili and Math</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col item"></div>
                </div>
            </div>
            <div class="category internalInfo">
                <div class="font-weight-bold subtitle">Internal</div>
                <div class="row">
                    <div class="col item">
                        <div class="form-group row">
                            <label class="col col-form-label"><span class="col-label-text">Staff Name </span></label>
                            <div class="col col-form-input">
                                <ValidationProvider name="Staff Name" rules="required|alpha_num|max:20" v-slot="{ errors }">
                                <input type="text"
                                       class="form-control"
                                       placeholder="Please Enter Staff Name"
                                       v-model="createInfo.contactName">
                                <span>{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                    </div>
                    <div class="col item"></div>
                </div>
            </div>
            <div class="buttonArea mx-auto">
                <button @click="createInfoReset" type="reset" class="btn btn-lg btn-secondary" style="margin-right: 20px;">Reset</button>
                    <button class="btn btn-lg btn-primary" :disabled="invalid" >Create Account</button>
            </div>
        </form>
        </ValidationObserver>
        </Confirm>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import Confirm from "../../popup/Confirm";

    export default {
        name: 'create',
        components: {
           Confirm
        },
        data (){
            return{
                createInfo : {
                    account: '',
                    password: '',
                    sitename: '',
                    siteEMail: '',
                    organization: '',
                    organizationType: '',
                    country: '',
                    city: '',
                    numberOfLicenses: '',
                    productType: 1,
                    expdate: '2021.12.31',
                    contactName : ''
                }
            }
        },
        created(){
            this.$EventBus.$on('eventConfirm', () => {
                this.fetchCreate();
            });
        },
        methods : {
            ...mapActions({
                postCreate : 'postCreate'
            }),
            showPopup (slotProps){
                slotProps.setCreateList({
                    id : this.createInfo.account,
                    pw : this.createInfo.password,
                    product : this.createInfo.productType,
                    licenses : this.createInfo.numberOfLicenses,
                    date : this.createInfo.expdate
                });
                slotProps.toggleConfirm();
            },
            createInfoReset (){
                Object.assign(this.$data.createInfo, this.$options.data().createInfo);
            },
            fetchCreate(){
                this.postCreate(this.createInfo)
                    .then((result) => {
                        console.log(`postCreateResult : ${result}`);
                        window.location.reload()
                    })
            }
        }
    }
</script>

<style>
    .createAccountForm {
        max-width: 1530px;
        margin: 0 auto;
    }
    .createAccountForm .category {
        min-width: 960px;
        padding: 30px 0;
    }
    .createAccountForm .category .subtitle{
        margin-bottom: 30px;
    }
    .createAccountForm .category .item {
        margin: 0 auto 30px;
        height: 60px;
        min-width: 680px;
        max-width: 830px;
    }
    .createAccountForm .category .item:first-child {
    }
    .createAccountForm .category .item .col-form-label {
        width: 250px;
        min-width: 250px;
        max-width: 250px;
        padding: 18px 0;
    }
    .createAccountForm .category .item .col-form-label .col-label-text {
        font-size: 24px;
        line-height: 24px;
    }
    .createAccountForm .category .item .col-form-input {
        width: 100%;
        min-width: 390px;
        max-width: 390px;
        padding-left: 0;
        padding-right: 0;
    }
    .createAccountForm .category .item .col-form-input span {
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.11;
        letter-spacing: normal;
        text-align: left;
        color:  #f56049;
    }
    .createAccountForm .buttonArea {
        text-align: center;
        margin-bottom: 60px;
    }

    .createAccountForm .buttonArea .btn.btn-lg {
        font-size: 24px;
        width: 300px;
        height: 60px;
    }
</style>

