<template>
  <wx-form @submit="onSubmit">
    <div class="px-4 py-2 my-2 bg-white">
      <wx-input v-model="form.name" class="weui-input pt-1" auto-focus placeholder="" />
    </div>
    <div class="dv-y bg-white shadow">
      <div class="flex items-center justify-between" v-for="(i) in form.funds" :key="i.code">
        <div class="flex-auto p-2">
          <div>{{ i.code }}</div>
        </div>
        <div class="flex-2 p-2 flex">
          <input class="weui-input text-right" type="number" min="0" v-model.trim="i.percentage"/>%
        </div>
      </div>
      <div class="flex items-center justify-between text-gray-400">
        <div class="flex-auto p-2">
          <div>总计</div>
        </div>
        <div class="flex-2 p-2">
          {{ total }}%
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between bg-white shadow mt-1">
      <div class="flex-auto p-2">
        <wx-input class="weui-input" v-model.trim="addForm.code" placeholder="基金代码"/>
      </div>
      <div class="flex-2 p-2">
        <div @click="addSubmit" class="px-8 py-2 bg-blue-500 text-white rounded-full shadow inline-block">增加</div>
      </div>
    </div>
    <div class="h-16"></div>
    <div class="flex text-center fixed w-full bottom-4">
      <wx-button class="flex-1 mx-4" type="primary" plain="true" @click="onBack" v-if="hasBack">取消</wx-button>
      <wx-button class="flex-1 mx-4" type="primary" plain="true" form-type="submit">提交</wx-button>
    </div>
  </wx-form>
</template>

<script setup>
import {reactive, computed, defineProps} from 'vue';
import {add, get, update} from '../db/fundPortfolio';

const props = defineProps({
  id: String,
});

if (props.id) {
  get(props.id).then((res) => {
    for (const k of Object.keys(form)) {
      form[k] = res[k];
    }
  });
}

const form = reactive({
  name: '',
  funds: [],
});

const addForm = reactive({
  code: '',
});

const addSubmit = () => {
  if (!addForm.code) return;
  form.funds.push({
    ...addForm,
    percentage: 0,
  });
};

const total = computed(() => {
  if (!form.funds.length) return 0;
  return form.funds.map((i) => +i.percentage).reduce((a, b) => a+b);
});

const onSubmit = async () => {
  if (!form.name) return;
  form.funds = form.funds.filter((i) => +i.percentage);
  if (props.id) {
    await update(props.id, form);
  } else {
    await add(form);
  }

  onBack();
};

const hasBack = getCurrentPages().length > 1;
const onBack = () => {
  if (!hasBack) return;
  wx.navigateBack();
};
</script>
