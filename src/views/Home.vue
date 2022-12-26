<template>
    <div class="flex flex-grow">
        <div class="w-full space-y-4">
            <div class="px-4 2xs:px-0">
                <NewPost />
            </div>
            <PostsList id="posts-list" />
        </div>
        <div class="hidden md:block ml-4 h-fit sticky top-5">
            <Recommended />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import PostsList from '@/components/posts/PostsList.vue';
import NewPost from '@/components/posts/NewPost.vue';
import Recommended from '@/components/layout/recommended/Recommended.vue';

export default {
    name: 'Home',
    components: {
        PostsList,
        NewPost,
        Recommended
    },
    methods: {
        ...mapActions('posts', ['fetchPosts', 'checkIfScrolledToBottom', 'setIsLoaded'])
    },
    created() {
        this.fetchPosts();
    },
    mounted() {
        const postsList = document.getElementById('posts-list');
        document.addEventListener('scroll', () => this.checkIfScrolledToBottom(postsList));
    },
    unmounted() {
        this.setIsLoaded(false);
        const postsList = document.getElementById('posts-list');
        document.removeEventListener('scroll', () => this.checkIfScrolledToBottom(postsList));
    }
};
</script>
