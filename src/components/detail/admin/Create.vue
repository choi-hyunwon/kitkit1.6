<template>
    <div class="content">
        <Confirm v-slot="slotProps">
        <ValidationObserver ref="form" v-slot="{ handleSubmit , reset , invalid}">
        <!-- Form -->
        <form class="createAccountForm" @submit.prevent="handleSubmit(showPopup(slotProps))"  @reset.prevent="reset">
            <!-- Account Information -->
            <div class="category accountInfo">
                <div class="font-weight-bold subtitle">Account Information</div>
                <div class="list">
                    <div class="row">
                        <div class="col item">
                            <div class="form-group row">
                                <label class="col col-form-label">
                                    <span class="col-label-text">ID *</span>
                                </label>
                                <div class="col col-form-input">
                                    <ValidationProvider name="ID" rules="required|alpha_num|max:20" v-slot="{ errors }">
                                        <input type="text"
                                               class="form-control"
                                               :class="{'is-invalid' : errors[0]}"
                                               placeholder="Please Enter ID"
                                               title="ID"
                                               v-model="createInfo.account"/>
                                        <div class="invalid-feedback">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                </div>
                            </div>
                        </div>
                        <div class="col item" style="padding-right: 60px;">
                            <div class="form-group row">
                                <label class="col col-form-label">
                                    <span class="col-label-text">Password *</span>
                                </label>
                                <div class="col col-form-input">
                                    <ValidationProvider name="Password" rules="required|max:20" v-slot="{ errors }">
                                        <input type="password"
                                               class="form-control"
                                               :class="{'is-invalid' : errors[0]}"
                                               placeholder="Please Enter Password"
                                               title="Password"
                                               v-model="createInfo.password"/>
                                        <div class="invalid-feedback">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col item">
                            <div class="form-group row">
                                <label class="col col-form-label">
                                    <span class="col-label-text">Name *</span>
                                </label>
                                <div class="col col-form-input">
                                    <ValidationProvider name="Name" rules="required|alpha_num|max:20" v-slot="{ errors }">
                                        <input type="text"
                                               class="form-control"
                                               :class="{'is-invalid' : errors[0]}"
                                               placeholder="Please Enter Name"
                                               title="Enter Name"
                                               v-model="createInfo.sitename"/>
                                        <div class="invalid-feedback">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                </div>
                            </div>
                        </div>
                        <div class="col item" style="padding-right: 60px;">
                            <div class="form-group row">
                                <label class="col col-form-label">
                                    <span class="col-label-text">Email Address *</span>
                                </label>
                                <div class="col col-form-input">
                                    <ValidationProvider name="Email Address" rules="required|email|max:20" v-slot="{ errors }">
                                        <input type="text"
                                               class="form-control"
                                               :class="{'is-invalid' : errors[0]}"
                                               placeholder="Please Enter Email Address"
                                               title="Email Address"
                                               v-model="createInfo.siteEMail"/>
                                        <div class="invalid-feedback">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col item">
                            <div class="form-group row">
                                <label class="col col-form-label">
                                    <span class="col-label-text">Organization *</span>
                                </label>
                                <div class="col col-form-input">
                                    <ValidationProvider name="Organization" rules="required|alpha_num|max:20" v-slot="{ errors }">
                                        <input type="text"
                                               class="form-control"
                                               :class="{'is-invalid' : errors[0]}"
                                               placeholder="Please Enter Organization"
                                               title="Organization"
                                               v-model="createInfo.organization"/>
                                        <div class="invalid-feedback">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                </div>
                            </div>
                        </div>
                        <div class="col item" style="padding-right: 60px;">
                            <div class="form-group row">
                                <label class="col col-form-label">
                                    <span class="col-label-text">Organization Type *</span>
                                </label>
                                <div class="col col-form-input">
                                    <ValidationProvider name="Organization Type" rules="required|alpha_num|max:20" v-slot="{ errors }">
                                        <input type="text"
                                               class="form-control"
                                               :class="{'is-invalid' : errors[0]}"
                                               placeholder="Please Enter Organization Type"
                                               title="Organization Type"
                                               v-model="createInfo.organizationType"/>
                                        <div class="invalid-feedback">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- User Information -->
            <div class="category userInfo">
                <div class="font-weight-bold subtitle">User Information</div>
                <div class="list">
                    <div class="row">
                        <div class="col item">
                            <div class="form-group row">
                                <label class="col col-form-label">
                                    <span class="col-label-text">Country *</span>
                                </label>
                                <div class="col col-form-input">
                                    <ValidationProvider name="Country" rules="required|alpha_num|max:20" v-slot="{ errors }">
                                        <input type="text"
                                               class="form-control"
                                               :class="{'is-invalid' : errors[0]}"
                                               placeholder="Please Enter Country"
                                               title="Country"
                                               v-model="createInfo.country"/>
                                        <div class="invalid-feedback">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                </div>
                            </div>
                        </div>
                        <div class="col item" style="padding-right: 60px;">
                            <div class="form-group row">
                                <label class="col col-form-label">
                                    <span class="col-label-text">City/Province *</span>
                                </label>
                                <div class="col col-form-input">
                                    <ValidationProvider name="City/Province" rules="required|alpha_num|max:20" v-slot="{ errors }">
                                        <input type="text"
                                               class="form-control"
                                               :class="{'is-invalid' : errors[0]}"
                                               placeholder="Please Enter City/Province"
                                               title="City/Province"
                                               v-model="createInfo.city"/>
                                        <div class="invalid-feedback">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col item">
                            <div class="form-group row">
                                <label class="col col-form-label">
                                    <span class="col-label-text">Number Of license *</span>
                                </label>
                                <div class="col col-form-input">
                                    <ValidationProvider name="Number Of license" rules="required|numeric|max:20" v-slot="{ errors }">
                                        <input type="text"
                                               class="form-control"
                                               :class="{'is-invalid' : errors[0]}"
                                               placeholder="Please Enter Number Of license"
                                               title="Number Of license"
                                               v-model="createInfo.numberOfLicenses"/>
                                        <div class="invalid-feedback">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                </div>
                            </div>
                        </div>
                        <div class="col item" style="padding-right: 60px;">
                            <div class="form-group row">
                                <label class="col col-form-label">
                                    <span class="col-label-text">Expiration date *</span>
                                </label>
                                <div @mouseover="datePickerOver"
                                     @mouseout="datePickerOut"
                                     class="col col-form-input">
