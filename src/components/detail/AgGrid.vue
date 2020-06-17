<template>
    <div class="content gridView">

        <Alert/>

        <!-- Dashboard / Manage 분기 필요 -->

        <!-- Dashboard -->
        <div class="userInfo">
            <span class="text">
                License Used (Number of Tablet Being Used) : <b>156</b>
            </span>
            <div class="vertalLine"></div>
            <span class="text">
                Registered Users : <b>245</b>
            </span>
        </div>

        <div class="dataInfo">
            <p class="text">
                <span class="line1">Click on the user’s name to download the individual log data. </span>
                <a class="detailPopup" href="#">What can I find in the individual log data?</a>
            </p>
            <button class="btn btn-primary download">
                <font-awesome-icon class="icon" :icon="['far', 'arrow-alt-to-bottom']"/>
                Download Dashboard Data
            </button>
        </div>
        <!-- // Dashboard -->

        <!-- Manage -->
<!--        <div class="any">-->
<!--            <button @click="eventDownload" class="btn btn-primary btn-lg download">-->
<!--                <font-awesome-icon class="icon" :icon="['far', 'arrow-alt-to-bottom']"/>-->
<!--                Download-->
<!--            </button>-->
<!--        </div>-->
        <!-- // Manage -->

        <ag-grid-vue class="ag-theme-alpine ag-custom"
                     :headerHeight="80"
                     :rowStyle="{background: 'white'}"
                     :rowHeight="60"
                     @grid-ready="fetchAgGridList"
                     :gridOptions="gridOptions"
                     :columnDefs="columnDefs"
                     :defaultColDef="defaultColDef"
                     :rowData="rowData">
        </ag-grid-vue>

    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import { AgGridVue } from 'ag-grid-vue';
    import "ag-grid-community/dist/styles/ag-grid.css";
    import "ag-grid-community/dist/styles/ag-theme-alpine.css";

    import Alert from "../../components/popup/Alert";

    export default {
        name: 'AgGrid',
        components: {
            Alert,
            AgGridVue
        },
        data() {
            return {
                gridOptions: null,
                gridApi: null,
                columnDefs: null,
                rowData: null,
                defaultColDef: null,
            }
        },
        beforeMount() {
            this.gridOptions = {};
            if(this.status === 'user'){
                this.columnDefs = [
                    {headerName: '', field: 'userID'},
                    {headerName: 'First name', field: 'firstName'},
                    {headerName: 'Last name', field: 'lastName'},
                    {headerName: 'Grade', field: 'grade'},
                    {headerName: 'Class', field: 'class'},
                    {headerName: 'TabletNumber', field: 'tabletNO'},
                    {headerName: 'StartTime', field: 'startTime'},
                    {headerName: 'End Time', field: 'endTime'},
                    {headerName: 'Play Time (Total min.)', field: 'playTimeCount'},
                    {headerName: 'Literacy Progress', groupId : 'progressLGroup',
                        children : [
                            {headerName: 'Egg', field: 'progressLEgg'},
                            {headerName: 'Day', field: 'progressLDay'}]},
                    {headerName: 'Math Progress', groupId : 'progressMGroup',
                        children : [
                            {headerName: 'Egg', field: 'progressMEgg'},
                            {headerName: 'Day', field: 'progressMDay'}]},
                    {headerName: 'Pre-test', groupId : 'PreTestGroup',
                        children : [
                            {headerName: 'Literacy', groupId : 'preTestLGroup',
                                children : [
                                    {headerName: 'Test Date', field: 'PretestLDate'},
                                    {headerName: 'Score', field: 'PretestLScore'}]},
                            {headerName: 'Math', groupId : 'preTestMGroup',
                                children : [
                                    {headerName: 'Test Date', field: 'PretestMDate'},
                                    {headerName: 'Score', field: 'PretestMScore'}]}]},
                    {headerName: 'Post test', groupId : 'PostTestGroup',
                        children : [
                            {headerName: 'Literacy', groupId : 'postTestLGroup',
                                children : [
                                    {headerName: 'TestDate', field: 'posttestLDate'},
                                    {headerName: 'Score', field: 'posttestLScore'}]},
                            {headerName: 'Math', groupId : 'postTestMGroup',
                                children : [
                                    {headerName: 'Test Date', field: 'posttestMDate'},
                                    {headerName: 'Score', field: 'posttestMScore'}]}]},
                ];
            }else if (this.status === 'admin'){
                this.columnDefs = [
                    {headerName: 'Reg date', field: 'regdate', pinned: 'left', sortable: true},
                    {headerName: 'ID', field: 'account', pinned: 'left', filter: true, sortable: true},
                    {headerName: 'Name', field: 'sitename', filter: true, sortable: true},
                    {headerName: 'Email', field: 'siteEMail', filter: true, sortable: true},
                    {headerName: 'Organization', field: 'organization', filter: true, sortable: true},
                    {headerName: 'Organization Type', field: 'organizationType'},
                    {headerName: 'Country', field: 'country', filter: true, sortable: true},
                    {headerName: 'City', field: 'city', filter: true, sortable: true},
                    {headerName: 'License Issued', field: 'numberOfLicenses'},
                    {headerName: 'Product', field: 'productType'},
                    {headerName: 'Expiration Date', field: 'expdate'},
                    {headerName: 'Staff Name', field: 'contactName', filter: true, sortable: true},
                    {headerName: 'Last Update', field: 'lastUpdate', sortable: true},
                    {headerName: 'License Used', field: 'licenseUsed'},
                    {headerName: 'Registered Users', field: 'registeredUsers'},
                    {headerName: 'Users with Play Data', field: 'usersWithPlayData'},
                    {headerName: 'Total Playtime', field: 'totalPlayTime'}
                ];
            }

            this.defaultColDef = {
                sort: 'desc',
                unSortIcon: true,
                sortingOrder: ['asc', 'desc'],
                resizable: true,
                floatingFilter: true,
                filterParams: {
                    filterOptions: ['contains'],
                    resetButton: true,
                    closeOnApply : true}
            };
        },
        mounted() {
            this.gridApi = this.gridOptions.api;
        },
        computed: {
            ...mapGetters({
                status : 'getStatus'
            })
        },
        methods : {
            ...mapActions({
                postManage : 'postManage',
                postDashboard : 'postDashboard'
            }),
            fetchAgGridList(){

                if(this.status === 'user'){
                    this.postDashboard()
                        .then((data) => {
                            console.log(`postDashboardResult : ${data.result}`);
                            if(data.result) this.rowData = data.data.list;
                        })
                }else if(this.status === 'admin'){
                    this.postManage()
                        .then((data) => {
                            console.log(`postManageResult : ${data.result}`);
                            if(data.result) this.rowData = data.data.list;
                        })
                }

            },
            eventDownload(){
                this.gridApi.exportDataAsCsv({fileName : `KitKitSchool_${this.$moment().format('YYYYMMDD')}`});
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

    .ag-sort-order {
        display: none;
    }



    /* Dashboard *//* Dashboard *//* Dashboard *//* Dashboard */
    .content.gridView {
        padding: 30px 40px 80px;
    }

    .userInfo {

    }

    .userInfo .text {
        font-family: Lato;
        font-size: 28px;
        line-height: 34px;
        color: #333333;
    }

    .userInfo .vertalLine {
        display: inline-block;
        margin: 0 20px;
        width: 1px;
        height: 27px;
        background-color: #aaa;
    }

    .dataInfo {
        position: relative;
        margin: 32px 0 56px;
    }

    .dataInfo .text {
        margin-right: 400px;
        font-family: Lato;
        font-size: 24px;
        line-height: 29px;
        color: #333333;
    }

    .dataInfo .text .line1 {
        padding-right: 6px;
        display: inline-block;
    }

    .dataInfo .text .detailPopup {
        color: #0c6290;
        text-decoration: underline;
    }

    .dataInfo .btn.download {
        position: absolute;
        bottom: -16px;
        right: 0;
        padding: 16px 21px 15px;
        width: 360px;
        height: 60px;
        font-family: Lato;
        font-size: 23px;
        font-weight: 500;
        /*line-height: 1.13;*/
    }

    @media (max-width: 1807px) {
        .dataInfo {
            margin: 32px 0 40px;
        }
        .dataInfo .btn.download {
            bottom: 0;
        }
    }

    @media (max-width: 1721px) {
        .dataInfo .text .line1 {
            display: block;
            margin-bottom: 4px;
        }
    }

    @media (max-width: 1321px) {
        .dataInfo {
            height: 145px;
        }
        .dataInfo .text {
            margin-right: 0;
        }
    }
</style>
