<style scoped></style>

<template>
  <div>
    <button v-on:click="showLog">show</button>
  </div>
</template>

<script>
export default {
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    showLog(e) {
      console.log(e.target);
      debugger;
      this.$emit('showLog', 'abc', 123);
    },
  },
};
</script>
