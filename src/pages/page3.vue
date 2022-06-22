<template>
  <div class="cnt">
    <CHeader />
    <button @click="onClickBack">回到上一页</button>
    <CFooter/>
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
    onClickBack() {
      if (process.env.isMiniprogram) {
        wx.navigateBack();
      }
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
