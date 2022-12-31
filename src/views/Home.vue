<template>
    <div class="flex flex-grow">
        <div class="w-full space-y-4">
            <div class="px-4 2xs:px-0">
                <NewPost v-once />
            </div>
            <Suspense>
                <template #default>
                    <PostsList id="posts-list" />
                </template>
                <template #fallback>
                    <div v-once class="w-full pb-8 2xs:pb-0 2xs:space-y-4 pt-4 2xs:pt-0">
                        <PostSkeleton />
                        <PostSkeleton />
                    </div>
                </template>
            </Suspense>
        </div>
        <div class="hidden md:block ml-4 h-fit sticky top-5">
            <Recommended v-once />
        </div>
    </div>
</template>

<script>
import NewPost from '@/components/posts/NewPost.vue';
import PostSkeleton from '@/components/posts/PostSkeleton.vue';
import Recommended from '@/components/layout/recommended/Recommended.vue';
import { useMeta } from 'vue-meta';

export default {
    name: 'Home',
    components: {
        NewPost,
        PostSkeleton,
        Recommended
    }
};
</script>

<script setup>
import { defineAsyncComponent } from 'vue';
import { useMeta } from 'vue-meta';

const PostsList = defineAsyncComponent(() => import('@/components/posts/PostsList.vue'));

useMeta({
    title: 'Home'
});
</script>
