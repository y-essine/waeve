<template>
    <div class="flex-1 flex-wrap">
        <div class="h-0 overflow-hidden relative pb-[56.25%] mt-4">
            <v-lazy-image :src="biggerImage()" :src-placeholder="smallerImage()" alt="Post attachment image"
                class="w-full" />
        </div>
    </div>
</template>

<script>
import VLazyImage from 'v-lazy-image';
export default {
    name: 'PostImage',
    components: {
        VLazyImage
    },
    props: {
        imageUrl: {
            type: String,
            required: true
        }
    },
    methods: {
        formatUrl() {
            return this.imageUrl.replace("https:", "https%3A").replaceAll("/", "%2F")
        },
        biggerImage() {
            return "https://imagecdn.app/v2/image/" + this.formatUrl() + "?width=640&height=480&format=webp&fit=cover";
        },
        smallerImage() {
            return "https://imagecdn.app/v2/image/" + this.formatUrl() + "?width=80&height=60&format=webp&fit=cover";
        }
    }
}
</script>



<style scoped>
.v-lazy-image {
    filter: blur(10px);
    transition: filter 0.2s;
}

.v-lazy-image-loaded {
    filter: blur(0);
}
</style>
