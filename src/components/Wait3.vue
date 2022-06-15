<template>
  <div>
    <div class="wait_ma">
      <el-card class="box-card">
        <div class="item" >
          您已完成所有考试，请等待通知！
        </div>
        <el-button type="primary"  @click="logout">退出考试</el-button>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      logout () {
        this.$router.replace('/')
        localStorage.clear()
      }
    }
  }
</script>

<style lang="less" scoped>
  .wait_ma{
    background-color: #dedcdb;
    padding: 20px;
    height: 1000px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center
  }

  .item {
    margin-bottom: 28px;
    font-size:20px;
    color: #909399;
    text-align: center
  }

  .box-card {
    width: 800px;
    height: auto;
  }
</style>
