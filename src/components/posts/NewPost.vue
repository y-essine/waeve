<template>
    <div class="flex">
        <Avatar
            src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1103.jpg"
            :size="12"
            class="mr-4 hidden 2xs:block"
        />
        <div class="flex-1 h-12">
            <textarea
                class="w-full h-12 px-4 py-3 text-tertiary-t focus:text-primary-t text-sm xs:text-base"
                placeholder="What's on your mind?"
                id="mytext"
            ></textarea>
            <div v-if="false" class="flex justify-between pt-2">
                <label
                    class="group flex items-center justify-center w-[30%] py-2 text-sm font-medium text-tertiary-t hover:bg-primary rounded-lg border-2 border-primary cursor-pointer"
                    htmlFor="photo"
                >
                    <Icon icon="camera" group :size="16" :box="20" class="-mt-[1px]"></Icon>
                    <span class="ml-2 text-xs font-semibold hidden xs:block">Photo</span>
                </label>
                <label
                    class="group flex items-center justify-center w-[30%] py-2 text-sm font-medium text-tertiary-t hover:bg-primary rounded-lg border-2 border-primary cursor-pointer"
                    htmlFor="video"
                >
                    <Icon icon="dice" group :size="16" :box="20"></Icon>
                    <span class="ml-2 text-xs font-semibold hidden xs:block">Video</span>
                </label>
                <label
                    class="group flex items-center justify-center w-[30%] py-2 text-sm font-medium text-tertiary-t hover:bg-primary rounded-lg border-2 border-primary cursor-pointer"
                >
                    <Icon icon="equalizer2" group :size="16" :box="20"></Icon>
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
    },
    data() {
        return {
            text: '',
            inputListener: null
        };
    },
    mounted() {
        const textarea = document.getElementById('mytext');
        this.inputListener = textarea.addEventListener('input', (e) => {
            textarea.style.height = 0;
            textarea.style.height = textarea.scrollHeight + 'px';
        });
    },
    beforeDestroy() {
        document.removeEventListener('input', this.inputListener);
    }
};
</script>
