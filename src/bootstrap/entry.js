import {createApp} from 'vue';
import {parse} from '../helpers/qs';
import usePlugins from './usePlugins';
import '../style/main.scss';

import '../supports/share';

window.addEventListener('wxshow', (e) => {
  // console.log('wxload', e);
});

/**
 * 通过路径获取返回页面文件
 * @return {*}
 */
function getComponent() {
  const components = {};
  const requireComponent = require.context('../pages', true, /\.vue$/);
  const requireComponentKeys = requireComponent.keys()
      .sort((a, b) => {
        const getL = (str) => (str.match(/\//ig) || []).length;
        return getL(a) - getL(b);
      });
  for (const filePath of requireComponentKeys) {
    const component = requireComponent(filePath);
    const key = filePath.replace(/\.(vue|\/)/g, '');
    components[key] = component.default || component;
  }
  const componentsKey = Object.keys(components);

  if (!componentsKey.length) throw Error('错误页面路径');

  let {pathname} = location;
  pathname = decodeURIComponent(pathname)
      .replace(window.$$miniprogram.config.origin.replace('https', ''), '');

  let pathComponentKey = componentsKey.find((i) =>
    [i, i+'/index'].includes(pathname.substr(1)) || ['index', '404'].includes(i),
  );

  if (!pathComponentKey) {
    pathComponentKey = componentsKey[0];
  }
  return components[pathComponentKey];
}

export default () => {
  const container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);

  const component = getComponent();

  return createApp(component, parse())
      .use(usePlugins)
      .mount('#app');
};
