import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/vue3';

const pages = import.meta.glob('./pages/**/*.vue');
createInertiaApp({
    resolve: async name => {
        return (await pages[`./pages/${name}.vue`]()).default
    },
    setup({el, App, props, plugin}) {
        const app = createApp({render: () => h(App, props)})
        app.use(plugin)
        app.mount(el)
    },
})