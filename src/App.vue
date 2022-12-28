<template>
    <router-view />
    <my-notifications />
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'App',
    methods: {
        ...mapActions('nav', ['setCurrentRoute']),
        ...mapActions('device', ['initWindowListener', 'destroyWindowListener'])
    },
    mounted() {
        this.initWindowListener();
    },
    beforeDestroy() {
        this.destroyWindowListener();
    },
    watch: {
        $route: {
            handler: function (to, from) {
                this.setCurrentRoute(to.name);
            },
            immediate: true
        }
    }
};
</script>
