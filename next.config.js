// next.config.js
const withTM = require("next-transpile-modules")(["echarts", "zrender"]);

module.exports = withTM({})