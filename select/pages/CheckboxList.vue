<template>
    <div>
        <h1>RecheckboxList Example</h1>
        <checkbox-List :data="options" label-key="key" value-key="value"
        @change="checkItem"
        :checkedList="checkedList" :disabledList="disabledList"></checkbox-List>
    </div>
</template>

<script setup lang="ts">
import CheckboxList from "@/components/CheckboxList.vue";

const checkedList = [
    'option22', 'option33'
]

// TODO : disabled 처리
const disabledList = [
    'option44'
]

const options = reactive(
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
    )
;

const checkItem = (val) => {
    console.log(val)
}

</script>

<style scoped>

</style>
