<template>
    <div class="px-4 2xs:px-0 select-none">
        <h1 @click="notif" class="w-fit cursor-pointer hover:text-secondary-t/90">Settings</h1>
    </div>
</template>

<script>
import { useMeta } from 'vue-meta';

export default {
    name: 'Settings',
    methods: {
        notif() {
            this.$notify({
                title: 'Settings',
                text: 'This is the settings page'
            });
        }
    },
    setup() {
        useMeta({
            title: 'Settings'
        });
    }
};
</script>
