<template>
  <div>
      <h1>Combo Box Example</h1>
      <combobox :data="options" label-key="key" value-key="value" @select="selectItem"></combobox>
  </div>
</template>

<script setup lang="ts">
import Combobox from '../components/combobox.vue'

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