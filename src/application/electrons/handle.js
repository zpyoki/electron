const robot = require('robotjs');
const Store = require('electron-store');

let keyingIntervalId = null;

const keyingStart = () => {
  if (keyingIntervalId) keyingStop();
  keyingIntervalId = setInterval(() => {
    new Store().get('keyList').forEach((item) => robot.keyTap(item));
  }, 1000);
};

const keyingStop = () => clearInterval(keyingIntervalId);

module.exports = {
  keyingStart,
  keyingStop,
};
