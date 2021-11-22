<template>
    <div class="content gridView">
        <div v-if="status === 'user'" class="userInfo">
            <span class="text">
                License Used (Number of Tablets Being Used) : <b>{{account.licenseUsed}}</b>
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
            <button  @click="eventDownload"  class="btn btn-primary download" :class="{disabled : downloadDisabled}">
                <font-awesome-icon class="icon" :icon="['far', 'arrow-alt-to-bottom']"/>
                Download Dashboard Data
            </button>
        </div>
        <div v-if="status === 'admin'"  class="buttonArea"  :class="{disabled : downloadDisabled}">
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
                defaultColDef: {resizable: true},
                rowSelection: null,
                length : 0
            }
        },
        beforeMount() {
            this.gridOptions = {};
            let sessionID = this.sessionID;

            if(this.status === 'user'){
                this.columnDefs = [
                    {headerName: 'Tablet No.', field: 'tabletNO', pinned: 'left', sort : 'asc', width: 130,
                        comparator : (a, b) => {
                            if(a === "" && b !== "") return -1;
                            else if(a!== "" && b === "") return 1;
                            else if (a === "" && b === "") return -1;
                            else if (a !== "" && b !== "") {
                                let aNum = Number(a.split('t')[1]);
                                let bNum = Number(b.split('t')[1]);
                                if(aNum > bNum)return  1;
                                else if (aNum === bNum) return  -1 ;
                                else if (aNum < bNum) return  -1;
                            }
                        }
                    },
                    {headerName: 'First Name', field: 'firstName', pinned: 'left', width: 130,
                        cellRenderer: function(params) {
                            return '<a href="https://api.kitkitschool.com/account/downloadCSV?sessionID=' + sessionID + '&userID=' + params.data.userID + '" target="_blank">'+ params.value+'</a>'
                        }
                    },
                    {headerName: 'Last Name', field: 'lastName', width: 130},
                    {headerName: 'Last Update', field: 'lastUpdate',filter: 'agDateColumnFilter', width: 155,
                        filterParams: {
                            comparator: (filterLocalDateAtMidnight, cellValue) => {
                                let dateAsString = cellValue;
                                if (dateAsString === null || dateAsString === '') return -1;
                                let date = dateAsString.split(' ')[0];
                                let time = dateAsString.split(' ')[1];
                                let dateParts = date.split('.');
                                let timeParts = time.split(':');
                                let cellDate = new Date(
                                    Number(dateParts[0]),
                                    Number(dateParts[1]) - 1,
                                    Number(dateParts[2]),
                                    Number(timeParts[0]),
                                    Number(timeParts[1]),
                                    Number(timeParts[2])
                                );
                                if (filterLocalDateAtMidnight.getDate() === cellDate.getDate()) return 0;
                                if (cellDate < filterLocalDateAtMidnight) return -1;
                                if (cellDate > filterLocalDateAtMidnight) return 1;
                            },
                            browserDatePicker: true,
                            resetButton: true
                        }
                    },
                    {headerName: 'ID', field: 'userID', hide: "true"},
                    {headerName: 'Grade', field: 'grade',filter: 'agNumberColumnFilter', width: 130},
                    {headerName: 'Class', field: 'class', width: 130},
                    {headerName: 'First Played', field: 'startTime',filter: 'agDateColumnFilter', width: 155},
                    {headerName: 'Last Played', field: 'endTime',filter: 'agDateColumnFilter', width: 155},
                    {headerName: 'Play Time (Total min.)', field: 'playTimeCount',filter: 'agNumberColumnFilter', width: 175},
                    {headerName: 'Literacy Course', groupId : 'progressLGroup',
                        children : [
                            {headerName: 'Egg', field: 'progressLEgg',filter: 'agNumberColumnFilter', width: 110},
                            {headerName: 'Day', field: 'progressLDay',filter: 'agNumberColumnFilter', width: 110}]},
                    {headerName: 'Math Course', groupId : 'progressMGroup',
                        children : [
                            {headerName: 'Egg', field: 'progressMEgg',filter: 'agNumberColumnFilter', width: 110},
                            {headerName: 'Day', field: 'progressMDay',filter: 'agNumberColumnFilter', width: 110}]},
                    {headerName: 'Pre-Test Literacy', groupId : 'preTestLGroup',
                        children : [
                            {headerName: 'Test Date', field: 'PretestLDate',filter: 'agDateColumnFilter', width: 155},
                            {headerName: 'Score', field: 'PretestLScore',filter: 'agNumberColumnFilter', width: 125,
                              cellRenderer: function(params) {
                                if (params.value.split('/')[0] === "0") {
                                  return "0/0"
                                } else {
                                  return params.value
                                }
                              }}]},
                    {headerName: 'Pre-Test Math', groupId : 'preTestMGroup',
                        children : [
                            {headerName: 'Test Date', field: 'PretestMDate',filter: 'agDateColumnFilter', width: 155},
                            {headerName: 'Score', field: 'PretestMScore',filter: 'agNumberColumnFilter', width: 125,
                              cellRenderer: function(params) {
                                if (params.value.split('/')[0] === "0") {
                                  return "0/0"
                                } else {
                                  return params.value
                                }
                              }}]},
                    {headerName: 'Post-Test Literacy', groupId : 'postTestLGroup',
                        children : [
                            {headerName: 'Test Date', field: 'posttestLDate',filter: 'agDateColumnFilter', width: 155},
                            {headerName: 'Score', field: 'posttestLScore',filter: 'agNumberColumnFilter', width: 125,
                              cellRenderer: function(params) {
                                if (params.value.split('/')[0] === "0") {
                                  return "0/0"
                                } else {
                                  return params.value
                                }
                              }}]},
                    {headerName: 'Post-Test Math', groupId : 'postTestMGroup',
                        children : [
                            {headerName: 'Test Date', field: 'posttestMDate',filter: 'agDateColumnFilter', width: 155},
                            {headerName: 'Score', field: 'posttestMScore',filter: 'agNumberColumnFilter', width: 125}]},
                ];
            }else if (this.status === 'admin'){
                this.columnDefs = [
                    {headerName: 'Created Date', field: 'regdate', pinned: 'left',filter: 'agDateColumnFilter',sort: 'desc', width: 155},
                    {headerName: 'ID', field: 'account', pinned: 'left', width: 145},
                    {headerName: 'Name', field: 'sitename', width: 145},
                    {headerName: 'Email', field: 'siteEMail'},
                    {headerName: 'Organization', field: 'organization', width: 190},
                    {headerName: 'Organization Type', field: 'organizationType', width: 190},
                    {headerName: 'Country', field: 'country', width: 145},
                    {headerName: 'City', field: 'city', width: 110},
                    {headerName: 'License Issued', field: 'numberOfLicenses' ,filter: 'agNumberColumnFilter', width: 140},
                    {headerName: 'Product', field: 'productType', width: 190},
                    {headerName: 'Expiration Date', field: 'expdate',filter: 'agDateColumnFilter', width: 165},
                    {headerName: 'Staff Name', field: 'contactName', width: 130},
                    {headerName: 'Last Update', field: 'lastUpdate',filter: 'agDateColumnFilter', width: 155,
                        filterParams: {
                            comparator: (filterLocalDateAtMidnight, cellValue) => {
                                let dateAsString = cellValue;
                                if (dateAsString === null || dateAsString === '') return -1;
                                let date = dateAsString.split(' ')[0];
                                let time = dateAsString.split(' ')[1];
                                let dateParts = date.split('.');
                                let timeParts = time.split(':');
                                let cellDate = new Date(
                                    Number(dateParts[0]),
                                    Number(dateParts[1]) - 1,
                                    Number(dateParts[2]),
                                    Number(timeParts[0]),
                                    Number(timeParts[1]),
                                    Number(timeParts[2])
                                );
                                if (filterLocalDateAtMidnight.getDate() === cellDate.getDate()) return 0;
                                if (cellDate < filterLocalDateAtMidnight) return -1;
                                if (cellDate > filterLocalDateAtMidnight) return 1;
                            },
                            browserDatePicker: true,
                            resetButton: true
                        }},
                    {headerName: 'License Used', field: 'licenseUsed',filter: 'agNumberColumnFilter', width: 140},
                    {headerName: 'Registered Users', field: 'registeredUsers',filter: 'agNumberColumnFilter', width: 170},
                    {headerName: 'Users with Play Data', field: 'usersWithPlayData',filter: 'agNumberColumnFilter', width: 170},
                    {headerName: 'Total Playtime', field: 'totalPlayTime',filter: 'agNumberColumnFilter', width: 160}
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
                        let dateAsString = cellValue;
                        if (dateAsString === null || dateAsString === '') return -1;
                        let dateParts = dateAsString.split('.');
                        let cellDate = new Date(
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
            if(this.status === 'user') this.fetchAccountInfo();
        },
        computed: {
            ...mapGetters({
                status : 'getStatus',
                account : 'getAccount',
                loginID : 'getLoginID',
                sessionID : 'getSessionID'
            }),
            downloadDisabled () {
                return this.length === 0
            }
        },
        methods : {
            ...mapActions({
                postManage : 'postManage',
                postDashboard : 'postDashboard',
                postDashboardDetail : 'postDashboardDetail',
                postAccountInfo : 'postAccountInfo'
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
                    array.lastUpdate= array.lastUpdate && this.$moment(new Date(array.lastUpdate)).format('YYYY.MM.DD HH:mm:ss');
                });
                this.rowData = data;
                this.length = this.rowData.length;
            },
            processDashboardData(data){
                data.forEach((array) => {
                    array.startTime = array.startTime && this.$moment(array.startTime).format('YYYY.MM.DD');
                    array.endTime = array.endTime && this.$moment(array.endTime).format('YYYY.MM.DD');
                    array.PretestLDate =  array.PretestLDate && this.$moment(array.PretestLDate).format('YYYY.MM.DD');
                    array.PretestMDate =  array.PretestMDate && this.$moment(array.PretestMDate).format('YYYY.MM.DD');
                    array.posttestLDate =  array.posttestLDate && this.$moment(array.posttestLDate).format('YYYY.MM.DD');
                    array.posttestMDate = array.posttestMDate && this.$moment(array.posttestMDate).format('YYYY.MM.DD');
                    array.lastUpdate= array.lastUpdate && this.$moment(array.lastUpdate).format('YYYY.MM.DD HH:mm:ss');


                });
                this.rowData = data;
                this.length = this.rowData.length;
            },
            fetchDashboardDetail() {
                if(this.status === 'user'){
                    let selectedRows = this.gridApi.getSelectedRows();
                    let userID = selectedRows.length === 1 ? selectedRows[0].userID : '';
                    if(userID !== ''){
                        this.postDashboardDetail({userID : userID })
                            .then((data) => {
                                if(data.result !== undefined && !data.result && data.errorCode.split(':')[0] !== 'CAD03') alert(data.errorCode);
                                else console.log('csv 파일 다운로드');
                            })
                    }
                }
            }
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

    .ag-theme-alpine .ag-header-cell-label, .ag-header-group-cell-label {
        justify-content: center;
    }

    .ag-theme-alpine .ag-header-cell-text, .ag-header-group-text {
        font-size: 20px;
        font-weight: normal;
        color: #0c6290;
        white-space: normal;
        text-align: center;
    }

    .ag-theme-alpine .ag-cell {
        font-size: 20px;
        line-height: 24px;
        color: #878d99;
        padding-top: 17px;
        padding-bottom: 17px;
        text-align: center;
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

    .ag-theme-alpine .ag-cell a {
        font-size: 20px;
        line-height: 24px;
        color: #878d99;
        padding-top: 17px;
        padding-bottom: 17px;
    }

    .ag-theme-alpine .ag-cell a:hover {
        color: #0c6290;
    }


    /* Dashboard *//* Dashboard *//* Dashboard *//* Dashboard */
    .content.gridView {
        padding: 30px 40px 80px;
    }

    .content.gridView .userInfo {
        position: relative;
    }

    .content.gridView .userInfo .text {
        font-family: 'Lato-Regular';
        letter-spacing: -0.9px;
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
        font-family: 'Lato-Regular';
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
        font-family: 'Lato-Regular';
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
