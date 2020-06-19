<template>
    <div class="content">
        <!-- Download Guide -->
        <ul class="guide">

            <!-- 1. -->
            <li>
                <div class="summary">
                    <div class="num">1.</div>
                    <div class="text">Before downloading, please prepare a PC and a tablet device and check the minimum device specification</div>
                </div>
                <div class="detail">
                    <ul class="list">
                        <li class="item">First step is to prepare a PC to download the install package and a tablet device to install Kitkit School. </li>
                        <li class="item">Download the install package to your PC and move the files to tablet devices to install. </li>
                        <li class="item">If you are installing Kitkit School to multiple devices, using an SD card is more efficient.</li>
                        <li class="item" style="margin: 30px 0;">Kitkit School works on Android tablet devices. Below are the minimum specification requirements for the tablets:
                            <p class="spec">
                                - Minimum OS version: <span class="yale">Android 6.0</span><br/>
                                - Storage: <span class="yale">16GB</span> with <span class="yale">6GB</span> available space<br/>
                                - RAM: <span class="yale">1.8GB</span>
                            </p>
                        </li>
                        <li class="item">You "can" check your device spec in the Settings app, under About Tablet and Storage menu.</li>
                    </ul>
                </div>
            </li>
            <!-- // 1. -->

            <!-- 2. -->
            <li>
                <div class="summary">
                    <div class="num">2.</div>
                    <div class="text">Please look through the guides (PDF and video tutorials) before downloading the install package.</div>
                </div>
                <div class="detail">
                    <!-- English -->
                    <div v-if="productType === 1" class="visualGuide row">
                        <div class="col item">
                            <img class="logo logo-eng attachment-full size-full" src="../../../assets/img/common/logo_English.png" height="86" width="200" alt="kitkit english text logo"/>
                        </div>
                        <div class="item col">
                            <a href="#" target="_blank">
                                <font-awesome-icon :icon="['fab', 'youtube']"/>
                                <p class="title">Watch<br/>Installation Guide<br/><b>Video</b></p>
                            </a>
                        </div>
                        <div class="item col">
                            <a href="#" target="_blank">
                                <font-awesome-icon :icon="['far', 'download']"/>
                                <p class="title">Download<br/>Installation Guide<br/><b>(PDF) in English</b></p>
                            </a>
                        </div>
                    </div>
                    <!-- // English -->

                    <!-- Swahili -->
                    <div v-if="productType === 2" class="visualGuide row">
                        <div class="col item">
                            <img class="logo logo-swh attachment-full size-full" src="../../../assets/img/common/logo_Swahili.png" height="71" width="200" alt="kitkit swahili text logo"/>
                        </div>
                        <div class="item col">
                            <a href="#" target="_blank">
                                <font-awesome-icon :icon="['fab', 'youtube']"/>
                                <p class="title">Watch<br/>Installation Guide<br/><b>Video</b></p>
                            </a>
                        </div>
                        <div class="item col">
                            <a href="#" target="_blank">
                                <font-awesome-icon :icon="['far', 'download']"/>
                                <p class="title">Download<br/>Installation Guide<br/><b>(PDF) in Swahili</b></p>
                            </a>
                        </div>
                    </div>
                    <!-- // Swahili -->

                </div>
            </li>
            <!-- // 2. -->

            <!-- 3. -->
            <li>
                <div class="summary">
                    <div class="num">3.</div>
                    <div class="text">Download the install package (all files) to your PC or SD Card.</div>
                </div>
                <div class="detail">
                    <div>
                        <div class="header">
                            <img width="116" height="62" src="https://kitkitschool.com/wp-content/uploads/2019/08/cropped-kitkitlogo_eng.png" class="logo attachment-full size-full" rcset="https://kitkitschool.com/wp-content/uploads/2019/08/cropped-kitkitlogo_eng.png 500w, https://kitkitschool.com/wp-content/uploads/2019/08/cropped-kitkitlogo_eng-300x156.png 300w" sizes="(max-width: 500px) 100vw, 500px" alt="kitkit school logo"/>

                            <h2 v-if="productType===1" class="title">English & Math</h2>
                            <h2 v-if="productType===2" class="title">Swahili & Math</h2>

                        </div>
                        <div class="packages">
                            <div class="all">
                                <button class="btn btn-primary btn-lg">
                                    Download All <b style="color:#5a3428">1,23GB</b>
                                </button>
                            </div>
                            <ul class="list">
                                <li class="item">
                                    <span>Kitkit School Installer : <b>12.56MB</b></span>
                                    <button class="btn btn-primary">Download</button>
                                </li>
                                <li class="item">
                                    <span>Kitkit School Learning App : <b>200MB</b></span>
                                    <button class="btn btn-primary">Download</button>
                                </li>
                                <li class="item">
                                    <span>Book Viewer : <b>1.2GB</b></span>
                                    <button class="btn btn-primary">Download</button>
                                </li>
                                <li class="item">
                                    <span>Book Data : <b>18MB</b></span>
                                    <button class="btn btn-primary">Download</button>
                                </li>
                                <li class="item">
                                    <span>Kitkit School : <b>72MB</b></span>
                                    <button class="btn btn-primary">Download</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
            <!-- // 3. -->

            <!-- 4. -->
            <li>
                <div class="summary">
                    <div class="num">4.</div>
                    <div class="text">Move the downloaded files from PC to your tablet device and install.</div>
                </div>
                <span style="font-size: 24px; padding-left: 60px;">Please refer to the guides (PDF and videos) for detailed guidance.</span>
            </li>
            <!-- // 4. -->

            <!-- 5. -->
            <li>
                <div class="summary" style="padding-top: 50px;">
                    <div class="num">5.</div>
                    <div class="text">If you have successfully installed Kitkit School, please refer to user guide manuals and video tutorials to start playing Kitkit School.</div>
                </div>
                <div class="detail">

                    <!-- English -->
                    <div v-if="productType === 1" class="visualGuide row">
                        <div class="col item">
                            <img class="logo logo-eng attachment-full size-full" src="../../../assets/img/common/logo_English.png" height="86" width="200" alt="kitkit english text logo"/>
                        </div>
                        <div class="item col">
                            <a href="#" target="_blank">
                                <font-awesome-icon :icon="['fab', 'youtube']"/>
                                <p class="title">Watch<br/>User Guide<br/><b>Video</b></p>
                            </a>
                        </div>
                        <div class="item col">
                            <a href="#" target="_blank">
                                <font-awesome-icon :icon="['far', 'download']"/>
                                <p class="title">Download<br/>User Guide<br/><b>(PDF) in English</b></p>
                            </a>
                        </div>
                    </div>
                    <!-- // English -->

                    <!-- Swahili -->
                    <div v-if="productType === 2" class="visualGuide row">
                        <div class="col item">
                            <img class="logo logo-swh attachment-full size-full" src="../../../assets/img/common/logo_Swahili.png" height="71" width="200" alt="kitkit swahili text logo"/>
                        </div>
                        <div class="item col">
                            <a href="#" target="_blank">
                                <font-awesome-icon :icon="['fab', 'youtube']"/>
                                <p class="title">Watch<br/>User Guide<br/><b>Video</b></p>
                            </a>
                        </div>
                        <div class="item col">
                            <a href="#" target="_blank">
                                <font-awesome-icon :icon="['far', 'download']"/>
                                <p class="title">Download<br/>User Guide<br/><b>(PDF) in Swahili</b></p>
                            </a>
                        </div>
                    </div>
                    <!-- // Swahili -->

                </div>
            </li>
            <!-- // 5. -->

            <!-- 6. -->
            <li>
                <div class="summary" style="padding-bottom: 50px;">
                    <div class="num">6.</div>
                    <div class="text">Please go to the Support page for more information on download, installation, and using Kitkit School</div>
                </div>
            </li>
            <!-- // 6. -->

        </ul>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'download',
        components: {

        },
        computed: {
            ...mapGetters({
                productType : 'getProductType'
            })
        }
    }
