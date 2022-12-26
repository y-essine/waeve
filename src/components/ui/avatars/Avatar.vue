<template>
    <div class="relative rounded-full overflow-hidden" :class="{ 'border border-primary': border }">
        <v-lazy-image
            class="rounded-full object-cover"
            :width="size * 4"
            :height="size * 4"
            :src="
                'https://imagecdn.app/v2/image/' +
                src +
                '?w=' +
                size * 2 +
                '&h=' +
                size * 2 +
                '&fit=crop&format=webp'
            "
            :src-placeholder="
                'https://imagecdn.app/v2/image/' +
                src +
                '?w=' +
                size / 3 +
                '&h=' +
                size / 3 +
                '&fit=crop&format=webp'
            "
            alt="User avatar"
            title="Avatar"
            style="aspect-ratio: 1"
        />
    </div>
</template>

<script>
import VLazyImage from 'v-lazy-image';

export default {
    name: 'Avatar',
    components: {
        VLazyImage
    },
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

<style scoped>
.v-lazy-image {
    filter: blur(1px);
    transition: filter 0.2s;
}
.v-lazy-image-loaded {
    filter: blur(0);
}
</style>
