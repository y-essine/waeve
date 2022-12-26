<template>
    <div class="w-full pb-8 2xs:pb-0">
        <div v-if="isLoading && !isLoaded" class="flex justify-center items-center pb-8 pt-6">
            <div
                class="w-12 h-12 border-[6px] border-secondary border-t-accent rounded-full animate-spin"
            ></div>
        </div>
        <div v-else-if="isLoaded" class="2xs:space-y-4 pt-4 2xs:pt-0">
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
