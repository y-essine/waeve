<template>
    <div v-bind="containerProps" class="w-full pb-8 2xs:pb-0 h-screen overflow-hidden">
        <div v-bind="wrapperProps" class="pt-4 2xs:pt-0">
            <div v-for="(data, index) in list" :id="data.data.author.name + '-' + (index + 1)" :key="index + 1"
                class="bg-secondary flex items-center h-[128px] mb-[16px] w-full px-4 rounded-md">
                <span>{{ data.data.author.name }}</span>
                <!-- <Post v-for="(post, index) in posts" :key="post.id" :post="post" class="pb-4 2xs:pb-0">
                <div class="block 2xs:hidden absolute w-[90%] px-6 opacity-20 border-0 border-t border-tertiary-t"
                    style="transform: translate(5%, 14px)"></div>
            </Post> -->
                <!-- <Post v-for="(data, index) in list" :key="data.id" :post="data" class="pb-4 2xs:pb-0">
                <div class="block 2xs:hidden absolute w-[90%] px-6 opacity-20 border-0 border-t border-tertiary-t"
                    style="transform: translate(5%, 14px)"></div>
            </Post> -->
            </div>
        </div>
    </div>
</template>

<script>
import Post from '@/components/posts/Post.vue';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    name: 'PostsList',
    components: {
        Post
    },
    computed: {
        ...mapState('posts', ['isLoaded'])
    },
    methods: {
        ...mapActions('posts/pages', ['handleScrollFetch'])
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScrollFetch);
    },
    mounted() {
        // if (this.isLoaded) window.addEventListener('scroll', this.handleScrollFetch);
    }
};
</script>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useVirtualList } from '@vueuse/core'
const store = useStore();

const statePosts = computed(() => store.state.posts.posts);

const posts = computed(() => [...statePosts.value, ...statePosts.value]);

const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(
    posts,
    {
        itemHeight: 144,
        overscan: 1,
        onScroll: (scroll) => {
            console.log(scroll);
        },

    },
)

const fetchPosts = async () => await store.dispatch('posts/fetchPosts', { page: 1, limit: 8 });
await fetchPosts();
</script>
