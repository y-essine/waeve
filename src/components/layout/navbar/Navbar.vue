<template>
    <div class="flex">
        <div class="flex items-center pr-8 w-20 smd:w-40">
            <Icon icon="waev" color="#D95353" hoverColor="#cbd5e1" button :size="48" />
        </div>
        <div class="flex flex-grow justify-between">
            <div class="pr-3">
                <div
                    class="search relative hidden xs:block w-24 xs:w-32 md:w-64 lg:w-96 duration-200 transition-w h-full"
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
                        <Icon icon="notifs" button :size="26">
                            <Badge />
                        </Icon>
                    </template>
                    Notifications here.
                </Menu>
                <Menu bottom end>
                    <template #view>
                        <Card
                            class="cursor-pointer group hover:bg-secondary duration-200"
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
                                    class="text-sm text-text-prim font-bold duration-200 capitalize hidden sm:block"
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
    </div>
</template>

<script>
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

<!-- import clsx from 'clsx';
import Avatar from '@/components/ui/avatars/Avatar';
import Icon from '@/components/ui/icons/Icon';
import Badge from '@/components/ui/icons/Badge';
import Card from '@/components/ui/card/Card';
import Menu from '@/components/ui/menu/Menu';

const Navbar = ({ class }) => {
    return (
        <div class={clsx('flex', class)}>
            <div class="flex items-center pr-8 w-20 smd:w-40">
                <div class="pl-0 smd:pl-12">
                    <Icon icon="waev" color="#D95353" button size={48} />
                </div>
            </div>
            <div class="flex flex-grow justify-between">
                <div class="pr-3">
                    <input
                        type="text"
                        placeholder="Search..."
                        class="px-4 py-1 h-full hidden xs:block w-24 xs:w-32 md:w-64 lg:w-96 duration-200 transition-w"
                    />
                </div>
                <div class="flex items-center space-x-6">
                    <Menu
                        template={<Icon icon="book" button size={26} />}
                        title="✨ Top books"
                        class="mt-4"
                        bottom
                        end>
                        Menu content
                    </Menu>
                    <Menu
                        template={<Icon icon="chat" button size={26} />}
                        title="📥 Inbox"
                        class="mt-4"
                        bottom
                        end>
                        Messages here.
                    </Menu>
                    <Menu
                        template={
                            <Icon icon="notifs" button size={26}>
                                <Badge />
                            </Icon>
                        }
                        title="🛎️ Notifications"
                        class="mt-4"
                        bottom
                        end>
                        Notifications here.
                    </Menu>
                    <Menu
                        template={
                            <Card
                                class="cursor-pointer group hover:bg-secondary duration-200"
                                px
                                py
                                vcenter>
                                <div class="flex justify-between items-center space-x-4">
                                    <Avatar src="/2.jpg" size={6} />
                                    <span class="text-sm text-text-prim font-bold duration-200 capitalize hidden sm:block">
                                        YESSINE
                                    </span>
                                    <Icon icon="caret-down" end group size={8} />
                                </div>
                            </Card>
                        }
                        class="mt-4"
                        bottom
                        end>
                        <label class="swap swap-flip text-9xl">
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" />

                            <div class="swap-on">😈</div>
                            <div class="swap-off">😇</div>
                        </label>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Navbar; -->
