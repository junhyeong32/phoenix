<template>
  <router-view />
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "App",
  components: {},
  computed: {
    ...mapGetters({}),
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations({}),
  },
  created() {},
};
</script>
<style></style>
