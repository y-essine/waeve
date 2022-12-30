<template>
    <div class="dropdown menu-left">
        <label @click.stop="toggle">
            <slot name="view"></slot>
        </label>
        <Transition>
            <ul role="listbox" v-if="open" v-on-click-outside.bubble.stop="close"
                class="menu-content menu shadow-xl bg-primary rounded-box w-52 mt-4">
                <!-- <li role="option"> -->
                <Card :title="title" px py class="shadow-xl">
                    <slot />
                </Card>
                <!-- </li> -->
            </ul>
        </Transition>
    </div>
</template>

<script>
import Card from '@/components/ui/card/Card.vue';

export default {
    name: 'Menu',
    data() {
        return {
            open: false,
            outside: false
        };
    },
    props: {
        title: {
            type: String
        }
    },
    components: {
        Card
    },
    methods: {
        toggle() {
            this.open = !this.open;
        },
        close() {
            this.open = false;
        }
    }
};
</script>

<script setup>
import { vOnClickOutside } from '@vueuse/components';
</script>

<style scoped lang="less">
.dropdown {
    .menu-content {
        position: absolute;
        z-index: 100;
    }

    &.menu-left {
        .menu-content {
            right: 0;
        }
    }

    &.menu-right {
        .menu-content {
            left: 0;
        }
    }

    &.menu-top {
        .menu-content {
            top: 0;
        }
    }

    &.menu-bottom {
        .menu-content {
            bottom: 0;
        }
    }
}

.v-enter-active,
.v-leave-active {
    transition: opacity 150ms ease-out;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
