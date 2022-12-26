<template>
    <Card px py class="group">
        <div class="post flex pt-2">
            <div class="mr-4">
                <Avatar :src="post.author.avatar" :size="14" class="cursor-pointer" />
            </div>
            <div class="w-full h-full">
                <div class="top-part">
                    <div class="flex justify-between">
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
                        <div class="flex items-center">
                            <Icon icon="ellipsis" button round :size="16" :box="24" darker />
                        </div>
                    </div>
                    <div class="text-xs font-normal opacity-30">{{ createdAt }}</div>
                </div>
                <div class="content-part mt-3 pr-3">
                    <div
                        :class="{
                            'font-normal text-slate-300': true,
                            'line-clamp-3': !isContentExpanded
                        }"
                        ref="clampDiv"
                    >
                        {{ post.content }}
                    </div>
                    <div
                        v-if="isContentOverflow"
                        class="text-sm text-secondary-t hover:opacity-75 opacity-50 cursor-pointer w-fit"
                        @click="isContentExpanded = !isContentExpanded"
                    >
                        {{ !isContentExpanded ? 'Show more...' : 'Show less' }}
                    </div>
                </div>
                <div class="images-part mt-3 pr-3">
                    <div class="flex-1 flex-wrap">
                        <div v-for="(image, index) in post.images" :key="index" class="rounded-md">
                            <img
                                :src="image"
                                alt="Post attachment image"
                                class="w-full h-full min-h-[12rem] max-h-[20rem] rounded-md overflow-hidden object-cover"
                                width="300"
                                height="300"
                            />
                        </div>
                    </div>
                </div>
                <div class="reactions-part mt-3">
                    <div class="flex items-center">
                        <Icon
                            icon="favorite"
                            :size="10"
                            :box="18"
                            color="white"
                            hoverColor="white"
                            circle="#d95353"
                            class="z-20 outline outline-3 outline-primary rounded-full"
                            stacked
                            button
                        />
                        <Icon
                            icon="comment"
                            :size="10"
                            :box="18"
                            color="white"
                            hoverColor="white"
                            circle="#74c48b"
                            class="z-10 outline outline-3 outline-primary rounded-full"
                            stacked
                            button
                        />
                        <Icon
                            icon="undo2"
                            :size="10"
                            :box="18"
                            color="white"
                            hoverColor="white"
                            circle="#784c9e"
                            class="z-0 outline outline-3 outline-primary rounded-full"
                            stacked
                            button
                        />
                        <div class="ml-2 text-xs font-semibold text-secondary-t opacity-60">
                            {{ formatter.format(post.reactions) }}
                        </div>
                    </div>
                </div>
                <div class="buttons-part pt-4 pr-3">
                    <div class="flex justify-between">
                        <button
                            class="flex items-center justify-center py-2 text-sm font-medium text-tertiary-t hover:text-primary-t duration-200 rounded-lg group"
                        >
                            <Icon
                                icon="favorite"
                                :size="14"
                                :box="20"
                                group
                                hoverColor="#d95353"
                            ></Icon>
                            <span class="ml-2 text-xs font-semibold hidden xs:block"> Like </span>
                        </button>
                        <button
                            class="flex items-center justify-center py-2 text-sm font-medium text-tertiary-t hover:text-primary-t duration-200 rounded-lg group"
                        >
                            <Icon icon="comment" :size="16" :box="20" group></Icon>
                            <span class="ml-2 text-xs font-semibold hidden xs:block">
                                Comment
                            </span>
                        </button>
                        <button
                            class="flex items-center justify-center py-2 text-sm font-medium text-tertiary-t hover:text-primary-t duration-200 rounded-lg group"
                        >
                            <Icon icon="undo2" :size="16" :box="20" group></Icon>
                            <span class="ml-2 text-xs font-semibold hidden xs:block"> Repost </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Card>
</template>

<script>
import moment from 'moment';
import Avatar from '@/components/ui/avatars/Avatar.vue';
import Icon from '@/components/ui/icons/Icon.vue';
import Card from '@/components/ui/card/Card.vue';

export default {
    name: 'Post',
    components: {
        Avatar,
        Icon,
        Card
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
        }
    },
    computed: {
        createdAt() {
            return moment(this.post.createdAt).fromNow();
        }
    }
};
</script>
<!-- 
import moment from 'moment';
import clsx from 'clsx';
import Image from 'next/image';
import { useState, useRef, useLayoutEffect } from 'react';
import { Avatar, Icon, Card } from '@/components/ui';

