<template>
    <div class="flex justify-center">
        <div class="w-[1280px] h-full flex py-5 px-5 sm:px-8 relative">
            <!-- sidebar -->
            <Sidebar class="pr-8" />
            <div class="w-full">
                <!-- navbar -->
                <Navbar class="pb-5" />
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
