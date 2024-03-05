<template>
    <div class="select-box" style="width: 300px; height: 30px;" v-on-click-outside="closeDropdown">
        <button @click="toggleList" style="width: 100%; height: 100%" :disabled="disabled">{{ selectedLabel }}</button>
        <ul v-show="isShowBox">
            <li v-for="(option, index) in data" :key="index" @click="selectItem(option)"
                :class="[{ 'disabled-option': isDisabled(option[valueKey]) }, { 'active': isActive(option[valueKey]) }]" > {{ option[labelKey] }} </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'
import type {SelectboxProps} from "../components/selectboxProps";

// 드롭다운 활성화 상태
const isShowBox = ref<boolean>(false);
// 선택된 값의 라벨
const selectedLabel = ref<string | number>("선택");

const props = withDefaults(defineProps<SelectboxProps>(), {
    data: () => [],
    labelKey: "label",
    valueKey: "value",
    selectedItem: "",
    disabled: false,
    disableList: () => [],
    nodataMsg: "",
    isFirstCheckedEvent: false
})

onMounted(() => {
    if(props.isFirstCheckedEvent) {
        const selectedOption = props.selectedItem && props.data.find(option => option[props.valueKey] === props.selectedItem);

        if(selectedOption) {
            emit("select", selectedOption.value)
        } else {
            console.warn("선택된 값이 목록에 없거나 disabledList 목록에 선택한 값이 존재합니다.")
        }
    }
})

// 선택여부를 확인하는 함수
const isActive = (value:string | number): boolean => {
    return value === selectedValue.value;
}

// 항목이 존재하지 않을 경우
if (!props.data?.length) {
    props.data?.push({ key: props.nodataMsg, value: "" })
}
const emit = defineEmits<{ (e: "select", option: number | string): void }>();
// disable 적용
const isDisabled = (value:string | number): boolean => {
    // disableList에 속하는 경우, T를 리턴
    return props.disableList.includes(value);
}

// 셀렉트박스 클릭 시, 실행되는 함수
function toggleList(): void {
    isShowBox.value = !isShowBox.value;
}
// 셀렉트박스의 항목을 선택시, 실행되는 함수
function selectItem(option:object): void {
    const selectedValueKey:string = option[props.valueKey];
    selectedLabel.value = option[props.labelKey];
    emit("select", selectedValueKey)
    selectedValue.value = selectedValueKey; // 선택된 값을 selectedValue로 저장
    closeDropdown();
}

const selectedValue = ref<string | number>(props.selectedItem);

if (props.selectedItem !== undefined) {
    // props.selectedItem이 undefined 아닐 때, 해당 값이 props.data 배열에 포함되어 있는지 확인
    const foundItem = props.data?.find((option) =>
        option[props.valueKey] === props.selectedItem
    );
    if(foundItem) { // foundItem의 값이 존재할 경우
        const selectedValueKey = foundItem[props.valueKey];
        selectedLabel.value = foundItem[props.labelKey];
        selectedValue.value = selectedValueKey; // 선택된 값을 selectedValue로 저장
    }
}
// 외부 클릭 시, 드롭다운이 닫히는 함수
function closeDropdown() {
    isShowBox.value = false;
}

</script>

<style>
.disabled-option {
    pointer-events: none;
    opacity: 0.5;
}

.active {
    color: burlywood;
    font-weight: bold;
}
</style>
