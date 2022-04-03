<template>
  <div class="media">
    <div class="header">
      <div class="pc" :style="{backgroundImage:`url(${bgImg})`}">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="mobile">
        <img src="@/assets/logo.png" alt="">
      </div>
    </div>
    <div class="image">
      <div class="box">
        <img v-for="(item, index) in fileList" :key="index" :src="item" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import bgImg from '@/assets/bg.png';
export default {
  data() {
    return {
      bgImg: bgImg,
      fileList: [
        require('@/assets/img-1.jpg'),
        require('@/assets/img-1.jpg'),
        require('@/assets/img-1.jpg'),
        require('@/assets/img-1.jpg'),
        require('@/assets/img-1.jpg'),
        require('@/assets/img-1.jpg'),
      ],
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {
          keepShow: true,
        },
        bar: {
          hoverStyle: true,
          onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
          background: '#F5F5F5', //滚动条颜色
          opacity: 0.5, //滚动条透明度
          'overflow-x': 'hidden',
        },
        videoData: [],
      },
    };
  },
  methods: {
    // 获取多个图片
    getImage() {
      this.$axios
        .get("image/list", {
          params: {}
        })
        .then(response => {
          const items = response.data || [];
          items.forEach(x => {
            this.previewImage(base64 => {
              this.fileList.push({
                name: x.imageName,
                url: base64,
                response: {
                  data: [x]
                }
              });
            });
          });
        });
    },
    // 预览
    previewImage(callback) {
      this.$axios
        .get("/download/image", {
          responseType: "arraybuffer"
        })
        .then(response => {
          const blob = new window.Blob([response.data], {
            type: "image/png"
          });
          this.blobToBase64(blob, callback);
        });
    },
    blobToBase64(blob, callback) {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = e => {
        callback(e.target.result);
      };
    }
  }
};
</script>
<style scoped>
/* 
  pc
*/
@media screen and (min-width: 1025px) {
  .header {
    width: 100%;
    height: 260px;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .pc {
    width: 100%;
    height: 100%;
  }
  .pc img {
    margin-top: 130px;
    margin-left: 200px;
  }
  .image {
    width: 100%;
    height: calc(100% - 260px);
    background: #1e2329;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box {
    width: 70%;
    height: 100%;
    text-align: center;
    line-height: 50px;
  }
  .box img {
    width: 300px;
    margin: 20px 30px;
  }
  .mobile {
    display: none;
  }
}

/* 
  平板电脑或Ipad
*/
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .pc {
    display: none;
  }
  .header {
    width: 100%;
    height: 60px;
    background: #121413;
  }
  .mobile {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .mobile img {
    height: 40px;
    margin-left: 20px
  }
  .image {
    width: 100%;
    height: calc(100% - 60px);
    background: #1e2329;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box {
    width: 100%;
    height: 90%;
    text-align: center;
    line-height: 50px;
  }
  .box img {
    width: 270px;
    margin: 20px 40px;
  }
}

/*
  手机
 */
@media screen and (min-width: 320px) and (max-width: 767px) {
  .pc {
    display: none;
  }
  .header {
    width: 100%;
    height: 40px;
    background: #121413;
  }
  .mobile {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .mobile img {
    height: 25px;
    margin-left: 20px
  }
  .image {
    width: 100%;
    height: calc(100% - 40px);
    background: #1e2329;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box {
    width: 100%;
    height: 100%;
    text-align: center;
    /* line-height: 50px; */
  }
  .box img {
    width: 250px;
    margin: 10px 0px;
  }
}
.media {
  width: 100%;
  height: 100%;
}
</style>