<!--                                    <ValidationProvider name="Expiration date" rules="required|max:20" v-slot="{ errors }">-->
<!--                                        <input type="text"-->
<!--                                               class="form-control"-->
<!--                                               :class="{'is-invalid' : errors[0]}"-->
<!--                                               placeholder="Please Enter Expiration date"-->
<!--                                               title="Expiration date"-->
<!--                                               v-model="createInfo.expdate">-->
<!--                                        <div class="invalid-feedback">{{ errors[0] }}</div>-->
<!--                                    </ValidationProvider>-->
                                    <button :class="{'focus' : datePickerHover}"
                                            class="btn btn-outline-light btn-calendar add-on">
                                        <font-awesome-icon :icon="['far', 'calendar-alt']"/>
                                    </button>
                                    <Datepicker
                                            wrapper-class="input-group date"
                                            input-class="form-control"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col item">
                            <div class="form-group row">
                                <label class="col col-form-label">
                                    <span class="col-label-text">Product *</span>
                                </label>
                                <div class="col col-form-input">
                                    <select v-model="createInfo.productType" class="custom-select form-control" title="Product">
                                        <option value='1' selected>English and Math</option>
                                        <option value='2'>Swahili and Math</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col item"></div>
                    </div>
                </div>
            </div>

            <!-- Internal -->
            <div class="category internalInfo">
                <div class="font-weight-bold subtitle">Internal</div>
                <div class="list">
                    <div class="row">
                        <div class="col item">
                            <div class="form-group row">
                                <label class="col col-form-label">
                                    <span class="col-label-text">Staff Name *</span>
                                </label>
                                <div class="col col-form-input">
                                    <ValidationProvider name="Staff Name" rules="required|alpha_num|max:20" v-slot="{ errors }">
                                        <input type="text"
                                               class="form-control"
                                               placeholder="Please Enter Staff Name"
                                               v-model="createInfo.contactName">
                                        <div class="invalid-feedback">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                </div>
                            </div>
                        </div>
                        <div class="col item"></div>
                    </div>
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
    import Datepicker from "vuejs-datepicker";

    export default {
        name: 'create',
        components: {
            Confirm,
            // 'b-form-datepicker': BFormDatepicker
            Datepicker
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
                },
                datePickerHover: false
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
                    .then((data) => {
                        console.log(`postCreateResult : ${data.result}`);
                        if(data.result){
                            this.$router.push({path: '/Manage'});
                        }else{
                            alert(data.errorCode);
                            this.$router.push({path: '/Create'});
                        }

                    })
            },
            datePickerOver() {
                this.datePickerHover = true;
            },
            datePickerOut() {
                this.datePickerHover = false;
            },
            dateFormatter(date) {
                return this.$moment(date).format('YYYY.MM.DD');
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
    .createAccountForm .category .list {
        padding: 0 60px;
    }
    .createAccountForm .category .list .item {
        margin: 0 auto 30px;
        height: 60px;
        min-width: 680px;
        max-width: 830px;
    }
    .createAccountForm .category .list .item:first-child {
    }
    .createAccountForm .category .list .item .col-form-label {
        width: 250px;
        min-width: 250px;
        max-width: 250px;
        padding: 18px 0;
    }
    .createAccountForm .category .list .item .col-form-label .col-label-text {
        font-size: 24px;
        line-height: 24px;
        color: #666;
    }
    .createAccountForm .category .list .item .col-form-input {
        width: 100%;
        min-width: 390px;
        max-width: 390px;
        padding-left: 0;
        padding-right: 0;
    }
    .createAccountForm .category .list .item .col-form-input .btn-calendar.focus {
        background-color: #f2f2f2;
        border-color: #f2f2f2;
    }

    .createAccountForm .buttonArea {
        text-align: center;
        margin-bottom: 60px;
    }

    .createAccountForm .buttonArea .btn.btn-lg {
        font-size: 24px;
        width: 300px;
        height: 60px;
        line-height: 37px;
    }
</style>

