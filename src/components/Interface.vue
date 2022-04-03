<template>
  <div class="hello">
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  created() {
  },
  methods: {
    getData() {
      this.$get({
        url: '/demo',
        data: {},
        async: true,
        success: function() {
          console.log('成功');
        },
        error: function() {
          console.log('失败');
        }
      })
    }
  },
}
</script>
<style scoped>
</style>
