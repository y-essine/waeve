<template>
    <router-link
        :to="item.path"
        :name="item.path"
        class="flex items-center cursor-pointer group rounded-lg relative"
    >
        <Icon :icon="item.icon" group :size="item.size || 30" :box="48" :isActive="isActive" />
        <span
            class="ml-2 font-semibold text-zinc-400 group-hover:text-zinc-300 duration-200 select-none hidden smd:block"
            :class="isActive && '!text-zinc-300'"
        >
            {{ item.name }}
        </span>
    </router-link>
</template>

<script>
import Icon from '@/components/ui/icons/Icon.vue';

export default {
    name: 'SidebarItem',
    components: {
        Icon
    },
    props: {
        item: {
            type: Object,
            required: true
        },
        isActive: {
            type: Boolean,
            default: false
        },
        tooltip: {
            type: Boolean,
            default: false
        }
    }
};
</script>
