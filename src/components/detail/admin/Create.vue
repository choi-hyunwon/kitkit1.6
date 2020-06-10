<template>
    <div class="content">
        <form class="createAccountForm">
            <div class="category accountInfo">
                <div class="font-weight-bold subtitle">Account Information</div>
                <div class="row">
                    <div class="col item">
                        <div class="form-group row">
                            <label class="col col-form-label">
                                <span class="col-label-text">ID</span>
                            </label>
                            <div class="col col-form-input">
                                <input type="text" class="form-control" title="example" placeholder="Please Enter ID">
                            </div>
                        </div>
                    </div>
                    <div class="col item" style="padding-right: 60px;">
                        <div class="form-group row">
                            <label class="col col-form-label">
                                <span class="col-label-text">Password</span>
                            </label>
                            <div class="col col-form-input">
                                <input type="text" class="form-control" title="example" placeholder="Please Enter Password">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col item">
                        <div class="form-group row">
                            <label class="col col-form-label">
                                <span class="col-label-text">Name</span>
                            </label>
                            <div class="col col-form-input">
                                <input type="text" class="form-control" title="example" placeholder="Please Enter Name">
                            </div>
                        </div>
                    </div>
                    <div class="col item" style="padding-right: 60px;">
                        <div class="form-group row">
                            <label class="col col-form-label">
                                <span class="col-label-text">Email Address</span>
                            </label>
                            <div class="col col-form-input">
                                <input type="text" class="form-control" title="example" placeholder="Please Enter Email Address">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col item">
                        <div class="form-group row">
                            <label class="col col-form-label">
                                <span class="col-label-text">Organization</span>
                            </label>
                            <div class="col col-form-input">
                                <input type="text" class="form-control" title="example" placeholder="Please Enter Organization">
                            </div>
                        </div>
                    </div>
                    <div class="col item" style="padding-right: 60px;">
                        <div class="form-group row">
                            <label class="col col-form-label">
                                <span class="col-label-text">Organization Type</span>
                            </label>
                            <div class="col col-form-input">
                                <input type="text" class="form-control" title="example" placeholder="Please Enter Organization Type">
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
                            <label class="col col-form-label">
                                <span class="col-label-text">Country</span>
                            </label>
                            <div class="col col-form-input">
                                <input type="text" class="form-control" title="example" placeholder="Please Enter Country">
                            </div>
                        </div>
                    </div>
                    <div class="col item" style="padding-right: 60px;">
                        <div class="form-group row">
                            <label class="col col-form-label">
                                <span class="col-label-text">City/Province</span>
                            </label>
                            <div class="col col-form-input">
                                <input type="text" class="form-control" title="example" placeholder="Please Enter City/Province">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col item">
                        <div class="form-group row">
                            <label class="col col-form-label">
                                <span class="col-label-text">Number Of license</span>
                            </label>
                            <div class="col col-form-input">
                                <input type="text" class="form-control" title="example" placeholder="Please Enter Number Of license">
                            </div>
                        </div>
                    </div>


                    <div class="col item" style="padding-right: 60px;">
                        <div class="form-group row">
                            <label class="col col-form-label">
                                <span class="col-label-text">Expiration date</span>
                            </label>
                            <div class="col col-form-input form-control">

                                <b-input-group class="mb-3">
                                    <b-form-input
                                            id="example-input"
                                            v-model="value"
                                            type="text"
                                            placeholder="YYYY-MM-DD"
                                            autocomplete="off"
                                    />
                                    <b-input-group-append>
                                        <b-form-datepicker
                                                v-model="value"
                                                button-only
                                                right
                                                locale="en-US"
                                                aria-controls="example-input"
                                                @context="onContext"
                                        />
                                    </b-input-group-append>
                                </b-input-group>

                            </div>
                        </div>
                    </div>


                </div>
                <div class="row">
                    <div class="col item">
                        <div class="form-group row">
                            <label class="col col-form-label">
                                <span class="col-label-text">Product</span>
                            </label>
                            <div class="col col-form-input">
                                <select class="custom-select" title="Text">
                                    <option selected>Normal</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="category internalInfo">
                <div class="font-weight-bold subtitle">Internal</div>
                <div class="row">
                    <div class="col item">
                        <div class="form-group row">
                            <label class="col col-form-label">
                                <span class="col-label-text">Staff Name</span>
                            </label>
                            <div class="col col-form-input">
                                <input type="text" class="form-control" title="example" placeholder="Please Enter Staff Name">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="buttonArea mx-auto">
                <div class="btn btn-lg btn-secondary" style="margin-right: 20px;">Reset</div>
                <div class="btn btn-lg btn-primary">Create Account</div>
            </div>
        </form>

<!--        <Confirm/>-->
    </div>
</template>

<script>
    import { BFormDatepicker, BInputGroup, BInputGroupAppend, BFormInput } from "bootstrap-vue";
    import Confirm from "../../popup/Confirm";

    export default {
        name: 'create',
        layout : 'detail',
        components: {
            // 'b-input-group-text': BInputGroupText,
            'b-form-datepicker': BFormDatepicker,
            'b-input-group': BInputGroup,
            'b-input-group-append': BInputGroupAppend,
            'b-form-input': BFormInput
            // Confirm
        },
        data() {
            return {
                value: '',
                formatted: '',
                selected: ''
            }
        },
        methods: {
            onContext(ctx) {
                // The date formatted in the locale, or the `label-no-date-selected` string
                this.formatted = ctx.selectedFormatted
                // The following will be an empty string until a valid date is entered
                this.selected = ctx.selectedYMD
            }
        }
    }
</script>

<style>
    .createAccountForm {

    }
    .createAccountForm .category {
        min-width: 960px;
        padding: 30px 0;
    }
    /*.createAccountForm .category .category-content{*/
    /*    padding: 0 60px;*/
    /*}*/
    .createAccountForm .category .subtitle{
        margin-bottom: 30px;
    }
    .createAccountForm .category .item {
        padding: 0 60px 0 130px;
        margin-bottom: 30px;
        height: 60px;
        width: 830px;
        min-width: 830px;
        max-width: 830px;
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

