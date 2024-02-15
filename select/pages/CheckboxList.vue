<template>
    <div>
        <h1>checkBox Example</h1>
        <checkbox-List :data="options" label-Key="key" value-Key="value"
        v-model:checkboxIds="checkboxIds" @change="checkItem" :selected-Item="selectedItem" :disableList="disableList"
        ></checkbox-List>
    </div>
</template>

<script setup lang="ts">
import CheckboxList from "@/components/CheckboxList.vue";

const checkboxIds = ref([
    'id1', 'id2'
])

const selectedItem = ref([
    'option11', 'option22'
])

const disableList = ref([
    'option33'
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

const checkItem = (val) => {
    console.log(val)
}

</script>

<style scoped>

</style>
