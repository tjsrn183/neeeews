<template>
  <div class="user-container">
    <div class="user-description">
<slot name='userName'></slot>
<router-link :to="'/user'+userInfo.user">{{userInfo.user}}</router-link>
<div class="time">{{userInfo.user||'Joined'+userInfo.created+','}}
  <span v-if='userInfo.points'>,{{userInfo.points}}</span>
  <slot name="userKarma"></slot>
</div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
props:{
  userInfo:{
    type:Object
  }
},
computed:{
  ...mapGetters(['userContent','userQuestion','userName', 'userTimeAgo','contentPoints'])
}
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
  color: #828282;
}
</style>