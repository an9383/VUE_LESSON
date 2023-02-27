<style scoped>
.component-parent {
  width: 50%;
  background-color: lightblue;
  padding: 5%;
}

.component-child {
  width: 80%;
  background-color: lightgray;
  padding: 5% 5% 10% 0;
}
</style>

<template>
  <div id="app" class="component-parent">
    Parent counter : {{ counter }} <br />
    <button name="parent" v-on:click="addCounter(+10)">+</button>
    <button name="parent" v-on:click="subCounter(-10)">-</button>
    <p></p>

    <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props로 전달한다. -->
    <component-child
      v-bind:num="counter"
      v-on:addCounter="addCounter"
      v-on:subCounter="subCounter"
    >
    </component-child>
  </div>
</template>
<script>
import Vue34exChild from './Vue34exChild.vue';

export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    addCounter(param) {
      debugger;
      this.$data.counter = this.$data.counter + param;
    },
    subCounter(param) {
      debugger;
      this.$data.counter = this.$data.counter + param;
    },
  },
  components: {
    /* 전역 컴포넌트인 경우는 등록하지 않는다. 전역 컴포넌트는 프로토타입 체인으로 찾을 수 있기 때문에 */
    /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
    'component-child': Vue34exChild,
  },
};
</script>
