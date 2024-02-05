<template>
    <div class="select-box" style="width: 300px; height: 30px;">
        <button @click="toggleList" style="width: 100%; height: 100%" :disabled="disabled">{{ selectedLabel }}</button>
        <ul v-show="isShowBox" v-on-click-outside="closeDropdown">
            <li v-for="(option, index) in data" :key="index" @click="selectItem(option)"
                :class="[{ 'disabled-option': isDisabled(option[valueKey]) }, { 'active': isActive(option[valueKey]) }]" > {{ option[labelKey] }} </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'

// 드롭다운 활성화 상태
const isShowBox = ref(false);
// 선택된 값의 라벨
const selectedLabel = ref("선택");

// props로 받은 옵션 목록값
const props = defineProps({
    data: {
        type: Array,
    },
    labelKey: {
        type: [String, Number],
        default: "label"
    },
    valueKey: {
        type: String,
        default: "value"
    },
    disabled: { // 전체 disable 처리
        type: Boolean,
    },
    disableList: { // 각 항목의 disable 처리
        type: Array<String | Number>,
        default: [],
    },
    nodataMsg: {
        type: String,
    }
});

// 선택여부를 확인하는 함수
const isActive = (value): boolean => {
    return value === selectedValue.value;;
}

// 항목이 존재하지 않을 경우
if (!props.data?.length) {
    props.data?.push({ key: props.nodataMsg, value: null })
}
const emit = defineEmits<{ (e: "select", option: number | string): void }>();
// disable 적용
const isDisabled = (value): boolean => {
    // disableList에 속하는 경우, T를 리턴
    return props.disableList.includes(value);
}

// 셀렉트박스 클릭 시, 실행되는 함수
function toggleList(): void {
    isShowBox.value = !isShowBox.value;
}
// 셀렉트박스의 항목을 선택시, 실행되는 함수
function selectItem(option): void {
    const selectedValueKey = option[props.valueKey];
    selectedLabel.value = option[props.labelKey];
    emit("select", selectedValueKey)
    selectedValue.value = selectedValueKey; // 선택된 값을 selectedValue로 저장
    closeDropdown();
}

const selectedValue = ref(null); // 초기 선택 값

// 외부 클릭 시, 드롭다운이 닫히는 함수
const closeDropdown = () => {
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