</script>

<style>
    .content .guide {
        padding-top: 30px;
    }



    /* Summary */
    .content .guide .summary {
        padding-top: 20px;
        margin-bottom: 30px;
        font-size: 36px;
        font-weight: bold;
        font-family: Ubuntu-Regular;
    }
    .content .guide .summary .num {
        position: absolute;
    }
    .content .guide .summary .text {
        margin-left: 43px;
    }
    /* // Summary */



    /* Detail */
    .content .guide .detail {
        margin-bottom: 30px;
        padding: 30px 40px;
        border: solid 1px #c2c2c2;
        border-radius: 16px;
        background-color: #f9f9f9;

        font-size: 24px;
        font-style: normal;
        line-height: 29px;
        text-align: left;
        color: #333333;
    }

    .content .guide .detail .header {
        text-align: center;
    }
    .content .guide .detail .header .title {
        letter-spacing: -1.3px;
        padding-left: 13px;
    }

    .content .guide .detail .list {
        padding: 0;
    }
    .content .guide .detail .list .item {
        position: relative;
        padding-bottom: 12px;
        padding-left: 12px;
    }
    .content .guide .detail .list .item::before {
        content: '';
        position: absolute;
        top: 12px;
        left: 0;
        width: 6px;
        height: 6px;
        border-radius: 3px;
        background-color: #333;
    }

    .content .guide .detail .item .spec {
        padding-left: 12px;
        padding-top: 12px;
        line-height: 34px;
    }
    .content .guide .detail .visualGuide {
        min-width: 960px;
        width: 960px;
        margin: 0 auto;
        padding: 20px 0;
    }
    .content .guide .detail .visualGuide .item {
        width: 240px;
        max-width: 240px;
        margin: 0 60px;
        text-align: center;
    }

    .content .guide .detail .visualGuide .item:first-child {
        margin-left: 0;
    }

    .content .guide .detail .visualGuide .item:last-child {
        margin-right: 0;
    }

    .content .guide .detail .visualGuide .item .logo-eng {
        margin-top: 58px;
    }

    .content .guide .detail .visualGuide .item .logo-swh {
        margin-top: 65px;
    }

    .content .guide .detail .visualGuide .item > a {
        display: block;
        width: 100%;
        height: 100%;
    }

    .content .guide .detail .visualGuide .item svg {
        color: #0c6290;
        font-size: 80px;
    }
    .content .guide .detail .visualGuide .item .title {
        margin-top: 34px;
        font-size: 24px;
        font-weight: normal;
        line-height: 34px;
        letter-spacing: normal;
        color: #333333;
    }

    .content .guide .detail .packages {
        width: 740px;
        margin: 0 auto;
        border-radius: 10px;
        border: solid 1px #707070;
        background-color: #f2f2f2;
    }
    .content .guide .detail .packages .all {
        background-color: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding: 30px 200px;
        border-bottom: 1px solid #707070;
    }
    .content .guide .detail .packages .all .btn {
        width: 340px;
        height: 60px;
        font-size: 24px;
    }
    .content .guide .detail .packages .list {
        padding: 20px 50px 50px;
    }
    .content .guide .detail .packages .list .item {
        margin-top: 20px;
        height: 45px;
        padding-top: 9px;
        padding-bottom: 7px;
    }
    .content .guide .detail .packages .list .item span{
        line-height: 29px;
    }
    .content .guide .detail .packages .list .item .btn {
        position: absolute;
        right: 0;
        top: 0;
        width: 160px;
        height: 45px;
    }
    /* // Detail */

    @media (max-width: 1420px) {
        .content .guide .detail .visualGuide {
            min-width: 800px;
            width: 800px;
        }

        .content .guide .detail .visualGuide .item {
            margin: 0 20px;
        }
    }
</style>

