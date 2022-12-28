<template>
    <div class="flex flex-grow justify-between px-4 2xs:px-0">
        <router-link v-if="isMobile" to="/" class="items-center">
            <Icon icon="waev" color="#D95353" hoverColor="#cbd5e1" button :size="48" />
        </router-link>
        <div class="pr-3">
            <div
                class="search relative hidden xs:block w-24 xs:w-32 md:w-64 lg:w-96 2xs:duration-200 2xs:transition-w h-full"
            >
                <input
                    id="search"
                    type="text"
                    placeholder="Search..."
                    class="px-4 py-1 w-full h-full"
                    autocomplete="off"
                    v-model="search"
                    @focus="searchFocused = true"
                    @blur="searchFocused = false"
                />
                <div
                    class="hidden md:flex items-center space-x-3 text-tertiary-t opacity-70 absolute h-full top-0 right-3 pointer-events-none"
                    v-if="!searchFocused && !search"
                >
                    <kbd class="kbd kbd-sm bg-primary">CTRL</kbd>
                    <span>+</span>
                    <kbd class="kbd kbd-sm bg-primary">K</kbd>
                </div>
            </div>
        </div>
        <div class="flex items-center space-x-6">
            <Menu title="✨ Top books" bottom end>
                <template #view>
                    <Icon icon="book" button :size="26" />
                </template>
                Menu content
            </Menu>
            <Menu title="📥 Inbox" bottom end>
                <template #view>
                    <Icon icon="chat" button :size="26" />
                </template>
                Messages here.
            </Menu>
            <Menu title="🛎️ Notifcations" bottom end>
                <template #view>
                    <Icon icon="notifs" button :size="26" class="group">
                        <Badge />
                    </Icon>
                </template>
                Notifications here.
            </Menu>
            <Menu bottom end>
                <template #view>
                    <Card
                        class="cursor-pointer group hover:bg-secondary 2xs:duration-200 sticky top-5"
                        px
                        py
                        vcenter
                    >
                        <div class="flex justify-between items-center space-x-4">
                            <Avatar
                                src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1103.jpg"
                                :size="6"
                            />
                            <span
                                class="text-sm text-text-prim font-bold 2xs:duration-200 capitalize hidden sm:block"
                            >
                                YESSINE
                            </span>
                            <Icon icon="caret-down" end group :size="8" />
                        </div>
                    </Card>
                </template>
                <label class="swap swap-flip text-9xl">
                    <input type="checkbox" />

                    <div class="swap-on">😈</div>
                    <div class="swap-off">😇</div>
                </label>
            </Menu>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Menu from '@/components/ui/menu/Menu.vue';
import Icon from '@/components/ui/icons/Icon.vue';
import Badge from '@/components/ui/icons/Badge.vue';
import Avatar from '@/components/ui/avatars/Avatar.vue';
import Card from '@/components/ui/card/Card.vue';

export default {
    name: 'Navbar',
    components: {
        Menu,
        Icon,
        Badge,
        Avatar,
        Card
    },
    data() {
        return {
            search: '',
            searchFocused: false,
            keyListener: null
        };
    },
    computed: {
        ...mapGetters('device', ['isMobile'])
    },
    methods: {
        ...mapActions('posts', ['fetchPosts'])
    },
    created() {
        this.keyListener = document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                let search = document.querySelector('#search');
                search.focus();
                search.setSelectionRange(0, search.value.length);
            }
        });
    },
    destroyed() {
        document.removeEventListener('keydown', this.keyListener);
    }
};
</script>
