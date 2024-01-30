<template>
  <div class="combo-box" style="width: 300px; height: 30px;">
      <input type="text" @click="toggleList"></input>
      <ul v-show="isShowBox">
          <li>선택1</li>
          <li>선택2</li>
          <li>선택3</li>
      </ul>
  </div>
</template>

<script setup lang="ts">

// 드롭다운 활성화 상태
const isShowBox = ref(false);

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
</script>
