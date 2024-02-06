<template>
  <div class="combo-box" style="width: 300px; height: 30px;">
      <input type="text" @click="toggleList"
             v-model="selectedLabel" :disabled="disabled"/>
      <ul v-show="isShowBox" v-on-click-outside="closeDropdown">
          <li v-for="(option, index) in filteredOptions" :key="index" @click="selectItem(option)"
          :class="[{ 'disabled-option' : isDisabled(option[valueKey]) }, { 'active': isActive(option[valueKey]) }]"> {{ option[labelKey] }}</li>
      </ul>
  </div>
</template>

<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'
// 드롭다운 활성화 상태
const isShowBox = ref(false);

const selectedLabel = ref("")

const emit = defineEmits<{ (e: "select", option: number | string): void }>();

// props로 받은 옵션 목록값
const props = defineProps({
    data: {
        type: Array<{ [key: string]: string | number }>,
    },
    labelKey: {
        type: [String, Number],
        default: "label"
    },
    valueKey: {
        type: String,
        default: "value"
    },
    selectedItem: {
        type: [String, Number]
    },
    disabled: {
        type: Boolean,
    },
    placeholder: {
        type: String,
        default: "",
    },
    disableList: {
        type: Array<String | Number>,
        default: [],
    },
    nodataMsg: {
        type: String,
    },
    noSearchMsg: {
        type: String
    }

})

// 선택여부를 확인하는 함수
const isActive = (value): boolean => {
    return value === selectedValue.value;
}

const filteredOptions = computed(() => {
    if (selectedLabel.value) {
        return props.data.filter((option) =>
            option[props.labelKey].includes(selectedLabel.value)
        )
    } else {
        return props.data
    }
});

// 콤보박스 항목 선택시, 실행되는 함수
function toggleList() {
    isShowBox.value = !isShowBox.value;
}

const isDisabled = (value): boolean => {
    return props.disableList.includes(value);
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
