<template>
  <div>
      <h1>Combo Box Example</h1>
      <combobox :data="options" label-key="key" value-key="value" @select="selectItem" :disabled="false" :selected-item="selectedItem"
      :disableList="disableList" nodataMsg="'메시지가 없습니다.'"></combobox>
  </div>
</template>

<script setup lang="ts">
import Combobox from '../components/combobox.vue'

const selectedItem = ref("option11")

const disableList = ref([
    'option3'
]);

const options = ref(
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
function selectItem(value) {
    console.log(value);
}

</script>

<style scoped>
</style>
