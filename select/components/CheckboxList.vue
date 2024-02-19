<template>
  <div class="checkbox">
    <div v-for="(option, index) in checkboxList" :key="index">
      <input
        type="checkbox"
        :id="option.id"
        :value="option.value"
      />
      <label :for="option.id">{{ option.label }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { uuid } from 'vue-uuid';

const props = defineProps({
    data: {
        type: Array<{ [key: string]: string | number }>,
        default: []
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

const checkboxList = computed(() => {
    const labelKey = props.labelKey;
    const valuekey = props.valueKey;

    return reactive(props.data.map(value => {

        return {
            id: uuid.v4(),
            label: value[labelKey],
            value: value[valuekey],
        }
    }));
});

const emit = defineEmits<{ (e: "change", item: Array<String | Number>): void }>();


</script>

<style scoped>

</style>
