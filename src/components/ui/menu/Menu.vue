<template>
    <div class="dropdown dropdown-bottom dropdown-end">
        <label tabIndex="{0}">
            <slot name="view"></slot>
        </label>
        <ul tabIndex="{0}" class="dropdown-content menu shadow-xl bg-primary rounded-box w-52 mt-4">
            <Card :title="title" px py class="shadow-xl">
                <slot></slot>
            </Card>
        </ul>
    </div>
</template>

<script>
import Card from '@/components/ui/card/Card.vue';

export default {
    name: 'Menu',
    props: {
        title: {
            type: String
        }
    },
    components: {
        Card
    }
};
</script>
