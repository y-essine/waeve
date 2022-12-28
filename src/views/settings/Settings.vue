<template>
    <div class="px-4 2xs:px-0 cursor-default select-none hover:text-secondary-t/90">
        <h1 @click="notif">Settings</h1>
    </div>
</template>

<script>
export default {
    name: 'Settings',
    methods: {
        notif() {
            this.$notify({
                title: 'Settings',
                text: 'This is the settings page'
            });
        }
    }
};
</script>
