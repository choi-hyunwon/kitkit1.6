<template>
    <div>
        <Header/>
        <AgGridVue/>
        <IntroductionSection/>
        <div class="main-bg">
            <div class="bar left-bar"></div>
            <div class="bar right-bar"></div>
            <img class="main-bg" src="~@/assets/img/main/main-bg.png" alt="My UI background image" />
        </div>
        <div class="bg-container">
            <SupportSection/>
        </div>
        <ComponentSection/>
        <Footer/>
    </div>
</template>

<script>
    import Header from "../../components/Header"
    import Footer from "../../components/Footer"

    import ComponentSection from '../../components/index/ComponentSection'
    import IntroductionSection from '../../components/index/IntroductionSection'
    import SupportSection from '../../components/index/SupportSection'

    // import "ag-grid-community/dist/styles/ag-grid.css";
    // import "ag-grid-community/dist/styles/ag-theme-alpine.css";
    // import { AgGridVue } from 'ag-grid-vue';

    export default {
        name: 'Index',
        layout : 'default',
        components: {
            // AgGridVue,
            Header,
            Footer,
            ComponentSection,
            IntroductionSection,
            SupportSection
        },
        // data() {
        //     return {
        //         columnDefs: null,
        //         rowData: null
        //     }
        // },
        // beforeMount() {
        //     this.columnDefs = [
        //         {headerName: 'Make', field: 'make'},
        //         {headerName: 'Model', field: 'model'},
        //         {headerName: 'Price', field: 'price'}
        //     ];
        //     this.rowData = [
        //         {make: 'Toyota', model: 'Celica', price: 35000},
        //         {make: 'Ford', model: 'Mondeo', price: 32000},
        //         {make: 'Porsche', model: 'Boxter', price: 72000}
        //     ];
        // }
    }
</script>


