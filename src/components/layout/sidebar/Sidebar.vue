<template>
    <div class="pr-8">
        <div class="space-y-6 w-12 smd:w-32">
            <SidebarItem :item="items.home" tooltip :isActive="isHome" />
            <SidebarItem :item="items.explore" tooltip :isActive="isExplore" />
            <SidebarItem :item="items.settings" tooltip :isActive="isSettings" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarItem from './SidebarItem.vue';
const items = {
    home: {
        name: 'Home',
        icon: 'home',
        path: '/'
    },
    explore: {
        name: 'Explore',
        icon: 'compass2',
        path: '/explore'
    },
    settings: {
        name: 'Settings',
        icon: 'wrench',
        path: '/settings',
        size: 26
    }
};

export default {
    name: 'Sidebar',
    components: {
        SidebarItem
    },
    data() {
        return {
            items: items
        };
    },
    computed: {
        ...mapGetters('nav', ['isHome', 'isExplore', 'isSettings'])
    }
};
</script>
