<template>
    <client-only>
        <div v-for="(option, index) in checkboxList" :key="index">
            <input
                type="checkbox"
                :id="option.id"
                :value="option.value"
                @change="changeList"
                :disabled="option.disabled"
                v-model="option.checked"
            />
            <label :for="option.id">{{ option.label }}</label>
        </div>
    </client-only>
</template>

<script setup lang="ts">

import {uuid} from "vue3-uuid";

const props = defineProps({
    data: {
        type: Array<{ [key: string]: string | number }>,
        default: []
    },
    labelKey: {
        type: String,
        default: "label"
    },
    valueKey: {
        type: String,
        default: "value"
    },
    checkedList: {
        type: Array< string | number >,
        default: []
    },
    disabledList: {
        type: Array< string | number >,
        default: []
    }
})

const checkboxList = computed(() => {
    const labelKey:string = props.labelKey;
    const valueKey:string = props.valueKey;
    const checkedList: Array<string | number> = props.checkedList;
    const disabledList: Array<string | number> = props.disabledList;

    return props.data.map(value => {

        return {
            id: value.id ?? uuid.v4(),
            label: value[labelKey],
            value: value[valueKey],
            checked: checkedList.includes(value[valueKey]),
            disabled: disabledList.includes(value[valueKey])
        }
    });
});

const emit = defineEmits<{ (e: "change"): void }>();

function changeList(option: any) {
    // 현재 체크된 항목들만 필터링
    const checkedValues = checkboxList.value.filter(item => item.checked).map(item => item.value);
    // 체크된 항목들의 value 배열을 부모 컴포넌트로 emit
    emit('change', checkedValues);
};


</script>

<style scoped>

</style>
