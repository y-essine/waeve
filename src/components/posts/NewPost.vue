<template>
    <div class="flex">
        <Avatar
            src="
                    https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1103.jpg"
            :size="12"
        />
        <div class="flex-1 pl-5">
            <textarea
                class="w-full h-12 px-4 py-3"
                placeholder="What's on your mind?"
                maxRows="6"
            ></textarea>

            <div class="flex justify-between pt-2">
                <label
                    class="flex items-center justify-center w-[30%] py-2 text-sm font-medium text-tertiary-t hover:bg-primary rounded-lg outline outline-2 outline-primary cursor-pointer"
                    htmlFor="photo"
                >
                    <Icon
                        icon="camera"
                        :size="16"
                        :box="20"
                        color="#d95353"
                        class="-mt-[1px]"
                    ></Icon>
                    <span class="ml-2 text-xs font-semibold hidden xs:block">Photo</span>
                </label>
                <label
                    class="flex items-center justify-center w-[30%] py-2 text-sm font-medium text-tertiary-t hover:bg-primary rounded-lg outline outline-2 outline-primary cursor-pointer"
                    htmlFor="video"
                >
                    <Icon icon="dice" :size="16" :box="20" color="#69be7b"></Icon>
                    <span class="ml-2 text-xs font-semibold hidden xs:block">Video</span>
                </label>
                <label
                    class="flex items-center justify-center w-[30%] py-2 text-sm font-medium text-tertiary-t hover:bg-primary rounded-lg outline outline-2 outline-primary cursor-pointer"
                >
                    <Icon icon="equalizer2" :size="16" :box="20" color="#5e99b9"></Icon>
                    <span class="ml-2 text-xs font-semibold hidden xs:block">Poll</span>
                </label>
            </div>
        </div>

        <input id="photo" name="photo" type="file" class="hidden" accept=".png,.jpg,.jpeg" />
        <input id="video" name="video" type="file" class="hidden" accept=".mp4,.mov,.mpeg" />
    </div>
</template>

<script>
import Avatar from '@/components/ui/avatars/Avatar.vue';
import Icon from '@/components/ui/icons/Icon.vue';
export default {
    name: 'NewPost',
    components: {
        Avatar,
        Icon
    }
};
</script>
