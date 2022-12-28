<template>
    <div class="w-full pb-8 2xs:pb-0">
        <div class="2xs:space-y-4 pt-4 2xs:pt-0">
            <Post
                v-for="(post, index) in posts"
                :key="post.id"
                :number="index"
                :post="post"
                class="pb-4 2xs:pb-0"
            >
                <div
                    class="block 2xs:hidden absolute w-[90%] px-6 opacity-20 border-0 border-t border-tertiary-t"
                    style="transform: translate(5%, 14px)"
                ></div>
            </Post>
        </div>
    </div>
</template>

<script>
import Post from '@/components/posts/Post.vue';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'PostsList',
    components: {
        Post
    },
    computed: {
        ...mapState('posts', ['posts', 'isLoaded'])
    },
    methods: {
        ...mapActions('posts/pages', ['handleScrollFetch'])
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScrollFetch);
    },
    mounted() {
        if (this.isLoaded) window.addEventListener('scroll', this.handleScrollFetch);
    }
};
</script>

<script setup>
import { useStore } from 'vuex';
const store = useStore();

const fetchPosts = () => store.dispatch('posts/fetchPosts', { page: 1, limit: 8 });
await fetchPosts();
</script>
