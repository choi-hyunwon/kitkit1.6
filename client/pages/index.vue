<template>
  <fragment>
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
  </fragment>
</template>

<script>
  import ComponentSection from '../components/index/ComponentSection'
  import IntroductionSection from '../components/index/IntroductionSection'
  import SupportSection from '../components/index/SupportSection'

  export default {
    layout : 'default',
    components: {
      ComponentSection,
      IntroductionSection,
      SupportSection
    }
  }
</script>


