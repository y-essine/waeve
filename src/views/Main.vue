<template>
    <div class="flex justify-center">
        <div class="w-[1280px] h-full">
            <!-- navbar -->
            <Navbar class="py-5 px-5 sm:px-8" />
            <div class="flex py-5 px-5 sm:px-8">
                <!-- sidebar -->
                <!-- <Sidebar /> -->
                <!-- content -->
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/layout/navbar/Navbar.vue';
// import Sidebar from '@/components/layout/sidebar/Sidebar.vue';

export default {
    name: 'Main',
    components: {
        Navbar
        // Sidebar
    }
};
</script>

<!-- import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layouts/navbar/Navbar';
import Sidebar from '@/components/layouts/sidebar/Sidebar';

function Main() {
    return (
        <div className="flex justify-center ">
            <div className="w-[1280px] h-full">
                {/* navbar */}
                <Navbar className="py-5 px-5 sm:px-8" />
                <div className="flex py-5 px-5 sm:px-8">
                    {/* sidebar */}
                    <Sidebar />
                    {/* content */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Main; -->
