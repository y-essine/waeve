<template>
    <div class="w-full">
        <div v-if="isLoading" class="flex justify-center items-center pb-8 pt-6">
            <div
                class="w-12 h-12 border-[6px] border-secondary border-t-accent rounded-full animate-spin"
            ></div>
        </div>
        <div v-if="isLoaded" class="space-y-4">
            <Post v-for="(post, index) in posts" :key="post.id" :number="index" :post="post" />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Post from './Post.vue';

export default {
    name: 'PostsList',
    components: {
        Post
    },
    computed: {
        ...mapState('posts', ['posts', 'isLoading', 'isLoaded'])
    }
};
</script>
