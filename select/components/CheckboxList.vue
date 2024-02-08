<template>
  <div class="checkbox">
      <div v-for="(option, index) in data" :key="index">
        <input
          type="checkbox"
          id="checkboxIds[index]"
        /> {{ option[labelKey] }}
        <label for="checkboxIds[index]"></label>
      </div>
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

const emit = defineEmits(['update:checkboxIds']);

onMounted(() => {
    if(props.data.length !== props.checkboxIds?.length) {
        const newCheckboxIds = props.data.map(() => uuid.v4());
        emit('update:checkboxIds', newCheckboxIds);
    }
})

</script>

<style scoped>

</style>
