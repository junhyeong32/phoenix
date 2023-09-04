<template>
  <div class="w-[36.4rem] h-[43.4rem] flex flex-col px-[2.8rem]">
    <div class="flex flex-col bg-[white]">
      <img :src="img" alt="travel" />
      <h1>
        {{ title }}
      </h1>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script>
// import GnbView from "@/components/GnbView.vue";
export default {
  name: "CategoryCard",
  components: {},
  props: {
    title: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
    click: {
      type: Function,
      default: () => {},
    },
  },
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
