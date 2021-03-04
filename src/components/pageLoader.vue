<template>
  <div class="page-loader">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 1000;
}
.cube {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-color: $lightGrey;
  transform-origin: center;
  @for $i from 1 through 4 {
    &:nth-child(#{$i}) {
      animation: grow 1.2s 0.1s * $i infinite;
    }
  }
}
@keyframes grow {
  33% {
    background-color: $darkBlue;
    transform: scaleY(1.8);
  }
  66% {
    background-color: $lightGrey;
    transform: scaleY(1);
  }
}
</style>
