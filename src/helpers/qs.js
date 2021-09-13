import {parse as qsParse, stringify as qsStringify} from 'qs';

export const parse = (str = '') => qsParse(str || location.search, {
  ignoreQueryPrefix: true,
});

export const stringify = (obj) => qsStringify(obj, {
  encode: true,
  encodeValuesOnly: true,
  arrayFormat: 'brackets',
});
