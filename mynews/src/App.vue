<template>
<div id="app">
<spinner-imme :loading="loading"></spinner-imme>
<tool-bar></tool-bar>
<transition name="routing-fade" mode="out-in">
  <router-view></router-view>
</transition>
</div>

</template>

<script>
import SpinnerImme from './components/SpinnerImme.vue';
import bus from './utils/bus.js'
import ToolBar from './components/ToolBar.vue';

export default {
components:{

  SpinnerImme,
ToolBar
},
data(){
  return {
    loading:false,
  }
},
methods:{
  onProgress(){
    this.loading=true;
  },
  offProgress(){
    this.loading=false;
  }
},
create(){
  bus.$on('on:progress',this.onProgress);
  bus.$on('off:progress', this.offProgress);
}
}
</script>

<style>
body{
  margin:0;
}
a{
    color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-active {
  text-decoration: underline;
}

/* 라우터트랜지션 */
.routing-fade-enter-active, .routing-fade-leave-active {
  transition: opacity .3s ease;
}
.routing-fade-enter, .routing-fade-leave-to
{
  opacity: 0;
}
</style>
