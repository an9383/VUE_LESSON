<style scoped>
.main {
  border: 1px solid black;
  background-color: yellow;
}
</style>

<template>
  <div class="main">
    {{ msg }}
    <child11 />
    {{ msg }}
  </div>
</template>

<script>
import child11 from './CompChild11.vue';
export default {
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      msg: 'child1',
    };
  },
  components: {
    child11: child11,
  },
};
</script>
