<template>
    <div class="content support">

        <!-- Guide -->
        <h2 style="margin-bottom: 30px;">Please first check these resources (manuals and tutorial videos):</h2>
        <div class="resource">
            <!-- TODO: English / Swahili 분기 필요-->
            <!-- English -->
<!--            <div class="row">-->
<!--                <div class="col group">-->
<!--                    <div class="row">-->
<!--                        <div class="col item">-->
<!--                            <img class="logo attachment-full size-full" src="../../../assets/img/common/logo_English.png" height="86" width="200" alt="kitkit english text logo"/>-->
<!--                            &lt;!&ndash;<img class="logo attachment-full size-full" src="../../../assets/img/common/logo_Swahili.png" height="86" width="200" alt="kitkit swahili text logo"/>&ndash;&gt;-->
<!--                        </div>-->
<!--                        <div class="col item">-->
<!--                            <a href="#" target="_blank">-->
<!--                                <font-awesome-icon :icon="['far', 'download']"/>-->
<!--                                <p class="title">Download<br/>Installation Guide<br/><b>(PDF) in English</b></p>-->
<!--                            </a>-->
<!--                        </div>-->
<!--                        <div class="col item">-->
<!--                            <a href="#" target="_blank">-->
<!--                                <font-awesome-icon :icon="['far', 'download']"/>-->
<!--                                <p class="title">Download<br/>User Guide<br/><b>(PDF) in English</b></p>-->
<!--                            </a>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="col group">-->
<!--                    <div class="row">-->
<!--                        <div class="col item">-->
<!--                            <a href="#" target="_blank">-->
<!--                                <font-awesome-icon :icon="['far', 'download']"/>-->
<!--                                <p class="title" style="margin-top: 20px;">Download Learning<br/>Assessment and<br/>Dashboard Guide<br/><b>(PDF) in English</b></p>-->
<!--                            </a>-->
<!--                        </div>-->
<!--                        <div class="col item">-->
<!--                            <a href="#" target="_blank">-->
<!--                                <font-awesome-icon :icon="['fab', 'youtube']"/>-->
<!--                                <p class="title">Watch<br/>Installation Guide<br/><b>Video</b></p>-->
<!--                            </a>-->
<!--                        </div>-->
<!--                        <div class="col item">-->
<!--                            <a href="#" target="_blank">-->
<!--                                <font-awesome-icon :icon="['fab', 'youtube']"/>-->
<!--                                <p class="title">Watch<br/>User Guide<br/><b>Video</b></p>-->
<!--                            </a>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

            <!-- Swahili -->
            <div class="row">
                <div class="col group">
                    <div class="row">
                        <div class="col item">
                            <img class="logo attachment-full size-full" src="../../../assets/img/common/logo_Swahili.png" height="71" width="200" alt="kitkit swahili text logo"/>
                        </div>
                        <div class="col item">
                            <a href="#" target="_blank">
                                <font-awesome-icon :icon="['far', 'download']"/>
                                <p class="title">Download<br/>Installation Guide<br/><b>(PDF) in Swahili</b></p>
                            </a>
                        </div>
                        <div class="col item">
                            <a href="#" target="_blank">
                                <font-awesome-icon :icon="['far', 'download']"/>
                                <p class="title">Download<br/>User Guide<br/><b>(PDF) in Swahili</b></p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col group">
                    <div class="row">
                        <div class="col item">
                            <a href="#" target="_blank">
                                <font-awesome-icon :icon="['far', 'download']"/>
                                <p class="title" style="margin-top: 20px;">Download Learning<br/>Assessment and<br/>Dashboard Guide<br/><b>(PDF) in Swahili</b></p>
                            </a>
                        </div>
                        <div class="col item">
                            <a href="#" target="_blank">
                                <font-awesome-icon :icon="['fab', 'youtube']"/>
                                <p class="title">Watch<br/>Installation Guide<br/><b>Video</b></p>
                            </a>
                        </div>
                        <div class="col item">
                            <a href="#" target="_blank">
                                <font-awesome-icon :icon="['fab', 'youtube']"/>
                                <p class="title">Watch<br/>User Guide<br/><b>Video</b></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- // Guide -->

        <!-- FAQ -->
        <h2>FAQ</h2>
        <div class="faq">
            <!-- Download -->
            <h3 class="subtitle" style="margin-top: 30px;"><font-awesome-icon class="icon" :icon="['far', 'dot-circle']"/>Download</h3>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Can I install Kitkit School to tablet devices with other OS? Does it need to be an Android?</div>

                </div>
                    </a>
                <p class="answer">
                    Kitkit School is designed to operate on Android tablet devices only.
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Where do I check the device specification?</div>

                </div>
                    </a>
                <p class="answer">
                    Go to the Settings app on the tablet to find your device information.<br/>
                    - For Android OS versions, go to About Tablet or System menu.<br/>
                    - For Storage, go to the Storage menu.<br/>
                    - For Memory, go to the Memory menu.<br/>
                    The Settings app can differ by manufacturers. Contact your manufacturer for more information.
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Do I need to download all files from the list for installation?</div>

                </div>
                    </a>
                <p class="answer">
                    You must download all files listed on our download page. Click “Download All” to download all files at once.<br/>
                    “Installer” app can be deleted on the tablet after you have successfully installed Kitkit School.
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Can I directly download the installation package from the tablet device?</div>

                </div>
                    </a>
                <p class="answer">
                    If you have a stable internet connection, it is possible to download the installation files to your tablet device. However, if you are downloading to be installed for multiple devices, we recommend using a PC to download the files and then move them to the tablet devices.
                </p>
            </div>

            <!-- Installation -->
            <h3 class="subtitle"><font-awesome-icon class="icon" :icon="['far', 'dot-circle']"/>Installation</h3>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Can I install Kitkit School to multiple numbers of tablet devices?</div>

                </div>
                    </a>
                <p class="answer">
                    During the sign-up process, you should have indicated the number of licenses. You can install Kitkit School as long as it does not exceed the number. In terms of users per device, you can add up to 100 users per device.
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Installation is not completed.</div>

                </div>
                    </a>
                <p class="answer">
                    First, please check your device specification. It must meet below minimum requirements:<br/>
                    - Minimum OS version: Android <span class="yale">6.0</span><br/>
                    - Storage: <span class="yale">16GB</span> with <span class="yale">6GB</span> available space<br/>
                    - RAM: <span class="yale">2GB</span><br/>
                    Check if you have downloaded all files listed on the page and are moved to your tablet device. When you have all files, the installer app will show<br/>
                    a yellow icon next to each file name.<br/>
                    Check if you have an error message. Depending on the device, the installation may not be successful due to a lack of storage or RAM memory. If<br/>
                    there is not enough space, free up space, or find another device that meets the minimum requirements.
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">I would like to modify the number of licenses I requested.</div>

                </div>
                    </a>
                <p class="answer">
                    Please send an email to <a class="email" href="mailto:kitkitsupport@enuma.com">kitkitsupport@enuma.com</a> with your account information such as your name, ID, email address, and organization.
                </p>
            </div>

            <!-- Using Kitkit School -->
            <h3 class="subtitle"><font-awesome-icon class="icon" :icon="['far', 'dot-circle']"/>Using Kitkit School</h3>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Would I still be able to access other applications after installing Kitkit School?</div>

                </div>
                    </a>
                <p class="answer">
                    Yes. You can still use other applications other than Kitkit School.
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Can I add multiple users to one device installed with Kitkit School?</div>

                </div>
                    </a>
                <p class="answer">
                    Yes. You can add up to 100 users to one tablet device. You can check how to add or remove users from the user guide manuals.
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Can I transfer the user data from one device to another?</div>

                </div>
                    </a>
                <p class="answer">
                    No. The user data will be stored on the device being used and cannot be transferred.
                </p>
            </div>

            <!-- About Dashboard -->
            <!-- TODO: 내용 누락 -->
            <h3 class="subtitle"><font-awesome-icon class="icon" :icon="['far', 'dot-circle']"/>About Dashboard</h3>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">What is a dashboard?</div>

                </div>
                    </a>
                <p class="answer">
                    ...
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">How do I upload the data?</div>

                </div>
                    </a>
                <p class="answer">
                    ...
                </p>
            </div>

            <!-- Troubleshooting -->
            <h3 class="subtitle"><font-awesome-icon class="icon" :icon="['far', 'dot-circle']"/>Troubleshooting</h3>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Kitkit School app crashes or fails to launch on screen.</div>

                </div>
                    </a>
                <p class="answer">
                    Please check if all files from the download page are fully installed on the tablet device. Go to the Settings app and find the “Applications” menu and find a list of all apps installed. You should be able to find “Kitkit School”, “Kikit School Learning App”, “Kitkit Book Viewer”, and “Kikit Book Data”.<br/>The issue may be temporary. Exit the app and relaunch the app. Try restarting the device by turning off and on.
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Tablet screen turns off while using Kitkit School.</div>

                </div>
                    </a>
                <p class="answer">
                    Usually the screen display time is set to 30 seconds or less by default. If the user is not active the screen will turn off after the default screen display time.<br/>
                    Kitkit school is a learning app and users may not touch the screen while exploring some contents for a longer time. It is recommended that you change the screen display time to over 10 minutes. Go to the Settings app and find a display setting menu to change.
                </p>
            </div>
            <div class="qna">
                <a href="#" @click="toggleActive">
                <div class="question">

                        <font-awesome-icon class="icon closed" :icon="['fal', 'chevron-circle-right']"/>
                        <font-awesome-icon class="icon open" :icon="['fal', 'chevron-circle-down']"/>
                        <div class="text">Can I reinstall Kitkit School?</div>

                </div>
                    </a>
                <p class="answer last">
                    You may have to reinstall Kitkit School apps if the above troubleshooting steps do not resolve the issue.<br/>
                    Before installing Kitkit School again, please remove all existing applications.<br/>
                    Go to the Settings app and find the “Applications” menu and find a list of all apps installed. You should be able to find “Kitkit School”, “Kikit School Learning App”, “Kitkit Book Viewer”, and “Kikit Book Data”. Click each one of them and tap “Uninstall”, and remove all apps.<br/>
                    Download and move the files from PC to tablet and stall installation process, by referring to the installation guide.
                </p>
            </div>
        </div>
        <!-- // FAQ -->

        <!-- Contact Us -->
        <h2 style="margin-top: 32px;">Contact Us</h2>
        <div class="contactInfo">
            Please send us an email with a description of the issue, in addition to your account information (your id, name, email address, and organization) to <a class="email" href="mailto:kitkitsupport@enuma.com">kitkitsupport@enuma.com</a>
        </div>
        <!-- // Contact Us -->
    </div>
