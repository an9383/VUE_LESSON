<style scoped>
span {
  border: 1px dashed blue;
  background-color: lightgray;
  padding: 5px;
}
</style>

<template>
  <div>
    파일 컴포넌트가 등록되었습니다!
    <span v-on:click="lclick">
      {{ localmsg }}
    </span>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  /* pdtmc^2w */
  props: ['localmsg'],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {};
  },
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    lclick(e) {
      console.log(e.target);
    },
  },
};
</script>
