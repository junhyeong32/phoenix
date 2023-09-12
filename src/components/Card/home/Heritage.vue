<template>
  <div
    class="w-full min-h-[17.5rem] h-auto flex pl-[1.9rem] pr-[3.5rem] pt-[1.4rem] pb-[3.6rem] rounded-[1rem] bg-[#222] gap-[2rem]"
  >
    <div class="flex flex-col gap-[1.3rem]">
      <b class="mt-[2.5rem] text-[#CAA164]">
        {{ title }}
      </b>
      <p class="text-white">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
// import GnbView from "@/components/GnbView.vue";
export default {
  name: "HeritageCard",
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
