<template>
    <div class="content gridView">
        <div v-if="status === 'user'" class="userInfo">
            <span class="text">
                License Used (Number of Tablet Being Used) : <b>{{account.licenseUsed}}</b>
            </span>
            <div class="vertalLine"></div>
            <span class="text">
                Registered Users : <b>{{account.registeredUsers}}</b>
            </span>
            <div class="text updateTime">
                <b>Last Update</b> : {{account.lastUpdate}}
            </div>
        </div>
        <div v-if="status === 'user'" class="dataInfo">
            <p class="text">
                <Alert v-slot="slotProps" >
                    <span class="line1">Click on the user’s name to download the individual log data.</span>
                    <a @click="slotProps.toggleAlert" class="detailPopup" href="#">What can I find in the individual log data?</a>
                </Alert>
            </p>
            <button  @click="eventDownload"  class="btn btn-primary download">
                <font-awesome-icon class="icon" :icon="['far', 'arrow-alt-to-bottom']"/>
                Download Dashboard Data
            </button>
        </div>
        <div v-if="status === 'admin'"  class="buttonArea">
            <button @click="eventDownload" class="btn btn-primary btn-lg download">
                <font-awesome-icon class="icon" :icon="['far', 'arrow-alt-to-bottom']"/>
                Download
            </button>
        </div>
        <ag-grid-vue class="ag-theme-alpine ag-custom"
                     :headerHeight="80"
                     :rowStyle="{background: 'white'}"
                     :rowHeight="60"
                     @grid-ready="fetchAgGridList"
                     :gridOptions="gridOptions"
                     :columnDefs="columnDefs"
                     :defaultColDef="defaultColDef"
                     :rowData="rowData"
                     :rowSelection="rowSelection"
                     @selection-changed="fetchDashboardDetail">
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
                rowSelection: null
            }
        },
        beforeMount() {
            this.gridOptions = {};
            if(this.status === 'user'){
                this.columnDefs = [
                    {headerName: 'TabletNumber', field: 'tabletNO', pinned: 'left', sort: 'asc'},
                    {headerName: 'Last Update', field: '', pinned: 'left',filter: 'agDateColumnFilter'},
                    {headerName: 'First name', field: 'firstName', pinned: 'left'},
                    {headerName: 'Last name', field: 'lastName', pinned: 'left'},
                    {headerName: 'ID', field: 'userID', hide: "true"},
                    {headerName: 'Grade', field: 'grade',filter: 'agNumberColumnFilter'},
                    {headerName: 'Class', field: 'class'},
                    {headerName: 'First Played', field: 'startTime',filter: 'agDateColumnFilter'},
                    {headerName: 'Last Played', field: 'endTime',filter: 'agDateColumnFilter'},
                    {headerName: 'Play Time (Total min.)', field: 'playTimeCount',filter: 'agNumberColumnFilter'},
                    {headerName: 'Literacy Progress', groupId : 'progressLGroup',
                        children : [
                            {headerName: 'Egg', field: 'progressLEgg',filter: 'agNumberColumnFilter'},
                            {headerName: 'Day', field: 'progressLDay',filter: 'agNumberColumnFilter'}]},
                    {headerName: 'Math Progress', groupId : 'progressMGroup',
                        children : [
                            {headerName: 'Egg', field: 'progressMEgg',filter: 'agNumberColumnFilter'},
                            {headerName: 'Day', field: 'progressMDay',filter: 'agNumberColumnFilter'}]},
                    {headerName: 'Pre-test', groupId : 'PreTestGroup',
                        children : [
                            {headerName: 'Literacy', groupId : 'preTestLGroup',
                                children : [
                                    {headerName: 'Test Date', field: 'PretestLDate',filter: 'agDateColumnFilter'},
                                    {headerName: 'Score', field: 'PretestLScore',filter: 'agNumberColumnFilter'}]},
                            {headerName: 'Math', groupId : 'preTestMGroup',
                                children : [
                                    {headerName: 'Test Date', field: 'PretestMDate',filter: 'agDateColumnFilter'},
                                    {headerName: 'Score', field: 'PretestMScore',filter: 'agNumberColumnFilter'}]}]},
                    {headerName: 'Post test', groupId : 'PostTestGroup',
                        children : [
                            {headerName: 'Literacy', groupId : 'postTestLGroup',
                                children : [
                                    {headerName: 'TestDate', field: 'posttestLDate',filter: 'agDateColumnFilter'},
                                    {headerName: 'Score', field: 'posttestLScore',filter: 'agNumberColumnFilter'}]},
                            {headerName: 'Math', groupId : 'postTestMGroup',
                                children : [
                                    {headerName: 'Test Date', field: 'posttestMDate',filter: 'agDateColumnFilter'},
                                    {headerName: 'Score', field: 'posttestMScore',filter: 'agNumberColumnFilter'}]}]},
                ];
            }else if (this.status === 'admin'){
                this.columnDefs = [
                    {headerName: 'Reg date', field: 'regdate', pinned: 'left',filter: 'agDateColumnFilter',sort: 'desc'},
                    {headerName: 'ID', field: 'account', pinned: 'left'},
                    {headerName: 'Name', field: 'sitename'},
                    {headerName: 'Email', field: 'siteEMail'},
                    {headerName: 'Organization', field: 'organization'},
                    {headerName: 'Organization Type', field: 'organizationType'},
                    {headerName: 'Country', field: 'country'},
                    {headerName: 'City', field: 'city'},
                    {headerName: 'License Issued', field: 'numberOfLicenses' ,filter: 'agNumberColumnFilter'},
                    {headerName: 'Product', field: 'productType'},
                    {headerName: 'Expiration Date', field: 'expdate',filter: 'agDateColumnFilter'},
                    {headerName: 'Staff Name', field: 'contactName'},
                    {headerName: 'Last Update', field: 'lastUpdate',filter: 'agDateColumnFilter'},
                    {headerName: 'License Used', field: 'licenseUsed',filter: 'agNumberColumnFilter'},
                    {headerName: 'Registered Users', field: 'registeredUsers',filter: 'agNumberColumnFilter'},
                    {headerName: 'Users with Play Data', field: 'usersWithPlayData',filter: 'agNumberColumnFilter'},
                    {headerName: 'Total Playtime', field: 'totalPlayTime',filter: 'agNumberColumnFilter'}
                ];
            }
            this.defaultColDef = {
                sortable: true,
                unSortIcon: true,
                sortingOrder: ['asc', 'desc'],
                resizable: true,
                filter: true,
                filterParams: {
                    comparator: (filterLocalDateAtMidnight, cellValue) => {
                        var dateAsString = cellValue;
                        if (dateAsString === null || dateAsString === '') return -1;
                        var dateParts = dateAsString.split('.');
                        var cellDate = new Date(
                            Number(dateParts[0]),
                            Number(dateParts[1]) - 1,
                            Number(dateParts[2])
                        );
                        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) return 0;
                        if (cellDate < filterLocalDateAtMidnight) return -1;
                        if (cellDate > filterLocalDateAtMidnight) return 1;
                    },
                    browserDatePicker: true,
                    resetButton: true
                }
            };
            this.rowSelection = 'single';
        },
        mounted() {
            this.gridApi = this.gridOptions.api;
            if(this.status === 'user' && !this.account.access) this.fetchAccountInfo();
        },
        computed: {
            ...mapGetters({
                status : 'getStatus',
                account : 'getAccount',
                loginID : 'getLoginID'
            })
        },
        methods : {
            ...mapActions({
                postManage : 'postManage',
                postDashboard : 'postDashboard',
                postAccountInfo : 'postAccountInfo',
                postDashboardDetail : 'postDashboardDetail'
            }),
            fetchAccountInfo(){
                this.postAccountInfo()
                    .then((data) => {
                        console.log(`postAccountInfoResult : ${data.result}`);
                    })
            },
            fetchAgGridList(){
                if(this.status === 'user'){
                    this.postDashboard()
                        .then((data) => {
                            console.log(`postDashboardResult : ${data.result}`);
                            if(data.result) this.processDashboardData(data.data.list);
                        })
                }else if(this.status === 'admin'){
                    this.postManage()
                        .then((data) => {
                            console.log(`postManageResult : ${data.result}`);
                            if(data.result)this.processManageData(data.data.list);
                        })
                }
            },
            eventDownload(){
                this.gridApi.exportDataAsCsv({fileName : `Kitkit_${this.loginID}_${this.$moment().format('YYYYMMDD')}`});
            },
            processManageData(data){
                data.forEach((array) => {
                    if(array.productType === '1') array.productType = 'English and Math';
                    else if(array.productType === '2')array.productType = 'Swahili and Math';
                    else array.productType = '';
                    array.expdate = array.expdate && this.$moment(new Date(array.expdate)).format('YYYY.MM.DD');
                    array.regdate = array.regdate && this.$moment(new Date(array.regdate)).format('YYYY.MM.DD');
                });
                this.rowData = data;
            },
            processDashboardData(data){
                data.forEach((array) => {
                    array.startTime = array.startTime && this.$moment(new Date(array.startTime)).format('YYYY.MM.DD');
                    array.endTime = array.endTime && this.$moment(new Date(array.endTime)).format('YYYY.MM.DD');
                    array.PretestLDate =  array.PretestLDate && this.$moment(new Date(array.PretestLDate)).format('YYYY.MM.DD');
                    array.PretestMDate =  array.PretestMDate && this.$moment(new Date(array.PretestMDate)).format('YYYY.MM.DD');
                    array.posttestLDate =  array.posttestLDate && this.$moment(new Date(array.posttestLDate)).format('YYYY.MM.DD');
                    array.posttestMDate = array.posttestMDate && this.$moment(new Date(array.posttestMDate)).format('YYYY.MM.DD');
                });
                this.rowData = data;
            },
            fetchDashboardDetail() {
                if(this.status === 'user'){
                    let selectedRows = this.gridApi.getSelectedRows();
                    let userID = selectedRows.length === 1 ? selectedRows[0].userID : '';
                    if(userID !== ''){
                        this.postDashboardDetail({userID : userID })
                            .then((data) => {
                                if(data.result !== undefined && !data.result) console.log(`postDashboardDetail : ${data.result}`);
                                else console.log('csv 파일 다운로드');
                            })
                    }
                }
            },
        }
    }
