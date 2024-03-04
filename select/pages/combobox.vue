<template>
  <div>
      <h1>Combo Box Example</h1>
      <combobox :data="options" label-key="key" value-key="value" @select="selectItem" :disabled="false" :selected-item="selectedItem"
      :disabledList="disableList" nodataMsg="'메시지가 없습니다.'" :isFirstCheckedEvent="isFirstCheckedEvent"></combobox>
  </div>
</template>

<script setup lang="ts">
import Combobox from '../components/combobox.vue'

const isFirstCheckedEvent:boolean = true;

const selectedItem = ref("option33")

const disableList = ref([
]);

const options = (
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
)
function selectItem(value: string) {
    console.log(value);
}

</script>

<style scoped>
</style>
