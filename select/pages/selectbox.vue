<template>
    <div>
        <h1>Select Box Example</h1>
        <SelectBox :data="options" label-key="key" value-key="value" @select="selectItem" :disabled="false" :selected-item="selectedItem"
                   :disableList="disableList" nodataMsg="'메시지가 없습니다.'" :isFirstCheckedEvent="isFirstCheckedEvent">
        </SelectBox>
    </div>
</template>
<script setup lang="ts">
import SelectBox from '../components/selectbox.vue';
import type {Ref} from "vue";

const isFirstCheckedEvent:boolean = true;

const selectedItem: Ref<string | number> = ref("option11")
// disable 항목리스트
const disableList: Ref<string[]> = ref([

]);
// 드롭다운 항목에 들어갈 옵션데이터
const options: Ref<object[]> = ref(
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
    ]
);

function selectItem(value:string) {
    console.log(value)
}

</script>
