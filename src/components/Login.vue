<template>
  <div class="ma">
    <div class="bd">
      <div>
        <h1 style="padding-bottom: 10px; color:#3d4046;text-align: center">{{title}}</h1>
        <div style="width: 230px">姓名</div>
        <el-input  v-model="username" placeholder="请输入"></el-input>

        <div>身份证号码</div>
        <el-input  v-model="uid" placeholder="请输入"></el-input>

        <div>手机号</div>
        <el-input  v-model="mobile" placeholder="请输入"></el-input>

        <div>
          <div>验证码</div>
          <el-input  v-model="code" placeholder="请输入"></el-input>
        </div>
        <el-button id='bt' :disabled="isDisabled" style="margin-top: 10px" @click="queryMessage1()">{{buttonName}}</el-button>
        <el-button id="loginL" @click="loginLogin1">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '../../store/index'
  import { queryMessage, loginLogin } from '../api/api'

  export default {
    data () {
      return {
        title: '考 试 登 录',
        username: '',
        mobile: '',
        uid: '',
        code: '',
        buttonName: '发送验证码',
        CountDown: 60,
        isDisabled: false
      }
    },
    created () {
      if (sessionStorage.getItem('CountDownInfo')) {
        this.CountDown = JSON.parse(
          sessionStorage.getItem('CountDownInfo')
        ).CountDown;
        this.isDisabled = JSON.parse(
          sessionStorage.getItem('CountDownInfo')
        ).isDisabled;
      }
      if (this.isDisabled) {
        var timerId = setInterval(() => {
          this.CountDown--;
          this.buttonName = this.CountDown + '秒后重试';
          if (this.CountDown <= 0) {
            clearInterval(timerId);
            this.buttonName = '重新发送';
            this.CountDown = 60;
            this.isDisabled = false;
          }
        }, 1000);
      }
      window.addEventListener('beforeunload', () => {
        sessionStorage.setItem(
          'CountDownInfo',
          JSON.stringify({
            CountDown: this.CountDown,
            isDisabled: this.isDisabled
          })
        )
      })
    },

    beforeRouteLeave (to, from, next) {
      /*
        to:router 即将要进入的路由对象
        from:router  当前导航正要离开的路由
        next()进行管道中的下一个钩子
        最后要确保调用next方法，否则钩子不会被resolved
      */
      sessionStorage.setItem(
        'CountDownInfo',
        JSON.stringify({
          CountDown: this.CountDown,
          isDisabled: this.isDisabled
        })
      );
      next();
    },

    methods: {
      queryMessage1 () {
        queryMessage({
          username: this.username,
          mobile: this.mobile,
          uid: this.uid
        }).then(res => {
          if (res.data.code === 20000) {
            this.$message({
              message: '短信发送成功!',
              type: 'success'
            });
            this.isDisabled = true;
            var timerId = setInterval(() => {
              this.CountDown--;
              this.buttonName = this.CountDown + '秒后重试';
              if (this.CountDown <= 0) {
                clearInterval(timerId);
                this.buttonName = '重新发送';
                this.CountDown = 60;
                this.isDisabled = false;
              }
            }, 1000)
          } else {
            this.$message.error(res.data.message)
          }
          }
        )
      },
      loginLogin1 () {
        loginLogin(
          {
            username: this.username,
            mobile: this.mobile,
            uid: this.uid,
            code: this.code
          }
        ).then(res => {
          if (res.data.code === 20000) {
            store.commit('setToken', res.data.data.token)
            this.$router.replace('/wait')
          } else {
            this.$message.error(res.data.message)
          }
          }
        )
      }
    }
  }
</script>

<style lang="less" scoped>
  .ma{
    background-image:url('../../public/test.jpg');
    padding: 20px;
    height: 1000px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bd{
    height: 500px;
    width: 500px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
  }

  #loginL {
    width: 100%;
    background-color: #2d8eff;
    color: #dedcdb;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  #loginL:hover {
    background-color: #1f27ff;
  }
  div {
    color: #6a6d73;
  }
</style>
