<template>
  <header-view />
  <slot />
  <footer-view />
</template>

<script>
import FooterView from "./FooterView.vue";
import HeaderView from "./HeaderView.vue";
export default {
  name: "Layout",
  components: {
    FooterView,
    HeaderView,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  beforeUnmount() {},
};
</script>
<style></style>
