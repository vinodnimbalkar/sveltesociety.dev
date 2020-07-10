const svite = require('svite');
const sviteConfig = {
    hot: true, // boolean or options object for svelte-hmr
    useTransformCache: true, // boolean
};
module.exports = {
    plugins: [svite(sviteConfig)],
    optimizeDeps: {
        include: ['@sveltech/routify/runtime/plugins/tree', '@sveltech/routify/runtime/plugins/assignAPI', '@sveltech/routify/runtime'],
    }
};