import {reactive} from 'vue';
import {debouncedWatch} from '@vueuse/core';
import {stringify} from '../helpers/qs';

export const share = reactive({
  title: '',
  path: location.pathname,
  search: {},
});

/**
 *
 * @param {{title,path,search,hash}} option
 */
export const useShare = (option = share) => {
  const common = {
    title: share.title,
  };

  const entryPage = getCurrentPages()[0].route;

  const appMessage = {
    ...common,
    miniprogramPath: entryPage + '?' + stringify({
      type: 'share',
      targeturl: option.path,
      search: stringify(option.search),
    }),
  };
  const timeline = {
    ...common,
    miniprogramQuery: stringify({
      type: 'share',
      targeturl: option.path + '?' + stringify(option.search),
    }),
  };

  window.onShareAppMessage = () => appMessage;
  window.onShareTimeline = () => timeline;
};

debouncedWatch(share, () => {
  useShare();
}, {debounce: 200});

export default useShare;
