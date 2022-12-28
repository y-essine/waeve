<template>
    <div class="w-full 2xs:bg-primary py-3 rounded-xl aspect-auto">
        <div class="top-part px-5 animate-pulse">
            <div class="flex mb-4">
                <div class="w-12 h-12 bg-tertiary-t rounded-full mr-4"></div>
                <div class="flex items-center w-[70%]">
                    <div class="w-[50%] h-4 bg-tertiary-t rounded-full"></div>
                </div>
            </div>
            <div class="h-2 bg-tertiary-t rounded-full max-w-[70%] mb-2.5"></div>
            <div class="h-2 bg-tertiary-t rounded-full mb-2.5"></div>
            <div class="h-2 bg-tertiary-t rounded-full max-w-[60%] mb-2.5"></div>
            <div class="h-2 bg-tertiary-t rounded-full max-w-[85%]"></div>
        </div>
        <div class="images-part bg-secondary w-full mt-4 animate-pulse">
            <div class="flex justify-center items-center w-full aspect-[16/9]">
                <svg
                    class="w-12 h-12 text-tertiary-t"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 640 512"
                >
                    <path
                        d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
                    />
                </svg>
            </div>
        </div>
        <div class="bottom-part px-5 animate-pulse mt-4">
            <div class="h-2 bg-tertiary-t rounded-full max-w-[30%] mb-2.5"></div>
            <div class="h-2 bg-tertiary-t rounded-full max-w-[45%] mb-2.5"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostSkeleton'
};
</script>
