<template>
  <div>
    <h1 v-if="type === 1 ">
      <slot></slot>
    </h1>
    <h2 v-else-if="type==2">
      <slot></slot>
    </h2>
    <h3 v-else-if="type==3">
      <slot></slot>
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style lang="scss" scoped>
</style>