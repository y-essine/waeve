<template>
    <router-view></router-view>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'App',
    methods: {
        ...mapActions('nav', ['setCurrentRoute'])
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
