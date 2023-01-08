new Vue({
    /* edtmc^2w */
    el: '',
    data: {
      /* 인스턴스 안에서 사용되는 변수 등록, 공유 변수 */
      /* data 프로퍼티 값 변경시 this.set(object, key, value) 을 사용 */
      
    },
    //template: ``,
    methods: {
      /* 이벤트 핸들러 등록 + 일반 함수 */
      
    },
    components: {
      /* 전역 컴포넌트인 경우는 등록하지 않는다. 전역 컴포넌트는 프로토타입 체인으로 찾을 수 있기 때문에 */
      /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
      
    }, 
    computed: {
      /* 자동처리 + 동기식. 변수명이 메서드 명이다. 메서드로 작성. return 필수.  data 와 공존 불가 */
      
    },
    watch: {
      /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */
      
    },
    created() {
      console.log("created");
    },
    mounted() {
      console.log("mounted");
    },
    updated() {
      console.log("updated");
    },
});
