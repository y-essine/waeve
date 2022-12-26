<template>
    <div class="relative">
        <span
            class="icon flex justify-center items-center duration-200 transition-colors relative outline outline-0 rounded-md"
            :class="[
                'icon-' + icon,
                {
                    'cursor-pointer': button,
                    'text-tertiary-t': !color,
                    'hover:text-primary-t': !hoverColor && !disabled,
                    'group-hover:text-primary-t': group && !disabled,
                    'rounded-full hover:bg-white/10': round && !circle,
                    '!text-primary-t ': isActive,
                    '!outline-1 outline-primary': stacked,
                    '!text-tertiary-t !cursor-default': disabled,
                    'opacity-50': darker,
                    '!justify-end': end
                }
            ]"
            :style="[
                {
                    fontSize: size + 'px',
                    width: (box || size) + 'px',
                    height: (box || size) + 'px',
                    color: color
                },
                { '--hover-color': hoverColor },
                { transformStyle: 'preserve-3d' }
            ]"
        >
            <slot></slot>
            <div
                v-if="circle"
                :style="[
                    { backgroundColor: circle },
                    { width: (box || size) + 'px', height: (box || size) + 'px' },
                    { 'z-index': '-1' },
                    { transform: 'translateZ(0px)' }
                ]"
                class="box absolute top-0 left-0 outline-1 outline-primary rounded-full"
            ></div>
        </span>
    </div>
</template>
<script>
export default {
    name: 'Icon',
    props: {
        icon: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            default: 24
        },
        color: {
            type: String,
            default: ''
        },
        hoverColor: {
            type: String,
            default: '#cbd5e1'
        },
        button: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        end: {
            type: Boolean,
            default: false
        },
        group: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        circle: {
            type: String,
            default: ''
        },
        box: {
            type: Number
        },
        isActive: {
            type: Boolean,
            default: false
        },
        darker: {
            type: Boolean,
            default: false
        },
        stacked: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style scoped>
@import '@/assets/icons/style.css';

.icon:hover {
    color: var(--hover-color) !important;
}
</style>
