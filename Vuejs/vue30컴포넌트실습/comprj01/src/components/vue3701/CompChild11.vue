<style scoped>
.test {
  font-style: italic;
}
</style>
<template>
  <div class="test">
    <h3>{{ msg }}</h3>
  </div>
</template>
<script>
export default {
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      msg: 'child11',
    };
  },
};
</script>
