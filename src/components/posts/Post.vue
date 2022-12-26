<template>
    <Card class="!bg-transparent 2xs:!bg-primary">
        <div class="top-part">
            <div class="user-part flex px-4 pb-2 pt-3">
                <Avatar :src="post.author.avatar" :size="14" class="cursor-pointer" />
                <div class="flex w-full justify-between ml-4">
                    <div>
                        <div class="block xs:flex">
                            <div class="flex items-center">
                                <div
                                    class="font-bold capitalize hover:text-primary-t/80 text-primary-t cursor-pointer"
                                >
                                    {{ post.author.name }}
                                </div>
                                <div v-if="post.author.verified" class="pl-3">
                                    <Icon icon="fire" color="#f5911e" :size="18" />
                                </div>
                            </div>
                            <div class="flex items-center">
                                <Icon icon="dot" :size="16" disabled class="hidden xs:block mx-2" />
                                <div
                                    class="text-sm font-normal opacity-50 hover:opacity-75 cursor-pointer lowercase"
                                >
                                    @{{ post.author.username }}
                                </div>
                            </div>
                        </div>
                        <div class="text-xs font-normal opacity-30 mt-1">{{ createdAt }}</div>
                    </div>
                    <Icon icon="ellipsis" button round :size="16" :box="24" darker />
                </div>
            </div>
            <div class="content-part mt-3 px-4">
                <div
                    :class="[
                        {
                            'font-normal text-slate-300': true,
                            'line-clamp-3': !isContentExpanded
                        },
                        'text-sm sm:text-base'
                    ]"
                    ref="clampDiv"
                >
                    {{ post.content }}
                </div>
                <!-- <div
                    v-if="isContentOverflow"
                    class="text-sm text-secondary-t hover:opacity-75 opacity-50 cursor-pointer w-fit"
                    @click="isContentExpanded = !isContentExpanded"
                >
                    {{ !isContentExpanded ? 'Show more...' : 'Show less' }}
                </div> -->
            </div>
        </div>
        <div class="middle-part">
            <div class="flex-1 flex-wrap">
                <div
                    v-for="image in [post.images[0]]"
                    :key="image"
                    class="h-0 overflow-hidden relative pb-[56.25%] pt-4"
                >
                    <v-lazy-image
                        :src="
                            'https://imagecdn.app/v2/image/' +
                            image +
                            '?w=640&h=480&fit=crop&format=webp'
                        "
                        :src-placeholder="
                            'https://imagecdn.app/v2/image/' +
                            image +
                            '?w=80&h=80&fit=crop&format=webp'
                        "
                        alt="Post attachment image"
                        class="w-full"
                    />
                </div>
            </div>
        </div>
        <div class="bottom-part px-4">
            <div class="reactions-part pt-4">
                <div class="flex items-center">
                    <div class="flex">
                        <Icon
                            icon="favorite"
                            :size="10"
                            :box="20"
                            color="white"
                            hoverColor="white"
                            circle="#d95353"
                            class="z-20"
                            stacked
                            button
                        />
                        <Icon
                            icon="comment"
                            :size="10"
                            :box="20"
                            color="white"
                            hoverColor="white"
                            circle="#74c48b"
                            class="z-10 -ml-1"
                            stacked
                            button
                        />
                        <Icon
                            icon="undo2"
                            :size="10"
                            :box="20"
                            color="white"
                            hoverColor="white"
                            circle="#784c9e"
                            class="z-0 -ml-1"
                            stacked
                            button
                        />
                    </div>
                    <div class="ml-2 text-xs font-semibold text-secondary-t opacity-60">
                        {{ formatter.format(post.reactions) }}
                    </div>
                </div>
            </div>
            <div class="actions-part pt-4 relative group">
                <div
                    class="hidden 2xs:block w-[90%] left-[5%] absolute border-0 border-t-2 border-tertiary-t opacity-30 -pt-2"
                ></div>
                <div class="flex justify-evenly pt-0 2xs:pt-3">
                    <button
                        class="flex items-center justify-center py-2 text-sm font-medium text-tertiary-t hover:text-primary-t 2xs:duration-200 rounded-lg group"
                        name="like"
                    >
                        <Icon
                            icon="favorite"
                            :size="18"
                            :box="20"
                            group
                            hoverColor="#d95353"
                        ></Icon>
                        <span class="ml-2 text-xs font-semibold hidden xs:block"> Like </span>
                    </button>
                    <button
                        class="flex items-center justify-center py-2 text-sm font-medium text-tertiary-t hover:text-primary-t 2xs:duration-200 rounded-lg group"
                        name="comment"
                    >
                        <Icon icon="comment" :size="18" :box="20" group hoverColor="#74c48b"></Icon>
                        <span class="ml-2 text-xs font-semibold hidden xs:block"> Comment </span>
                    </button>
                    <button
                        class="flex items-center justify-center py-2 text-sm font-medium text-tertiary-t hover:text-primary-t 2xs:duration-200 rounded-lg group"
                        name="repost"
                    >
                        <Icon icon="undo2" :size="19" :box="20" hoverColor="#784c9e" group></Icon>
                        <span class="ml-2 text-xs font-semibold hidden xs:block"> Repost </span>
                    </button>
                </div>
            </div>
        </div>
        <div class="relative h-2">
            <slot></slot>
        </div>
    </Card>
</template>

<script>
import moment from 'moment';
import Avatar from '@/components/ui/avatars/Avatar.vue';
import Icon from '@/components/ui/icons/Icon.vue';
import Card from '@/components/ui/card/Card.vue';
import VLazyImage from 'v-lazy-image';

export default {
    name: 'Post',
    components: {
        Avatar,
        Icon,
        Card,
        VLazyImage
    },
    data() {
        return {
            isContentOverflow: false,
            isContentExpanded: false,
            formatter: new Intl.NumberFormat('en-US', {
                notation: 'compact',
                compactDisplay: 'short'
            })
        };
    },
    props: {
        post: {
            type: Object,
            required: true
        },
        number: {
            type: Number,
            required: true
        }
    },
    computed: {
        createdAt() {
            return moment(this.post.createdAt).fromNow();
        }
    }
};
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
