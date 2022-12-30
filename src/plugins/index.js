import notifications from '@kyvg/vue3-notification';
import MyNotifications from '@/components/custom/MyNotifications.vue';
// import SmoothResize from '@/components/custom/SmoothResize.vue';
// import smoothreflow from 'vue-smooth-reflow';
import { createMetaManager } from 'vue-meta';

export default {
    install: (app) => {
        app.use(notifications);
        // app.use(smoothreflow);
        app.use(createMetaManager());
        // app.component('SmoothResize', SmoothResize);
        app.component('MyNotifications', MyNotifications);
    }
}