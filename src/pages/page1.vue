<template>
  <div class="cnt">
    <Header />
    <a href="/page2?vvv=1">当前页跳转</a>
    <a href="/page3?ttt=2" target="_blank">新开页面跳转</a>
    <button @click="onClickJump">当前页跳转</button>
    <button @click="onClickOpen">新开页面跳转</button>
    <Footer />
    <setup-script />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import SetupScript from '../components/test/setupScript';
export default {
  name: 'App',
  components: {
    SetupScript,
    Header,
    Footer,
  },
  methods: {
    onClickJump() {
      window.location.href = '/page2';
    },
    onClickOpen() {
      window.open('/page3');
    },
  },
};
</script>

<style>
.cnt {
  margin-top: 20px;
}
a, button {
  display: block;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ddd;
}
</style>
