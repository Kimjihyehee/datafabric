<template>
    <div>
        <h1>Select Box Example</h1>
        <SelectBox :data="options" label-key="key" value-key="value" @select="selectItem" :disabled="false" :selected-item="selectedItem"
                   :disableList="disableList" nodataMsg="'메시지가 없습니다.'">
        </SelectBox>
    </div>
</template>
<script setup lang="ts">
import SelectBox from '../components/selectbox.vue';

const selectedItem = ref<string | number>("option11")
// disable 항목리스트
const disableList = ref<string[]>([

]);
// 드롭다운 항목에 들어갈 옵션데이터
const options = ref<object[]>(
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
