const {
    Feature,
} = require('@genx/app');

/**
 * Time-to-live (TTL) Memory Cache
 * @module Feature_TtlMemCache
 */

module.exports = {
    /**
     * This feature is loaded at service stage
     * @member {string}
     */
    type: Feature.SERVICE,

    /**
     * Load the feature
     * @param {App} app - The app module object
     * @param {object} options - Options for the feature
     * @property {number} [options.stdTTL=180] - The standard ttl as number in seconds for every generated cache element. 0 = unlimited
     * @property {number} [options.checkperiod=300] - The period in seconds, as a number, used for the automatic delete check interval. 0 = no periodic check.
     * @property {boolean} [options.useClones=false] - En/disable cloning of variables. If true you'll get a copy of the cached variable. If false you'll save and get just the reference.
     * @returns {Promise.<*>}
     *
     * @see[methods]{@link https://github.com/node-cache/node-cache}
     *
     */
    load_: async function (app, options, name) {
        const NodeCache = app.tryRequire('node-cache');
        const nodeCache = new NodeCache({
            stdTTL: 180,
            checkperiod: 300,
            useClones: false,
            ...options,
        });

        app.registerService(name, nodeCache);
    },
};