</script>

<style>
    .content.gridView {
        padding: 40px 40px 80px;
    }

    .buttonArea {
        position: relative;
        margin-bottom: 45px;
        height: 60px;
    }

    .buttonArea .search .form-control {
        position: absolute;
        width: 360px;
    }

    .buttonArea .search .btn.search {
        margin-left: 375px;
        width: 190px;
        height: 60px;
        font-size: 24px;
    }

    .buttonArea .btn.download {
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
        margin-bottom: 80px;
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

    .content.gridView .userInfo {
        position: relative;
    }

    .content.gridView .userInfo .text {
        font-family: Lato;
        font-size: 28px;
        line-height: 34px;
        color: #333333;
    }

    .content.gridView .userInfo .text.updateTime {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 24px;
    }

    .content.gridView .userInfo .vertalLine {
        display: inline-block;
        margin: 0 20px;
        width: 1px;
        height: 27px;
        background-color: #aaa;
    }

    .content.gridView .dataInfo {
        position: relative;
        margin: 32px 0 56px;
    }

    .content.gridView .dataInfo .text {
        margin-right: 400px;
        font-family: Lato;
        font-size: 24px;
        line-height: 29px;
        color: #333333;
    }

    .content.gridView .dataInfo .text .line1 {
        padding-right: 6px;
        display: inline-block;
    }

    .content.gridView .dataInfo .text .detailPopup {
        color: #0c6290;
        text-decoration: underline;
    }

    .content.gridView .dataInfo .btn.download {
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
        .content.gridView .dataInfo {
            margin: 32px 0 40px;
        }
        .content.gridView .dataInfo .btn.download {
            bottom: 0;
        }
    }

    @media (max-width: 1721px) {
        .content.gridView .userInfo {
            height: 83px;
        }
        .content.gridView .userInfo .text.updateTime {
            /*position: relative;*/
            top: 54px;
            left: 0;
        }

        .content.gridView .dataInfo .text .line1 {
            display: block;
            margin-bottom: 4px;
        }
    }

    @media (max-width: 1321px) {
        .content.gridView .dataInfo {
            height: 145px;
        }
        .content.gridView .dataInfo .text {
            margin-right: 0;
        }
    }
</style>
