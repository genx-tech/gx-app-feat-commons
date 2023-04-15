"use strict";

require("source-map-support/register");
const {
  Feature
} = require('@genx/app');
module.exports = {
  type: Feature.SERVICE,
  load_: async function (app, options, name) {
    const NodeCache = app.tryRequire('node-cache');
    const nodeCache = new NodeCache({
      stdTTL: 180,
      checkperiod: 300,
      useClones: false,
      ...options
    });
    app.registerService(name, nodeCache);
  }
};
//# sourceMappingURL=ttlMemCache.js.map