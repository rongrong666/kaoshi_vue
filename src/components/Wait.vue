<template>
  <div class="wait_ma">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size:30px;color: #4b494a">考生信息</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="gotoAnswer">进入考试</el-button>
      </div>
      <div class="text item" style="font-size:20px;color: #909399">
        <span style="margin-right: 50px">考生姓名:</span>    {{username}}
      </div>
      <div class="text item" style="font-size:20px;color: #909399">
        <span style="margin-right: 70px">考生号:</span>    {{qid}}
      </div>
      <div class="text item" style="font-size:20px;color: #909399">
        <span style="margin-right: 90px">科目:</span>    {{subject}}
      </div>
      <div class="text item" style="font-size:20px;color: #909399">
        <span style="margin-right: 50px">答题时长:</span>   {{kstime}}分钟
      </div>
      <div class="text item" style="font-size:20px;color: #909399">
        <span style="margin-right: 12px">考试开始时间:</span>   {{qtime}}
      </div>
      <div class="text item" style="font-size:20px;color: #909399">
        <span style="margin-right: 50px">温馨提示:</span>   交卷前请完成所有选择类题型！请勿中途离开考试页面！
      </div>
    </el-card>
  </div>
</template>

<script>
  import store from '../../store/index'
  import { getSettings, queryUserInfo } from '../api/api'

  export default {
    data () {
      return {
        username: '',
        qid: '',
        subject: '',
        qtime: '',
        qyear: '',
        qmonth: '',
        qday: '',
        qhour: '',
        qmin: '',
        kstime: ''
      }
    },
    beforeMount () {
      this.queryUserInfo1()
    },
    methods: {
      queryUserInfo1 () {
        queryUserInfo().then(res => {
            if (res.data.code === 20000) {
                this.username = res.data.data.username
                this.qid = res.data.data.qid
                store.commit('setUserType', res.data.data.type)
                if (res.data.data.type === 1) {
                  this.subject = '会计'
                } else if (res.data.data.type === 2) {
                  this.subject = '文秘'
                } else {
                  this.subject = '粮食保管员'
                }
                }
          }
        )
        getSettings().then(res => {
            if (res.data.code === 20000) {
              this.qtime = res.data.data.Qyear + '年' + res.data.data.Qmonth + '月' + res.data.data.Qday + '日' + '    ' +
                           res.data.data.Qhour + '时' + res.data.data.Qmin + '分'
              this.qyear = res.data.data.Qyear
              this.qmonth = res.data.data.Qmonth
              this.qday = res.data.data.Qday
              this.qhour = res.data.data.Qhour
              this.qmin = res.data.data.Qmin
              this.kstime = res.data.data.Kstime
            } else {
              this.$message({
                message: '未获取到考试时间!',
                type: 'warning'
              })
            }
          }
        )
      },
      gotoAnswer () {
        // todo:时间限制
        const now = new Date()
        const setTime = new Date(parseInt(this.qyear), parseInt(this.qmonth) - 1, parseInt(this.qday), parseInt(this.qhour), parseInt(this.qmin))
        if (now < setTime) {
          this.$message({
            message: '考试时间未到!',
            type: 'warning'
          })
        } else if (now.getTime() - setTime.getTime() > parseInt(this.kstime) * 60000) {
          this.$message({
            message: '考试已结束!',
            type: 'warning'
          })
        } else {
          if (this.subject == '会计') {
            this.$router.replace('/answer')
          } else if (this.subject == '文秘') {
            this.$router.replace('/answer2')
          } else {
            this.$router.replace('/answer3')
          }
        }
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
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 28px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 800px;
    height: 450px;
  }
</style>