const Post = ({ post }) => {
    // get created at and format with moment to ago
    const createdAt = moment(post.createdAt).fromNow();
    const formatter = new Intl.NumberFormat('en-US', {
        notation: 'compact',
        compactDisplay: 'short'
    });

    const clampDiv = useRef(null);

    useLayoutEffect(() => {
        if (clampDiv.current && clampDiv.current.clientHeight < clampDiv.current.scrollHeight) {
            setContentOverflow(true);
        }
    }, [clampDiv]);

    const [isContentOverflow, setContentOverflow] = useState(false);
    const [isContentExpanded, setContentExpanded] = useState(false);

    return (
        <Card px py class="group">
            <div class="post flex pt-2">
                <div class="mr-4">
                    <Avatar src={post.author.avatar} size={14} class="cursor-pointer" />
                </div>
                <div class="w-full h-full">
                    <div class="top-part">
                        <div class="flex justify-between">
                            <div class="block xs:flex">
                                <div class="flex items-center">
                                    <div class="font-bold capitalize hover:text-primary-t/80 text-primary-t cursor-pointer">
                                        {post.author.name}
                                    </div>
                                    {post.author.verified && (
                                        <div class="pl-3">
                                            <Icon icon="fire" color="#f5911e" size={18} />
                                        </div>
                                    )}
                                </div>
                                <div class="flex items-center">
                                    <Icon
                                        icon="dot"
                                        size={16}
                                        disabled
                                        class="hidden xs:block mx-2"
                                    />
                                    <div class="text-sm font-normal opacity-50 hover:opacity-75 cursor-pointer lowercase">
                                        @{post.author.username}
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <Icon icon="ellipsis" button round size={16} box={24} darker />
                            </div>
                        </div>
                        <div class="text-xs font-normal opacity-30">{createdAt}</div>
                    </div>
                    <div class="content-part mt-3 pr-3">
                        <div
                            class={clsx(
                                'font-normal text-slate-300',
                                !isContentExpanded && 'line-clamp-3'
                            )}
                            ref={clampDiv}>
                            {post.content}
                        </div>
                        {isContentOverflow && (
                            <div
                                class="text-sm text-secondary-t hover:opacity-75 opacity-50 cursor-pointer w-fit"
                                onClick={() => setContentExpanded(!isContentExpanded)}>
                                {!isContentExpanded ? 'Show more...' : 'Show less'}
                            </div>
                        )}
                    </div>
                    {post.images && (
                        <div class="images-part mt-3 pr-3">
                            <div class="flex-1 flex-wrap">
                                {post.images?.map((image, index) => (
                                    <div key={index} class="rounded-md">
                                        <Image
                                            src={image}
                                            alt=""
                                            class="w-full h-full min-h-[12rem] max-h-[20rem] rounded-md overflow-hidden object-cover"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div class="reactions-part mt-3">
                        <div class="flex items-center">
                            <Icon
                                icon="favorite"
                                size={10}
                                box={18}
                                color="white"
                                hoverColor="white"
                                circle="#d95353"
                                class="z-20 outline outline-3 outline-primary rounded-full"
                                stacked
                            />
                            <Icon
                                icon="comment"
                                size={10}
                                box={18}
                                color="white"
                                hoverColor="white"
                                circle="#74c48b"
                                class="z-10 outline outline-3 outline-primary rounded-full"
                                stacked
                            />
                            <Icon
                                icon="undo2"
                                size={10}
                                box={18}
                                color="white"
                                hoverColor="white"
                                circle="#784c9e"
                                class="z-0 outline outline-3 outline-primary rounded-full"
                                stacked
                            />
                            <div class="ml-2 text-xs font-semibold text-secondary-t opacity-60">
                                {formatter.format(post.reactions)}
                            </div>
                        </div>
                    </div>
                    <div class="buttons-part pt-4 pr-3">
                        <div class="flex justify-between">
                            <button class="flex items-center justify-center py-2 text-sm font-medium text-tertiary-t hover:text-primary-t duration-200 rounded-lg group">
                                <Icon
                                    icon="favorite"
                                    size={14}
                                    box={20}
                                    group
                                    hoverColor="#d95353"></Icon>
                                <span class="ml-2 text-xs font-semibold hidden xs:block">
                                    Like
                                </span>
                            </button>
                            <button class="flex items-center justify-center py-2 text-sm font-medium text-tertiary-t hover:text-primary-t duration-200 rounded-lg group">
                                <Icon icon="comment" size={16} box={20} group></Icon>
                                <span class="ml-2 text-xs font-semibold hidden xs:block">
                                    Comment
                                </span>
                            </button>
                            <button class="flex items-center justify-center py-2 text-sm font-medium text-tertiary-t hover:text-primary-t duration-200 rounded-lg group">
                                <Icon icon="undo2" size={16} box={20} group></Icon>
                                <span class="ml-2 text-xs font-semibold hidden xs:block">
                                    Repost
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Post; -->
