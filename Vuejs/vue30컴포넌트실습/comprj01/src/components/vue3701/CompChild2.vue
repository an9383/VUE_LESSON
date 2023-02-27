<style scoped>
.main {
  border: 1px solid black;
  background-color: aqua;
}
</style>

<template>
  <div class="main">
    {{ msg }}
  </div>
</template>

<script>
export default {
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      msg: 'child2',
    };
  },
};
</script>
