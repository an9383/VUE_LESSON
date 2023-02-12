<style scoped></style>

<template>
  <div id="app">
    <h2>vuex 를 사용하는 프로그램을 만들어 본다.</h2>
    <Vue4301Comp></Vue4301Comp>
  </div>
</template>

<script>
import Vue4301Comp from '../components/vue4301/Vue4301Comp.vue';

export default {
  components: {
    /* 전역 컴포넌트인 경우는 등록하지 않는다. 전역 컴포넌트는 프로토타입 체인으로 찾을 수 있기 때문에 */
    /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
    Vue4301Comp: Vue4301Comp,
  },
};
</script>
