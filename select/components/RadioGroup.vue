<template>
    <client-only>
      <div class="radio-box">
          <span v-for="(option, index) in radioGroupList" :key="index">
              <input
                type="radio"
                :id="option.id"
                :name="props.name"
                :value="option.value"
                @change="change(option)"
                :disabled="option.disabled"
                :checked="option.checked"
              />
              <label :for="option.id">{{ option.label }}</label>
          </span>
      </div>
    </client-only>
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
        default: "radioGroup"
    },
    disabledList: {
        type: Array < string | number >,
        default: []
    },
    checkedItem: {
        type: [String, Number],
        default: ""
    }
})

const radioGroupList = computed(() => {
    const labelKey:string = props.labelKey;
    const valueKey:string = props.valueKey;
    const disabledList: Array<string | number> = props.disabledList;
    const checkedItem:string | number = props.checkedItem;

    return props.data.map(value => {
        return {
            id: value.id ?? uuid.v4(),
            label: value[labelKey],
            value: value[valueKey],
            disabled: disabledList.includes(value[valueKey]),
            checked: checkedItem.includes(value[valueKey])
        }
    })
})

const emit = defineEmits < { (e: "change", item: string): void }> ();
function change(option:any) {
  emit('change', option.value)
}

</script>

<style scoped>

</style>
