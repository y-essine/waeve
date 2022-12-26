<template>
    <div class="flex flex-grow">
        <div class="w-full space-y-4">
            <NewPost />
            <PostsList />
        </div>
        <div class="hidden md:block ml-4">
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
        ...mapActions('posts', ['fetchPosts'])
    },
    created() {
        this.fetchPosts();
    }
};
</script>
