<template>
  <div class="w-[auto] max-w-[510px] h-[43.4rem] flex flex-col">
    <div
      class="flex flex-col justify-center items-center bg-[white] travel-card"
    >
      <img :src="img" alt="travel" />
      <div class="flex flex-col justify-center items-center p-[2.8rem]">
        <b class="text-[1.6rem]">
          {{ title }}
        </b>
        <p class="text-[1.3rem] whitespace-pre-wrap text-center mt-[1.1rem]">
          {{ desc }}
        </p>
      </div>
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
<style scpoed>
.travel-card {
  background: #fff;
  box-shadow: 0px 2px 14px 2px rgba(91, 91, 91, 0.55);
}
</style>
