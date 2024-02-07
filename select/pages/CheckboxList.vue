<template>
    <div>
        <h1>checkBox Example</h1>
        <checkbox-List :data="options" label-Key="key" value-Key="value"
        :checkboxIds="checkboxIds"></checkbox-List>
    </div>
</template>

<script setup lang="ts">
import CheckboxList from "@/components/CheckboxList.vue";

const checkboxIds = ref([
    'firstId', 'secondId', 'thirdId'
])

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
    ]
);

</script>

<style scoped>

</style>
