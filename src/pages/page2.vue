<template>
  <div class="cnt">
    <CHeader />
    <a href="/">回到首页</a>
    <button @click="onClickJump">回到首页</button>
    <CFooter />
  </div>
</template>

<script>
import CHeader from '../components/Header.vue';
import CFooter from '../components/Footer.vue';
export default {
  name: 'App',
  components: {
    CHeader,
    CFooter,
  },
  methods: {
    onClickJump() {
      window.location.href = '/';
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
