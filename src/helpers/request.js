export const get = (url = '', query = {}, options) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data: query,
      ...options,
      success(res) {
        const {statusCode, data} = res;
        if (statusCode !== 200) throw Error(statusCode);
        resolve(data);
      },
      fail: reject,
    });
  });
};

export const cache = (key, cb) => new Promise((resolve, reject) => {
  const val = wx.getStorageSync(key);
  if (val) return resolve(val);

  if (cb) {
    cb((res) => {
      wx.setStorageSync(key, res);
      resolve(res);
    }, reject);
  }
});
