"use strict";

require("source-map-support/register");
const {
  Feature
} = require('@genx/app');
module.exports = {
  type: Feature.SERVICE,
  load_: async function (app, options, name) {
    const hasha = app.tryRequire('hasha');
    app.registerService(name, hasha);
  }
};
//# sourceMappingURL=hasher.js.map