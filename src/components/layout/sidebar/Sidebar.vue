<template>
    <div class="sticky top-5 h-fit">
        <div class="space-y-6 w-12 smd:w-32">
            <router-link to="/">
                <Icon icon="waev" color="#D95353" hoverColor="#cbd5e1" button :size="48" />
            </router-link>

            <SidebarItem :item="items.home" tooltip :isActive="isHome" />
            <SidebarItem :item="items.explore" tooltip :isActive="isExplore" />
            <SidebarItem :item="items.settings" tooltip :isActive="isSettings" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarItem from './SidebarItem.vue';
import Icon from '@/components/ui/icons/Icon.vue';
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
        SidebarItem,
        Icon
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
