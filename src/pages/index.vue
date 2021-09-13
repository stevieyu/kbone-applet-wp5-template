<template>
  <mp-cells>
    <mp-cell :title="item.name" :link="true" v-for="(item, idx) in fundPortfolio" :key="idx" @tap="onClick(item)">
      <div slot="footer">
        <div :class="item.valuation>0?'text-red-500':'text-green-500'">
          {{ item.valuation }}
        </div>
      </div>
    </mp-cell>
  </mp-cells>
  <div class="text-center flex fixed bottom-4 w-full">
    <wx-button type="primary" plain="true" class="mx-4 flex-1" @click="onJump">添加</wx-button>
    <wx-button type="primary" plain="true" class="mx-4 flex-1" @click="getValuation">估值</wx-button>
  </div>
</template>

<script setup>
import fundPortfolio, {getList} from '../db/fundPortfolio';
import {valuation} from '../helpers/ttjj';
import round from 'lodash/round';

const getValuation = async () => {
  for (const it of fundPortfolio) {
    it.valuation = 0;
    for (const i of it.funds) {
      const res = await valuation(i.code);
      it.valuation = round(it.valuation + res.gszzl / 100 * i.percentage, 2);
    }
  }
};

window.addEventListener('wxshow', (e) => {
  getList().then(() => {
    getValuation();
  });
});

const onJump = () => {
  window.open('/form');
};

const onClick = (item) => {
  window.open(`/form?id=${item._id}`);
};
</script>
