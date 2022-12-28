<template>
    <notifications position="bottom right">
        <template #body="props">
            <div
                class="bg-accent rounded-md mx-3 mb-2 mt-1 text-primary text-sm close px-2 py-2 flex shadow-md shadow-black/10 cursor-default select-none"
                @click="close"
            >
                <div>
                    <svg
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 22 24"
                        class="inline h-6 stroke-current"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                </div>
                <div class="pl-2">
                    <p class="title font-bold">
                        {{ props.item.title }}
                    </p>
                    <div class="text">
                        {{ props.item.text }}
                    </div>
                </div>
            </div>
        </template>
    </notifications>
</template>

<script>
export default {
    name: 'MyNotifications'
};
</script>
