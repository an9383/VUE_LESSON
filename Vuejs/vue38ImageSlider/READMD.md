vue.js 를 이용해서 이미지 슬라이더를 만들어 보겠습니다.

## 작업 폴더 및 파일 만들기

```
    $ ls  # package.json 이 있는지 확인
    $ mkdir -p src/components/imageslider
    $ touch src/components/imageslider/ImageSliderComp.vue  # 프리젠테이션 컴포넌트 만들기
    $ touch src/views/ImageSliderView.vue                   # 컨테이너 컴포넌트 만들기
```

## 이미지 슬라이더 파일 복사하기

public/images/slider 폴더를 생성하고 이미지 슬라이더에서 사용할 이미지 추가

```
  $ ls  # package.json 이 있는지 확인
  $ mkdir -p [프로젝트폴더]/public/images/slider
  $ cp ./slider*.jpg  [프로젝트폴더]/public/images/slider
```

## 버튼 이미지 추가하기

```
  $ ls  # package.json 이 있는지 확인
  $ mkdir -p  ./public/assets
  $ cp ./arrow.png [프로젝트폴더]/src/assets/
```

## 페이지 링크 만들기

src/App.vue 수정 ==>
```
    | <router-link to="/imageslider">imageslider</router-link>
```

## 라우팅 설정.

url 과 view 컴포넌트 연결

src/router/index.js 수정
```
  {
    path: '/imageslider',
    name: 'imageslider',
    component: () => import('../views/ImageSliderView.vue'),
  },
```

## ImageSliderView.vue 작성

src/views/ImageSliderView.vue

```
<template>
  <div>
    <ImageSliderComp v-bind:option="option" />
  </div>
</template>
```

## ImageSliderView.vue 에서 사용할 data
```
    option: [
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

```

## ImageSliderComp.vue 작성

src/components/imageslider/ImageSliderComp.vue

```
<style scoped>
.sliderWrap > img {
  object-fit: cover;
  box-shadow: 0 8px 16px rgb(0 0 0 / 50%);
}

.sliderWrap {
  width: 1000px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
}

.sliderWrap > span {
  display: block;
  position: absolute;
  top: calc(50% - 1.25rem);
  font-size: 2.5rem;
  transition: all 0.5s ease;
}

.sliderWrap span:hover {
  cursor: pointer;
}

.sliderWrap > div {
  display: inline-block;
  width: 100%;
}

p {
  position: absolute;
  bottom: 10px;
  right: 55px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  padding: 10px;
}

span.left {
  left: 30px;
}

span.right {
  right: 30px;
  rotate: (180);
}

span.right > img {
  transform: rotate(180deg);
  width: 70%;
}

span.left > img {
  width: 70%;
}

.dot {
  position: relative;
}

.dot > span {
  height: 12px;
  width: 12px;
  margin: 0 4px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: all 0.5s ease;
  box-shadow: inset 0 1px 1px 0px rgb(0 0 0 / 60%), 0px 1px 1px 0px white;
}

.dot > span:hover,
.dot > span.active {
  cursor: pointer;
  background-color: #717171;
}
</style>

<template>
  <div class="sliderWrap">
    <span class="left" v-on:click="toLeft">
      <img src="../../assets/arrow.png" alt="" />
    </span>
    <span class="right" v-on:click="toRight">
      <img src="../../assets/arrow.png" alt="" />
    </span>
    <p>{{ activateImg.name }}</p>
    <img
      v-bind:src="activateImg.src"
      v-bind:alt="activateImg.name"
      v-bind:style="{
        width: `${width}px`,
        height: `${height}px`,
      }"
    />
    <div class="dot">
      <span
        v-for="(image, index) in option"
        v-bind:key="image.id"
        v-on:click="setActive(index)"
        v-bind:class="{ active: currIdx === index }"
      >
      </span>
    </div>
  </div>
</template>
```


## 실행시 0번 이미지 나오게 코드 작성



## toRight() 기능 완성
Math.min() 을 사용하여 기능 완성

```
    this.$data.currIdx = Math.min(
      this.$data.currIdx + 1,
      this.$props.option.length - 1,
    );
```

## toLeft() 기능 완성A
Math.max() 을 사용하여 기능 완성

```
    this.$data.currIdx = Math.max(this.$data.currIdx - 1, 0);
```