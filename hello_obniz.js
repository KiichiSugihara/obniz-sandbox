const config = require('./config');
const obnizIds = config.obnizIds;
var Obniz = require('obniz');

var obniz = new Obniz(obnizIds[0]);

obniz.onconnect = async function() {
  obniz.display.clear();
  obniz.display.print('Hello obniz by Kiichi');
};
