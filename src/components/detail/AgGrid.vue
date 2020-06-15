<template>
    <div class="content gridView">
        <div class="any">
            <form class="search">
                <input type="text" class="form-control" title="search" placeholder="Please enter a search term.">
                <button class="btn btn-primary btn-lg search">
                    <font-awesome-icon class="icon" :icon="['far', 'search']"/>
                    SEARCH
                </button>
            </form>
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
                     :rowData="rowData">
        </ag-grid-vue>

        <div class="pages">
            <ul class="pagination pagination-circle">
                    <li class="page-item disabled">
                        <a class="page-link page-arrow" aria-label="Previous">
                            <span aria-hidden="true"><font-awesome-icon :icon="['fas', 'angle-double-left']"/></span>
                            <span class="sr-only">Previous</span>
                        </a>
                    </li>
                    <li class="page-item disabled">
                        <a class="page-link page-arrow" aria-label="Previous">
                            <span aria-hidden="true"><font-awesome-icon :icon="['fas', 'chevron-left']"/></span>
                            <span class="sr-only">Previous</span>
                        </a>
                    </li>
                    <li class="page-item active"><a class="page-link">1</a></li>
                    <li class="page-item"><a class="page-link">2</a></li>
                    <li class="page-item"><a class="page-link">3</a></li>
                    <li class="page-item"><a class="page-link">4</a></li>
                    <li class="page-item"><a class="page-link">5</a></li>
                    <li class="page-item">
                        <a class="page-link page-arrow" aria-label="Next">
                            <span aria-hidden="true"><font-awesome-icon :icon="['fas', 'chevron-right']"/></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link page-arrow" aria-label="Next">
                            <span aria-hidden="true"><font-awesome-icon :icon="['fas', 'angle-double-right']"/></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
        </div>

    </div>
</template>

