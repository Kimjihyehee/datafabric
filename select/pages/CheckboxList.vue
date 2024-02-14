<template>
    <div>
        <h1>checkBox Example</h1>
        <checkbox-List :data="options" label-Key="key" value-Key="value"
        v-model:checkboxIds="checkboxIds" @change="checkItem"
        ></checkbox-List>
    </div>
</template>

<script setup lang="ts">
import CheckboxList from "@/components/CheckboxList.vue";

const checkboxIds = ref([
    'id1', 'id2'
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

const checkItem = (val) => {
    console.log(val)
}

</script>

<style scoped>

</style>
