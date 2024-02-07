<template>
  <div class="checkbox">
      <input
        type="checkbox"
      />
      <label></label>
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
    },
    labelKey: {
        type: String,
        default: "label"
    },
    valueKey: {
        type: String,
        default: "value"
    }
})

/** TODO :(로직구현!_) data.length가 넘어온 checkboxIds의 값과 같지 않다면,
   checkboxIds의 값을 onmounted 때, uuid생성해서 넣어주도록 한다. **/

onMounted(() => {
    if(props.data.length !== props.checkboxIds?.length) {
        createUUID()
    }
})

function createUUID() {
    const UUID = uuid.v4();
    console.log(UUID)
};

</script>

<style scoped>

</style>
