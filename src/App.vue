<template>
  <div id="app">

    <div class="main">
      <router-view></router-view>
    </div>
    <FtView/>

  </div>
</template>

<script>
import FtView from './components/FtView'

export default {
  components: {
    FtView
  }
}
</script>

<style lang="less">
  * {
    padding: 0;
    margin: 0;
    font-family: "微软黑雅";
    box-sizing: border-box
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style: none
  }

  #app {
    width: auto;
    margin: 0 auto;
    //border: 1px solid #85888e;
    //box-shadow: 0 0 20px rgba(65, 184, 131, 0.5);
  }

  .FtView {
    position:fixed; bottom:0;
  }
  .main{
    min-height: 200px;
  }
</style>
