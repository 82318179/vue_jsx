<template>
  <div>
    App:
    <level :type="1">哈哈</level>
    <level :type="2">哈哈</level>
    <level :type="3">哈哈</level>

    <LevelJSX :type="3">哈哈111</LevelJSX>

    <List :data="['香蕉','苹果','橘子']" :render="render"></List>
  </div>
</template>

<script>
import Level from "./components/LevelFunction.js";
import List from "./components/List.vue";
import LevelJSX from "./components/LevelJSX.js";

export default {
  components: {
    Level,
    List,
    LevelJSX
  },
  methods: {
    render(h, data) {
      //return <span>{data}</span>;
      return h("span", {}, data);
    }
  }
};
</script>

<style  scoped>
</style>