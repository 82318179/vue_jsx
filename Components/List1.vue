<template>
  <div>
    <template v-for="(item) in data">
      <slot :item="item"></slot>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    render: {
      type: Function
    }
  }
};
</script>

<style lang="scss" scoped>
</style>