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
import type {CheckboxListProps} from '../components/CheckboxListProps';

const props = withDefaults(defineProps<CheckboxListProps>(), {
    data: () => [],
    labelKey: "label",
    valueKey: "value",
    checkedList: () => [],
    disabledList: () => [],
    isFirstCheckedEvent: false
})
onMounted(() => {
    if(props.isFirstCheckedEvent) {
        // 체크된 항목들이 data 배열에 존재하는지 확인
        const selectedOptions = props.data.filter(item =>
            props.checkedList.includes(item[props.valueKey]) &&
            !props.disabledList.includes(item[props.valueKey])
        );

        // 적어도 하나의 선택된 항목이 유효한 경우
        if(selectedOptions.length > 0) {
            // 체크된 항목들의 value 배열을 emit
            const selectedValues = selectedOptions.map(item => item[props.valueKey]);
            emit("change", selectedValues);
        } else {
            console.warn("선택된 값이 목록에 없거나 disabledList 목록에 선택한 값이 존재합니다.");
        }
    }
})

const checkboxList = computed(() => {
    const labelKey:string = props.labelKey;
    const valueKey:string | number = props.valueKey;
    const checkedList: (string | number)[] = props.checkedList;
    const disabledList: (string | number)[] = props.disabledList;

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

const emit = defineEmits<{ (e: "change", item: (string | number)[]): void }>();

function changeList(option: any) {
    // 현재 체크된 항목들만 필터링
    const checkedValues = checkboxList.value.filter(item => item.checked).map(item => item.value);
    // 체크된 항목들의 value 배열을 부모 컴포넌트로 emit
    emit('change', checkedValues);
};

</script>

<style scoped>

</style>