<script>
    import "ag-grid-community/dist/styles/ag-grid.css";
    import "ag-grid-community/dist/styles/ag-theme-alpine.css";
    import { AgGridVue } from 'ag-grid-vue';

    export default {
        name: 'AgGrid',
        components: {
            AgGridVue
        },
        beforeMount() {
            this.columnDefs = [
                {headerName: 'No.', field: 'num', width: 100},
                {headerName: 'Reg date', field: 'regDate', width: 100},
                {headerName: 'ID', field: 'id', width: 100},
                {headerName: 'Name', field: 'name', width: 100},
                {headerName: 'Email', field: 'email', width: 100},
                {headerName: 'Organization', field: 'org', width: 100},
                {headerName: 'Organization Type', field: 'orgType', width: 100},
                {headerName: 'Country', field: 'country', width: 100},
                {headerName: 'City', field: 'city', width: 100},
                {headerName: 'License Issued', field: 'licenseIssued', width: 100},
                {headerName: 'Product', field: 'product', width: 100},
                {headerName: 'Expiration Date', field: 'expDate', width: 100},
                {headerName: 'Staff Name', field: 'staffName', width: 100},
                {headerName: 'Last Update', field: 'lastUpdate', width: 100},
                {headerName: 'License Used', field: 'licenseUsed', width: 100},
                {headerName: 'Registered Users', field: 'regUsers', width: 100},
                {headerName: 'Users with Play Data', field: 'usersPlayData', width: 100},
                {headerName: 'Total Playtime', field: 'totalPlayTime', width: 100}
            ];
            this.rowData = [
                {
                    num: 23,
                    regDate: '2020.06.15',
                    id: 'Enuma',
                    name: 'Proro',
                    email: 'Proro@enuma.com',
                    org: 'Enuma',
                    orgType: 'NGO/non-profit',
                    country: 'South Korea',
                    city: 'Seoul',
                    licenseIssued: 100,
                    product: 'English and Math',
                    expDate: '2021.12.31',
                    staffName: 'Sana',
                    lastUpdate: '2020.05.04 16:54:30(T3)',
                    licenseUsed: 20,
                    regUsers: 40,
                    usersPlayData: 33,
                    totalPlayTime: 345
                },
                {
                    num: 22,
                    regDate: '2020.06.15',
                    id: 'Enuma',
                    name: 'Proro',
                    email: 'Proro@enuma.com',
                    org: 'Enuma',
                    orgType: 'NGO/non-profit',
                    country: 'South Korea',
                    city: 'Seoul',
                    licenseIssued: 100,
                    product: 'English and Math',
                    expDate: '2021.12.31',
                    staffName: 'Sana',
                    lastUpdate: '2020.05.04 16:54:30(T3)',
                    licenseUsed: 20,
                    regUsers: 40,
                    usersPlayData: 33,
                    totalPlayTime: 345
                },
                {
                    num: 21,
                    regDate: '2020.06.15',
                    id: 'Enuma',
                    name: 'Proro',
                    email: 'Proro@enuma.com',
                    org: 'Enuma',
                    orgType: 'NGO/non-profit',
                    country: 'South Korea',
                    city: 'Seoul',
                    licenseIssued: 100,
                    product: 'English and Math',
                    expDate: '2021.12.31',
                    staffName: 'Sana',
                    lastUpdate: '2020.05.04 16:54:30(T3)',
                    licenseUsed: 20,
                    regUsers: 40,
                    usersPlayData: 33,
                    totalPlayTime: 345
                },
                {
                    num: 20,
                    regDate: '2020.06.15',
                    id: 'Enuma',
                    name: 'Proro',
                    email: 'Proro@enuma.com',
                    org: 'Enuma',
                    orgType: 'NGO/non-profit',
                    country: 'South Korea',
                    city: 'Seoul',
                    licenseIssued: 100,
                    product: 'English and Math',
                    expDate: '2021.12.31',
                    staffName: 'Sana',
                    lastUpdate: '2020.05.04 16:54:30(T3)',
                    licenseUsed: 20,
                    regUsers: 40,
                    usersPlayData: 33,
                    totalPlayTime: 345
                },
                {
                    num: 19,
                    regDate: '2020.06.15',
                    id: 'Enuma',
                    name: 'Proro',
                    email: 'Proro@enuma.com',
                    org: 'Enuma',
                    orgType: 'NGO/non-profit',
                    country: 'South Korea',
                    city: 'Seoul',
                    licenseIssued: 100,
                    product: 'English and Math',
                    expDate: '2021.12.31',
                    staffName: 'Sana',
                    lastUpdate: '2020.05.04 16:54:30(T3)',
                    licenseUsed: 20,
                    regUsers: 40,
                    usersPlayData: 33,
                    totalPlayTime: 345
                },
                {
                    num: 18,
                    regDate: '2020.06.15',
                    id: 'Enuma',
                    name: 'Proro',
                    email: 'Proro@enuma.com',
                    org: 'Enuma',
                    orgType: 'NGO/non-profit',
                    country: 'South Korea',
                    city: 'Seoul',
                    licenseIssued: 100,
                    product: 'English and Math',
                    expDate: '2021.12.31',
                    staffName: 'Sana',
                    lastUpdate: '2020.05.04 16:54:30(T3)',
                    licenseUsed: 20,
                    regUsers: 40,
                    usersPlayData: 33,
                    totalPlayTime: 345
                },
                {
                    num: 17,
                    regDate: '2020.06.15',
                    id: 'Enuma',
                    name: 'Proro',
                    email: 'Proro@enuma.com',
                    org: 'Enuma',
                    orgType: 'NGO/non-profit',
                    country: 'South Korea',
                    city: 'Seoul',
                    licenseIssued: 100,
                    product: 'English and Math',
                    expDate: '2021.12.31',
                    staffName: 'Sana',
                    lastUpdate: '2020.05.04 16:54:30(T3)',
                    licenseUsed: 20,
                    regUsers: 40,
                    usersPlayData: 33,
                    totalPlayTime: 345
                },
                {
                    num: 16,
                    regDate: '2020.06.15',
                    id: 'Enuma',
                    name: 'Proro',
                    email: 'Proro@enuma.com',
                    org: 'Enuma',
                    orgType: 'NGO/non-profit',
                    country: 'South Korea',
                    city: 'Seoul',
                    licenseIssued: 100,
                    product: 'English and Math',
                    expDate: '2021.12.31',
                    staffName: 'Sana',
                    lastUpdate: '2020.05.04 16:54:30(T3)',
                    licenseUsed: 20,
                    regUsers: 40,
                    usersPlayData: 33,
                    totalPlayTime: 345
                },
                {
                    num: 15,
                    regDate: '2020.06.15',
                    id: 'Enuma',
                    name: 'Proro',
                    email: 'Proro@enuma.com',
                    org: 'Enuma',
                    orgType: 'NGO/non-profit',
                    country: 'South Korea',
                    city: 'Seoul',
                    licenseIssued: 100,
                    product: 'English and Math',
                    expDate: '2021.12.31',
                    staffName: 'Sana',
                    lastUpdate: '2020.05.04 16:54:30(T3)',
                    licenseUsed: 20,
                    regUsers: 40,
                    usersPlayData: 33,
                    totalPlayTime: 345
                },
                {
                    num: 14,
                    regDate: '2020.06.15',
                    id: 'Enuma',
                    name: 'Proro',
                    email: 'Proro@enuma.com',
                    org: 'Enuma',
                    orgType: 'NGO/non-profit',
                    country: 'South Korea',
                    city: 'Seoul',
                    licenseIssued: 100,
                    product: 'English and Math',
                    expDate: '2021.12.31',
                    staffName: 'Sana',
                    lastUpdate: '2020.05.04 16:54:30(T3)',
                    licenseUsed: 20,
                    regUsers: 40,
                    usersPlayData: 33,
                    totalPlayTime: 345
                }
            ];
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
