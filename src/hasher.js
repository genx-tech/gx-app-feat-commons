const { Feature } = require('@genx/app');

/**
 * Hasher, get the hash of a buffer/string/stream/file.
 * @module Feature_Hasher
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
     * @param {object} [options] - Options for the feature
     * @returns {Promise.<*>}
     *
     * @see[methods]{@link https://github.com/sindresorhus/hasha}
     *
     */
    load_: async function (app, options, name) {
        const hasha = app.tryRequire('hasha');
        app.registerService(name, hasha);
    },
};
