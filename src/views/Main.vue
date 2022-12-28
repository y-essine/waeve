<template>
    <div class="flex justify-center">
        <div class="w-[1280px] h-full flex py-5 2xs:px-8 relative">
            <!-- sidebar -->
            <Sidebar v-once />
            <div class="w-full">
                <!-- navbar -->
                <Navbar class="pb-5" v-once />
                <!-- content -->
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/layout/navbar/Navbar.vue';
import Sidebar from '@/components/layout/sidebar/Sidebar.vue';

export default {
    name: 'Main',
    components: {
        Navbar,
        Sidebar
    }
};
</script>
