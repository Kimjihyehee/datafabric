<template>
  <div>
      <h1>Combo Box Example</h1>
      <combobox :data="options" label-key="key" value-key="value" @select="selectItem" :disabled="false"
      :disableList="disableList" nodataMsg="'메시지가 없습니다.'"></combobox>
  </div>
</template>

<script setup lang="ts">
import Combobox from '../components/combobox.vue'

const disableList = ref([
    'option3'
]);

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
)
function selectItem(value) {
    console.log(value);
}

</script>

<style scoped>
</style>
