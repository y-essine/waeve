<template>
    <div
        class="bg-primary rounded-xl text-primary-t flex-col h-fit overflow-hidden shadow-black/30"
        :class="{
            'flex justify-center items-center': center,
            'flex justify-center': hcenter && !vcenter,
            'flex items-center': vcenter && !hcenter,
            '!h-full': hfull,
            'hover:bg-secondary duration-200': hover
        }"
    >
        <div v-if="title" class="text-slate-300 font-semibold px-5 py-3">
            {{ title }}
        </div>
        <div :class="{ 'px-5': px, 'py-3': py }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: {
            type: String
        },
        px: {
            type: Boolean,
            default: false
        },
        py: {
            type: Boolean,
            default: false
        },
        center: {
            type: Boolean,
            default: false
        },
        hcenter: {
            type: Boolean,
            default: false
        },
        vcenter: {
            type: Boolean,
            default: false
        },
        hfull: {
            type: Boolean,
            default: false
        },
        hover: {
            type: Boolean,
            default: false
        }
    }
};
</script>
