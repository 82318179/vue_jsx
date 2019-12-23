export default {
    props: {
        type: {
            type: Number,
            default: 1
        }
    },
    render(h) {
        return h('h' + this.type, {}, this.$slots.default);
    }
}