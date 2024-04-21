<script>
import Header from "./components/quanly/header.vue";
export default {
  components: {
    appHeader: Header,
  },
};
</script>
<template>
  <div id="app">
    <!-- <app-Header></app-Header> -->
      <router-view />
  </div>
</template>
<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>
