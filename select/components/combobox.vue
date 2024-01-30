<template>
  <div class="combo-box" style="width: 300px; height: 30px;">
      <input type="text" @click="toggleList" :value="selectedLabel"></input>
      <ul v-show="isShowBox" v-on-click-outside="closeDropdown">
          <li v-for="(option, index) in props.data" :key="index" @click="selectItem(option)"> {{ option[labelKey]}}</li>
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
    disabled: {
        type: Boolean,
    },
    placeholder: {
        type: String,
        default: "",
    },
    disabledList: {
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

// 콤보박스 항목 선택시, 실행되는 함수
function toggleList() {
    isShowBox.value = !isShowBox.value;
    console.log(isShowBox.value)
}

// 셀렉트박스의 항목을 선택시, 실행되는 함수
function selectItem(option): void {
    selectedLabel.value = option[props.labelKey];
    emit("select", option[props.valueKey])
}

// 외부 클릭 시, 드롭다운이 닫히는 함수
const closeDropdown = () => {
    isShowBox.value = false;
}

</script>
