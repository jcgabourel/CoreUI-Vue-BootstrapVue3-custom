<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import CUSideBar from './components/Layout/sidebar.vue' ;
import CUwrapper from './components/Layout/wrapper.vue' ;

import { ref, computed } from 'vue' 

</script>

<template>
<div class="sidebar sidebar-dark sidebar-fixed" id="sidebar">
  <CUSideBar />
</div>
<div class="wrapper d-flex flex-column min-vh-100 bg-light">
  <CUwrapper>
   
    <router-view></router-view>
  </CUwrapper>
</div>

</template>

<style lang="scss">
// Import Main styles for this application
@import 'styles/style';


</style>
