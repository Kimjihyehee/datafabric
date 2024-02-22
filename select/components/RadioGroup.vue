<template>
  <div class="radio-box">
      <span v-for="(option, index) in radioGroupList" :key="index">
          <input
            type="radio"
            :id="option.id"
            :name="option.name"
            :value="option.value"
          />
          <label :for="option.id">{{ option.label }}</label>
      </span>
  </div>
</template>

<script setup lang="ts">

import {uuid} from "vue3-uuid";

const props = defineProps({
    data : {
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
    },
    name: {
        type: String,
        default: ""
    }
})

const radioGroupList = computed(() => {
    const labelKey:string = props.labelKey;
    const valueKey:string = props.valueKey;
    const name:string = props.name;

    return props.data.map(value => {

        return {
            id: value.id ?? uuid.v4(),
            label: value[labelKey],
            value: value[valueKey],
            name: value[name]
        }
    })
})

</script>

<style scoped>

</style>
