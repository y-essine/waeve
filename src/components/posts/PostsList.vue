<template>
    <div class="w-full">
        <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>

<script>
import Post from './Post.vue';

export default {
    name: 'PostsList',
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    components: {
        Post
    }
};
</script>
