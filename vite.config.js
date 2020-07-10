const svite = require('svite');
const sviteConfig = {
    hot: false, // boolean or options object for svelte-hmr
    useTransformCache: true, // boolean
    svelte: {}, // options for rollup-plugin-svelte
};
module.exports = {
    plugins: [svite(sviteConfig)],
    optimizeDeps: {
        include: ['@sveltech/routify/runtime/plugins/tree', '@sveltech/routify/runtime/plugins/assignAPI', '@sveltech/routify/runtime'],
    },
};