/**
 * 天天基金
 */

import {get} from './request';

export const api = (path, query = {}) => new Promise((resolve, reject) => {
  get(`https://fundgz.1234567.com.cn/${path}`, query, {dataType: 'text'})
      .then((res) => {
        res = res.replace(/(\w+\()|(\);)/g, '');
        if (!res) res = null;
        resolve(JSON.parse(res));
      })
      .catch(reject);
});

export const valuation = (code) => {
  return api(`js/${code}.js`, {rt: Date.now()});
};
