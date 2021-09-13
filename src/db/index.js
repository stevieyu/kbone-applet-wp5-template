

export const loading = (title = '加载中') => {
  wx.showLoading({title});
  return {
    close() {
      wx.hideLoading();
    },
  };
};


let db = null;

export default () => {
  if (db) return db;
  wx.cloud.init({
    env: 'cloud1-4goxi6ijeb921f83',
  });

  db = wx.cloud.database();
  return db;
};