</template>

<script>
    export default {
        name: 'support',
        components: {

        },
        data() {
            return {
                activeA1: false,
            }
        },
        methods : {
            toggleActive(e){
                e.preventDefault();
                // toggle div.qna with 'active' class
                e.target.className === 'question'
                    ? e.target.parentNode.parentNode.classList.toggle('active')
                    : e.target.parentNode.parentNode.parentNode.classList.toggle('active')
            }
        }
    }
</script>

<style>
    .content.support h2 {
        margin-top: 30px;
    }

    /* Guide Resource */
    .support .resource {
        border-radius: 16px;
        border: solid 1px #c2c2c2;
        background-color: #f9f9f9;
        min-width: 780px;
        padding: 50px 10px 20px;
        margin: 0 auto;
    }
    .support .resource .group {
        height: 231px;
        min-width: 840px;
    }
    .support .resource .group:last-child {
        margin-top: 30px;
    }
    .support .resource .group .row {
        width: 840px;
        margin: 0 auto;
    }
    .support .resource .item {
        width: 240px;
        min-width: 240px;
        max-width: 240px;
        text-align: center;
        margin: 0 20px 10px;
    }
    @media (min-width: 1880px){
        .support .resource {
            min-width: 780px;
        }

        .support .resource > .row {
            margin: 0 auto;
            width: 1560px;
            max-width: 1560px;
        }

        .support .resource .item {
            margin: 0 10px 10px;
        }

        .support .resource .group {
            min-width: 780px;
        }

        .support .resource .group:last-child {
            margin-top: 0;
        }

        .support .resource .group .row {
            width: 780px;
        }
    }
    .support .resource .item .logo {
        margin-top: 58px;
    }
    .support .resource .item svg {
        color: #0c6290;
        font-size: 80px;
    }
    .support .resource .item .title {
        margin-top: 34px;
        font-size: 24px;
        font-weight: normal;
        line-height: 34px;
        letter-spacing: normal;
        color: #333333;
    }
    /* // Guide Resource */



    /* FAQ */
    .support .faq .subtitle {
        font-size: 32px;
        line-height: 39px;
        font-weight: 900;
        letter-spacing: normal;
        color: #333333;
        margin-top: 50px;
        padding-bottom: 20px;
    }
    .support .faq .subtitle .icon {
        margin-right: 10px;
    }
    .support .faq .qna {
        padding: 0 20px 0 40px;
        font-size: 24px;
        font-weight: bold;
    }
    .support .faq .qna .question {
        position: relative;
        border-top: 1px solid #dedede;
        padding: 22px 0 19px;
    }
    .support .faq .qna > a {
        display: block;
        width: 100%;
        height: 100%;
        color: #333333;
    }
    .support .faq .qna.active > a {
        color: #f6921e;
    }
    .support .faq .qna .question .icon {
        position: absolute;
        top: 24px;
        left: 0;
    }
    .support .faq .qna .question .icon.closed {
        display: inline;
    }
    .support .faq .qna .question .icon {
        display: none;
    }
    .support .faq .qna.active .question .icon.closed {
        display: none;
    }
    .support .faq .qna.active .question .icon.open {
        display: inline;
    }
    .support .faq .qna .question .text {
        margin-left: 34px;
    }
    .support .faq .qna .answer {
        margin-left: 34px;
        padding: 12px 0 18px;
        line-height: 50px;
        display: none;
    }
    .support .faq .qna .answer.last {
        padding-bottom: 6px;
    }
    .support .faq .qna.active .answer {
        display: block;
    }
    /* // FAQ */



    /* Contact */
    .support .contactInfo {
        padding: 20px 37px 80px 60px;
        color: #666;
        font-size: 24px;
        line-height: 36px;
        font-weight: normal;
    }
    .email {
        color: #0c6290;
        text-decoration: underline;
    }
    .email:hover {
        color: #0c6290;
        text-decoration: underline;
    }
    /* // Contact */


    @media (max-width: 1879px) {
        .support .resource {
            padding-bottom: 30px;
        }
        .support .resource .group:last-child {
            margin-top: 80px;
        }
    }
</style>
