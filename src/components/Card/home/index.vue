<template>
  <div
    class="w-full h-[16.5rem] flex flex-col justify-center items-center home-card rounded-[1rem]"
    :style="`background-image:url(${img})`"
  >
    <b class="text-[1.25rem] text-[white] font-bold">
      {{ title }}
    </b>
    <p class="text-[1.25rem] text-[white]">
      {{ desc }}
    </p>
  </div>
</template>

<script>
// import GnbView from "@/components/GnbView.vue";
export default {
  name: "Card",
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
    path: {
      type: String,
      default: "",
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
<style>
.home-card {
  background-position: center;
  background-size: cover;
  object-fit: contain;
}
</style>
