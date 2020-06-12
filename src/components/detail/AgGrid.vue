<template>
    <div class="content gridView">
        <div class="any">
            <button class="btn btn-primary btn-lg download">
                <font-awesome-icon class="icon" :icon="['far', 'arrow-alt-to-bottom']"/>
                Download
            </button>
        </div>
        <ag-grid-vue class="ag-theme-alpine ag-custom"
                     :headerHeight="80"
                     :rowStyle="{background: 'white'}"
                     :rowHeight="60"
                     :columnDefs="columnDefs"
                     :defaultColDef="defaultColDef"
                     :rowData="rowData"
                     @grid-ready="onGridReady">
        </ag-grid-vue>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import "ag-grid-community/dist/styles/ag-grid.css";
    import "ag-grid-community/dist/styles/ag-theme-alpine.css";
    import { AgGridVue } from 'ag-grid-vue';

    export default {
        name: 'AgGrid',
        components: {
            AgGridVue
        },
        data() {
            return {
                columnDefs: null,
                rowData: null,
                defaultColDef: null,
            }
        },
        beforeMount() {
            this.columnDefs = [
                {headerName: 'No.', field: 'num', pinned: 'left'},
                {headerName: 'Reg date', field: 'regdate', pinned: 'left'},
                {headerName: 'ID', field: 'account', pinned: 'left'},
                {headerName: 'Name', field: 'sitename'},
                {headerName: 'Email', field: 'siteEMail'},
                {headerName: 'Organization', field: 'organization'},
                {headerName: 'Organization Type', field: 'organizationType'},
                {headerName: 'Country', field: 'country'},
                {headerName: 'City', field: 'city'},
                {headerName: 'License Issued', field: 'numberOfLicenses'},
                {headerName: 'Product', field: 'productType'},
                {headerName: 'Expiration Date', field: 'expdate'},
                {headerName: 'Staff Name', field: 'contactName'},
                {headerName: 'Last Update', field: 'lastUpdate'},
                {headerName: 'License Used', field: 'licenseUsed'},
                {headerName: 'Registered Users', field: 'registeredUsers'},
                {headerName: 'Users with Play Data', field: 'usersWithPlayData'},
                {headerName: 'Total Playtime', field: 'totalPlayTime'}
            ];
            this.defaultColDef = {
                sortable: true,
                filter: true,
                floatingFilter: true,
                filterParams: {
                    filterOptions: ['contains', 'notContains'],
                    resetButton: true,
                    closeOnApply : true}
            };
        },
        methods : {
            ...mapActions({
                postManage : 'postManage'
            }),
            onGridReady() {
                this.fetchManage();
            },
            fetchManage(){
                this.postManage()
                    .then((data) => {
                        console.log(`postManageResult : ${data.result}`);
                        if(data.result) this.rowData = data.data.list;
                    })
            }
        }
    }
</script>

<style>
    .content.gridView {
        padding: 40px 40px 80px;
    }

    .any {
        position: relative;
        margin-bottom: 45px;
        height: 60px;
    }

    .any .search .form-control {
        position: absolute;
        width: 360px;
    }

    .any .search .btn.search {
        margin-left: 375px;
        width: 190px;
        height: 60px;
        font-size: 24px;
    }

    .any .btn.download {
        position: absolute;
        right: 0;
        top: 0;
        width: 190px;
        height: 60px;
        font-size: 24px;
    }

    .btn.download .icon {
        font-weight: normal;
    }

    .pages {
        margin: 50px auto;
    }

    .pages .pagination {
        width: 477px;
        margin: 0 auto;
    }

    .ag-theme-alpine.ag-custom {
        border-radius: 0;
        height: 720px;
    }
    .ag-theme-alpine.ag-custom .ag-root-wrapper {
        border-radius: 0;
        border-left: 0;
        border-right: 0;
    }

    .ag-theme-alpine .ag-header-container {
        background-color: #e9e9e9;
    }

    .ag-theme-alpine .ag-header-cell-text {
        font-size: 20px;
        font-weight: normal;
        color: #0c6290;
    }

    .ag-theme-alpine .ag-cell {
        font-size: 20px;
        line-height: 24px;
        color: #878d99;
        padding-top: 17px;
        padding-bottom: 17px;
    }

    .ag-body-horizontal-scroll-viewport {
        height: 16px;
        max-height: 16px;
        min-height: 16px;
    }
    .ag-layout-normal::-webkit-scrollbar {
        background-color: #faf;
    }
</style>
