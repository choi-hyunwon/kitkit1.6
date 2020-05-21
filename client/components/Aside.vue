<template>
  <aside class="doc-aside" style="overflow-y:auto">
    <header class="header bg-header">
      <nuxt-link class="navbar-brand" to="/"><img src="~@/assets/img/common/logo.png" alt="MyUI"></nuxt-link>
    </header>

    <div class="box-snb">
      <div class="nav snb" id="navbar-example2">

        <a @click="reload" class="h-title" :class="{ active: menu === 'DocumentDoc'}">
          <nuxt-link to="/doc/DocumentDoc"><i class="fas fa-bolt" ></i>시작하기</nuxt-link>
        </a>
        <b-navbar pills vertical class="m-menu flex-column" v-b-scrollspy:scrollspy-nested :style="{display : docDisplay}">
          <b-nav pills vertical class="m-menu flex-column">
            <b-nav-item class="m-item nav-link active" href="#item-1-1">소개</b-nav-item>
            <b-nav-item class="m-item nav-link" href="#item-1-2">다운로드</b-nav-item>
            <b-nav-item class="m-item nav-link" href="#item-1-3">빌드도구</b-nav-item>
            <b-nav-item class="m-item nav-link" href="#item-1-4">브라우저&디바이스</b-nav-item>
          </b-nav>
        </b-navbar>

        <a @click="reload" class="h-title" :class="{ active: menu === 'ComponentDoc'}">
          <nuxt-link to="/doc/ComponentDoc"><i class="fas fa-bolt" ></i>구성요소</nuxt-link>
        </a>
        <b-navbar pills vertical class="m-menu flex-column" v-b-scrollspy:scrollspy-nested :style="{display : comDisplay}">
          <b-nav pills vertical  class="m-menu flex-column">
            <b-nav-item class="m-item nav-link active" href="#item-2-1">배지(Badge)</b-nav-item>
            <b-nav-item class="m-item nav-link" href="#item-2-2">경로(Breadcrumb)</b-nav-item>
            <b-nav-item class="m-item nav-link" href="#item-2-3">단계(Step)</b-nav-item>
            <b-nav-item class="m-item nav-link" href="#item-2-4">슬라이드(Slide)</b-nav-item>
            <b-nav-item class="m-item nav-link" href="#item-2-5">버튼(Button)</b-nav-item>
            <b-nav-item class="m-item nav-link" href="#item-2-6">카드(Cards)</b-nav-item>
            <b-nav-item class="m-item nav-link" href="#item-2-7">폼(Forms)</b-nav-item>
            <b-nav-item class="m-item nav-link" href="#item-2-8">페이지네이션(Pagination)</b-nav-item>
            <b-nav-item class="m-item nav-link" href="#item-2-9">탭(Tab)</b-nav-item>
            <b-nav-item class="m-item nav-link" href="#item-2-10">테이블(Table)</b-nav-item>
            <b-nav-item class="m-item nav-link" href="#item-2-11">사이드 네비게이션 바(SNB)</b-nav-item>
            <b-nav-item class="m-item nav-link" href="#item-2-12">네비게이션 바(Navigation Bars)</b-nav-item>
            <b-nav-item class="m-item nav-link" href="#item-2-13">모달(Modal)</b-nav-item>
          </b-nav>
        </b-navbar>
      </div>
    </div>
  </aside>
</template>

<script>
  export default {
    props: {
      menu: {
        String,
        default() {
          return 'DocumentDoc'
        }
      }
    },
    computed: {
      docDisplay() {
        return this.menu === 'DocumentDoc' ? 'block' : 'none';
      },
      comDisplay() {
        return this.menu === 'DocumentDoc' ? 'none' : 'block';
      }
    },
    methods: {
      reload (){
        window.location.reload();
      }
    }
  }
</script>
