<template>
  <div class="header">
    <div class="logo" @click="clickLogo">
        阜南农考
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
     it: ''
    }
  },
  methods: {
    clickLogo () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
  .header {
    height: 80px;
    background: rgba(68, 72, 74, 0);
    display: flex ;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    .logo{
      display: flex;
      align-items: center;
      cursor: pointer;
      img{
        height: 60px;
      }
      .text{
        color: #fff;
        font-size: 20px;
        padding-left: 10px;
        span{
          display: block;
          font-size: 14px;
          opacity: 0.7;
        }
      }
    }
  }
</style>
