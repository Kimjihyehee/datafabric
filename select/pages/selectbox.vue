<template>
    <div>
        <h1>Select Box Example</h1>
        <SelectBox :data="options" label-key="key" value-key="value" @select="selectItem" :disabled="false"
                   :disableList="disableList" nodataMsg="'메시지가 없습니다.'">
        </SelectBox>
    </div>
</template>
<script setup lang="ts">
import SelectBox from '../components/selectbox.vue';

// disable 항목리스트
const disableList = ref([

]);
// 드롭다운 항목에 들어갈 옵션데이터
const options = ref(
    [
        {
            key: "option1",
            value: "option1",
        },
        {
            key: "option2",
            value: "option2",
        },
        {
            key: "option3",
            value: "option3",
        },
    ]
);

function selectItem(value) {
    console.log(value)
}

</script>
