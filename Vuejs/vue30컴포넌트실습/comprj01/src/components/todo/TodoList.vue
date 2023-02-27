<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
li.checked {
  background: #bbb;
  color: #fff;
  text-decoration: line-through;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>

<template>
  <section>
    <transition-group name="list" tag="ul">
      <li
        v-for="todoItem in todoItems"
        v-bind:key="todoItem.id"
        v-bind:class="checked(todoItem.done)"
        v-on:click="doneToggle(todoItem.id)"
      >
        <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        {{ todoItem.todo }}
        <span
          class="removeBtn"
          type="button"
          v-on:click.stop="removeTodo(todoItem.id)"
        >
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group>
  </section>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  /* pdtmc^2w */
  props: ['todoItems'],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      // todoItems: [],
    };
  },
  //template: ``,
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    checked(done) {
      console.log(done);
      // debugger;
      if (done) return 'checked';
      else return null; // class 속성을 만들지 마라.
    },
    doneToggle(id) {
      console.log(id);
      debugger;
      // 부모 컴포넌트에 이벤트 발산
      this.$emit('doneToggle', id);
    },
    removeTodo(id) {
      console.log(id);
      debugger;
      // 부모 컴포넌트에 이벤트를 발생
      this.$emit('removeTodo', id);

      // click 이벤트 버블링 막기==> 이벤트 취소
      // 1. window.event.stopPropagation() 호출하기
      // 2. 템플릿에 .stop 수식자 추가
      window.event.stopPropagation();
      window.event.preventDefault();
    },
  },
  components: {
    /* 전역 컴포넌트인 경우는 등록하지 않는다. 전역 컴포넌트는 프로토타입 체인으로 찾을 수 있기 때문에 */
    /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
  },
  computed: {
    /* 자동처리 + 동기식. 메서드로 작성. return 필수. data 와 공존 불가 */
    /* vuex 를 사용하는 경우
      mapGetters 는 store의 getters 를 가져오는 헬퍼메서드입니다.
      namespaced: true를 설정한 경우 네임스페이스를 사용하기 때문에 store의 모듈 명을 적어주어야 합니다.
      store 모듈에서 getters 를 가져오는 2가지 방식
      1) store.모듈명.getters 이름 바꾸어 사용하기
         ...mapGetters('모듈명', { get게터명1: '게터명1', get게터명2: '게터명2' }),
      2) store.모듈명.getters 이름 그대로 사용하기(추천방식)
         ...mapGetters('모듈명', ['게터명1', '게터명2']),
      */
  },
  watch: {
    /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
    /* store의 actions 호출 */
    // this.$store.dispatch('액션명', payload);
  },
  updated() {
    console.log('updated');
  },
};
</script>
