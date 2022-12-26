<template>
    <Card class="w-[14rem] lg:w-[20rem]" title="✨ Recommended">
        <div class="flex flex-col items-center w-full">
            <div
                v-for="p in people"
                :key="p.username"
                class="flex items-center justify-between py-3 px-4 hover:bg-secondary duration-200 cursor-pointer w-full"
            >
                <div class="flex items-center">
                    <Avatar :src="p.avatar" :size="12" class="mr-4" />
                    <span>
                        <div class="text-sm font-medium">{{ p.name }}</div>
                        <div class="text-xs opacity-50">@{{ p.username }}</div>
                    </span>
                </div>
                <button
                    class="bg-slate-300 hover:bg-slate-400 duration-200 text-primary font-semibold text-xs rounded-full py-2 px-5 ml-3 hidden lg:block"
                >
                    Follow
                </button>
            </div>
        </div>
    </Card>
</template>

<script>
import Card from '@/components/ui/card/Card.vue';
import Avatar from '@/components/ui/avatars/Avatar.vue';

export default {
    name: 'Recommended',
    components: {
        Card,
        Avatar
    },
    data() {
        return {
            people: [
                {
                    name: 'Ballacks Sohn',
                    avatar: 'https://picsum.photos/200/307',
                    username: 'bizarreballz'
                },
                {
                    name: 'Yoda der Große',
                    avatar: 'https://picsum.photos/200/306',
                    username: 'yodagross'
                },
                {
                    name: 'Pop Smoke',
                    avatar: 'https://picsum.photos/200/309',
                    username: 'popsmoke'
                }
            ]
        };
    }
};
</script>
