<style scoped></style>

<template>
  <div>
    <ImageSliderComp v-bind:option="option0" />
    <ImageSliderComp v-bind:option="option1" />
    <ImageSliderComp v-bind:option="option2" />
  </div>
</template>

<script>
import ImageSliderComp from '../components/imageslider/ImageSliderComp.vue';
export default {
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      option0: [
        {
          src: `/images/slider/slider01.jpg`,
          name: '노을이 지고 난 후의 고성',
          id: 1,
        },
        {
          src: `/images/slider/slider02.jpg`,
          name: '힘들어지쳐 쓰러진 나.',
          id: 2,
        },
        {
          src: `/images/slider/slider03.jpg`,
          name: '카페에서 행복한 나',
          id: 3,
        },
      ],
      option1: [
        {
          src: `/images/slider/slider02.jpg`,
          name: '힘들어지쳐 쓰러진 나.',
          id: 2,
        },
      ],
      option2: [
        {
          src: `/images/slider/slider03.jpg`,
          name: '카페에서 행복한 나',
          id: 3,
        },
      ],
    };
  },
  components: {
    /* 전역 컴포넌트인 경우는 등록하지 않는다. 전역 컴포넌트는 프로토타입 체인으로 찾을 수 있기 때문에 */
    /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
    ImageSliderComp: ImageSliderComp,
  },
};
</script>
