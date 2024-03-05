<template>
  <h1>Radio Group Example</h1>
  <radio-Group :data="options" label-Key="key" value-Key="value" name="radioGroup"
  @change="selectedValue" :disabledList="disabledList" :checkedItem="checkedItem" :isFirstCheckedEvent="isFirstCheckedEvent"
  ></radio-Group>
</template>

<script setup lang="ts">

const disabledList: string[] = [
    "option44"
]
// 기본 선택한 값을 전달하는 이벤트 사용 여부
const isFirstCheckedEvent:boolean = true;

let checkedItem:string = "option11";

const options:object[] = [
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
    {
        key: "option4",
        value: "option44",
    },
    {
        key: "option5",
        value: "option55",
    },
]

const selectedValue = (val: string) :void => {
    console.log(val)
}

onBeforeMount(() => {
    if(disabledList.includes(checkedItem)) {
      checkedItem = "";
    }
})

</script>

<style scoped>

</style>
