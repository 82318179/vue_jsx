export default {
  render() {
    const tag = "h" + this.type;
    return <tag>{this.$slots.default}</tag>;
  },
  props: {
    type: {
      type: Number
    }
  }
};
