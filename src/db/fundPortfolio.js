import {reactive} from 'vue';
import init, {loading} from './index';

const db = init();

const collectionName = 'fundPortfolio';

export const list = reactive([]);

export const getList = () => {
  const l = loading();
  return db.collection(collectionName).get()
      .then(({data, errMsg}) => {
        if (!errMsg.includes('ok')) throw errMsg;

        list.splice(0, list.length);
        for (const i of data) {
          list.push(i);
        }
        return data;
      })
      .finally(() => {
        l.close();
      });
};

export const add = (data) => db.collection(collectionName)
    .add({data})
    .finally(() => getList());
export const update = (id, data) => db.collection(collectionName)
    .doc(id)
    .update({data})
    .finally(() => getList());
export const get = (id) => db.collection(collectionName)
    .doc(id)
    .get()
    .then((res) => res.data);

export default list;
