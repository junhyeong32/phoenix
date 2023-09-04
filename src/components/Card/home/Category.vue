<template>
  <div
    class="w-full min-h-[10.78rem] h-auto flex flex-col px-[1.78rem] py-[2rem] rounded-[1rem] bg-[#D3EBE4]"
  >
    <img :src="img" alt="travel-logo" class="w-[1.7rem]" />
    <b class="mt-[0.8rem]">
      {{ title }}
    </b>
    <p>{{ desc }}</p>
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
