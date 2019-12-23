<template>
  <div>
    App:
    <level :type="1">哈哈</level>
    <level :type="2">哈哈</level>
    <level :type="3">哈哈</level>

    <LevelJSX :type="3">哈哈111</LevelJSX>

    <List :data="['香蕉','苹果','橘子']" :render="render"></List>

    <List1 :data="['香蕉','苹果','橘子']">
      <template v-slot="{item}">
        <li>{{item}}</li>
      </template>
    </List1>
  </div>
</template>

<script>
import Level from "./components/LevelFunction.js";
import List from "./components/List.vue";
import LevelJSX from "./components/LevelJSX.jsx";

import List1 from "./components/List1.vue";

export default {
  components: {
    Level,
    List,
    LevelJSX,
    List1
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