<template>
    <div>
        <h1>RecheckboxList Example</h1>
        <checkbox-List :data="options" label-key="key" value-key="value"></checkbox-List>
    </div>
</template>

<script setup lang="ts">
import CheckboxList from "@/components/CheckboxList.vue";

const options = ref(
    [
        {
            key: "option1",
            value: "option11",
        },
        {
            key: "option2",
            value: "option22",
        },
        {
            key: "option3",
            value: "option33",
        },
        {
            key: "option4",
            value: "option44",
        },
        {
            key: "option5",
            value: "option55",
        },
    ]
);

</script>

<style scoped>

</style>
