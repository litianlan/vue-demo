<template>
  <div class="img-animation">
    <div class="rotate">
      <img src="@/assets/scape.png" alt="">
    </div>
    <div class="tips">请使用纵向访问</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
};
</script>
<style scoped>
  .img-animation {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
  }
  .rotate {
    animation: rotate 1s infinite;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tips {
    margin-top: 50px;
  }
  img {
    width: 300px;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>
