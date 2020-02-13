<template>
  <input type="text" v-model="value" data-qa="text-box" />
</template>

<script>
export default {
  name: "MyInputComponent",
  props: {
    value: String
  }
};
</script>
