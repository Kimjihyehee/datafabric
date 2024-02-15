<template>
  <div class="checkbox">
      <div v-for="(option, index) in data" :key="index">
        <input
          type="checkbox"
          id="checkboxIds[index]"
          :value=option[valueKey]
          v-model="checkList"
          @change="checkItem"
          :class="{ 'disabled-option': isDisabled(option[valueKey]) }"
        /> {{ option[labelKey] }}
        <label for="checkboxIds[index]"></label>
      </div>
  </div>
</template>

<script setup lang="ts">
import { uuid } from 'vue-uuid';

const props = defineProps({
    checkboxIds: {
        type: Array<string>,
        default: []
    },
    data: {
        type: Array<{ [key: string]: string | number }>,
        default: []
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
        type: Array<[String, Number]>,
        default: []
    },
    disableList: {
        type: Array<[String, Number]>,
        default: []
    }
})

const emit = defineEmits<{
  (e: 'update:checkboxIds'): void
  (e: 'change'): void
}>()

// 선택한 값이 들어가는 배열
let checkList = ref([]);

// 선택된 값이 있을 경우
if(props.selectedItem) {
    checkList.value = props.selectedItem;
}

// 체크박스를 클릭할 경우 실행되는 함수
function checkItem() :void{
    emit("change", checkList.value)
}

onMounted(() => {
    if(props.data?.length !== props.checkboxIds?.length) {
        const newCheckboxIds = props.data?.map(() => uuid.v4());
        emit('update:checkboxIds', newCheckboxIds);
    }
})

// 항목별 disable처리
const isDisabled = (value): boolean => {
    //disableList 에 속하는 경우, T를 리턴
    return props.disableList.includes(value);
}

// TODO: AllCheck 기능[기본값 => "올체크" -> false / "label" -> 전체로 세팅]
</script>

<style scoped>
.disabled-option {
    pointer-events: none;
    opacity: 0.5;
}

</style>
