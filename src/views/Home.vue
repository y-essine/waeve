<template>
    <div class="flex flex-grow">
        <div class="w-full space-y-4">
            <NewPost />
            <PostsList :posts="posts" />
        </div>
        <div class="hidden md:block ml-4">
            <Recommended />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
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
    computed: {
        ...mapState('posts', ['posts'])
    }
};
</script>
