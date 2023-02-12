<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>

<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearAll">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    clearAll(e) {
      console.log(e.target);
      // debugger;
      // clearAll 이벤트 발생
      this.$emit('clearAll');
    },
  },
};
</script>
