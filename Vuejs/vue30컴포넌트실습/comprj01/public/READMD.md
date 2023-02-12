vue.js 를 이용해서 이미지 슬라이더를 만들어 보겠습니다.

## 작업 폴더 및 파일 만들기

```
    $ mkdir -p src/components/imageslider
    $ touch src/components/imageslider/ImageSliderComp.vue
    $ touch src/views/ImageSliderView.vue
```

## 이미지 슬라이더 파일 복사하기

public/images/slider 폴더를 생성하고 이미지 슬라이더에 출력할 이미지 추가

```
  $ mkdir -p [프로젝트폴더]/public/images/slider
  $ cp ./slider*.jpg  [프로젝트폴더]/public/images/slider
```

## 버튼 이미지 추가하기

```
  $ mkdir -p  [프로젝트폴더]/public/assets
  $ cp ./arrow.png [프로젝트폴더]/src/assets/
```

## 페이지 링크 만들기

src/App.vue 수정 ==>

## 라우팅 설정.

url 과 view 컴포넌트 연결

src/router/index.js 수정

## View3801ImageSlider.vue 작성

src/views/View3801ImageSlider.vue

```
<template>
  <div>
    <ImageSliderComp v-bind:option="option" />
  </div>
</template>
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
