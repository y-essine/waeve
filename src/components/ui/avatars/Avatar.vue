<template>
    <div class="relative rounded-full" :class="{ 'border border-primary': border }">
        <img
            class="rounded-full object-cover"
            :width="size * 4"
            :height="size * 4"
            :src="src"
            alt="User avatar"
            title="Avatar"
            style="aspect-ratio: 1"
        />
    </div>
</template>

<script>
export default {
    name: 'Avatar',
    props: {
        src: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            default: 6
        },
        border: {
            type: Boolean,
            default: false
        }
    }
};
</script>
