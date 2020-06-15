<template>
    <div class="content">

        <!-- Form -->
        <form class="createAccountForm">

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
                                    <input type="text" class="form-control is-invalid" title="ID" placeholder="Please Enter ID" required>
                                    <div class="invalid-feedback">
                                        This is required. Please enter ID.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col item" style="padding-right: 60px;">
                            <div class="form-group row">
                                <label class="col col-form-label">
                                    <span class="col-label-text">Password *</span>
                                </label>
                                <div class="col col-form-input">
                                    <input type="text" class="form-control" title="Password" placeholder="Please Enter Password" required>
                                    <div class="invalid-feedback">
                                        This is required. Please enter Password.
                                    </div>
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
                                    <input type="text" class="form-control" title="Name" placeholder="Please Enter Name" required>
                                    <div class="invalid-feedback">
                                        This is required. Please enter Name.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col item" style="padding-right: 60px;">
                            <div class="form-group row">
                                <label class="col col-form-label">
                                    <span class="col-label-text">Email Address *</span>
                                </label>
                                <div class="col col-form-input">
                                    <input type="text" class="form-control" title="Email Address" placeholder="Please Enter Email Address" required>
                                    <div class="invalid-feedback">
                                        This is required. Please enter Email Address.
                                    </div>
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
                                    <input type="text" class="form-control" title="Organization" placeholder="Please Enter Organization" required>
                                    <div class="invalid-feedback">
                                        This is required. Please enter Organization.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col item" style="padding-right: 60px;">
                            <div class="form-group row">
                                <label class="col col-form-label">
                                    <span class="col-label-text">Organization Type *</span>
                                </label>
                                <div class="col col-form-input">
                                    <input type="text" class="form-control" title="Organization Type" placeholder="Please Enter Organization Type" required>
                                    <div class="invalid-feedback">
                                        This is required. Please enter Organization Type.
                                    </div>
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
                                    <input type="text" class="form-control is-invalid" title="Country" placeholder="Please Enter Country" required>
                                    <div class="invalid-feedback">
                                        This is required. Please enter Country.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col item" style="padding-right: 60px;">
                            <div class="form-group row">
                                <label class="col col-form-label">
                                    <span class="col-label-text">City/Province *</span>
                                </label>
                                <div class="col col-form-input">
                                    <input type="text" class="form-control" title="City/Province" placeholder="Please Enter City/Province" required>
                                    <div class="invalid-feedback">
                                        This is required. Please enter City/Province.
                                    </div>
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
                                    <input type="text" class="form-control" title="Number Of license" placeholder="Please Enter Number Of license" required>
                                    <div class="invalid-feedback">
                                        This is required. Please enter Number Of license.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col item" style="padding-right: 60px;">
                            <div class="form-group row">
                                <label class="col col-form-label">
                                    <span class="col-label-text">Expiration date *</span>
                                </label>
                                <div class="col col-form-input">
                                    <input type="text" class="form-control" title="Expiration date" placeholder="Please Enter Expiration date" required>
                                    <div class="invalid-feedback">
                                        This is required. Please enter Expiration date.
                                    </div>
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
                                    <select class="custom-select form-control" title="Product">
                                        <option value="1" selected>English and Math</option>
                                        <option value="2">Swahili and Math</option>
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
                                    <span class="col-label-text">Staff Name</span>
                                </label>
                                <div class="col col-form-input">
                                    <input type="text" class="form-control" title="Staff Name" placeholder="Please Enter Staff Name">
                                </div>
                            </div>
                        </div>
                        <div class="col item"></div>
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
    import Confirm from "../../popup/Confirm";

    export default {
        name: 'create',
        layout : 'detail',
        components: {
            // Confirm
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

