"use strict";

require("source-map-support/register");

const {
  Feature
} = require('@genx/app');

module.exports = {
  type: Feature.SERVICE,
  load_: async function (app, options, name) {
    const Sharp = app.tryRequire('sharp');
    const service = {
      fromFile: (fileName, opts) => new Sharp(fileName, opts),
      fromBuffer: (buffer, opts) => new Sharp(buffer, opts && {
        raw: opts
      }),
      create: opts => new Sharp(opts && {
        create: opts
      })
    };
    app.registerService(name, service);
  }
};
//# sourceMappingURL=imageProcessor.js.map