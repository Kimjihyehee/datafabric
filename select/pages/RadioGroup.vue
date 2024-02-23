<template>
  <h1>Radio Group Example</h1>
  <radio-Group :data="options" label-Key="key" value-Key="value" name="radioGroup"
  @change="selectedValue" :disabledList="disabledList" :disabled="false" :checkedItem="checkedItem"
  ></radio-Group>
</template>

<script setup lang="ts">

const disabledList = [
    "option44"
]

const checkedItem = 'option11'

const options = [
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

const selectedValue = (val) => {
    console.log(val)
}
</script>

<style scoped>

</style>
