<template>
  <div>
    <template v-for="(item,index) in data">
      <li :key="index" v-if="!render">{{item}}</li>
      <list-item v-else :key="`a${index}`" :render="render" :item="item"></list-item>
    </template>
  </div>
</template>

<script>
import ListItem from "./ListItem.js";
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    render: {
      type: Function
    }
  },
  components: {
    ListItem
  }
};
</script>

<style lang="scss" scoped>
</style>