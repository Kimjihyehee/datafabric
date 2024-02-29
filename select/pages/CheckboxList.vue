<template>
    <div>
        <h1>RecheckboxList Example</h1>
        <checkbox-List :data="options" label-key="key" value-key="value"
        @change="checkItem"
        :checkedList="checkedList" :disabledList="disabledList" :isFirstCheckedEvent="isFirstCheckedEvent"></checkbox-List>
    </div>
</template>

<script setup lang="ts">
import CheckboxList from "@/components/CheckboxList.vue";

const isFirstCheckedEvent:Boolean = false;

let checkedList = ([
    'option22', 'option44'
])

const disabledList= [
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

const checkItem = (val:(string | number)[]) => {
    console.log(val)
}

onBeforeMount(() => {
    checkedList = checkedList?.filter(item =>
        !disabledList.includes(item));
})

</script>

<style scoped>

</style>
