<template>
  <div
    class="w-full h-[20.7rem] flex flex-col justify-between home-card px-[2.8rem] py-[2.3rem]"
    :style="`background-image:url(${img})`"
  >
    <div class="flex flex-col">
      <h1 class="text-[2.3rem] text-[white] font-bold">
        {{ title }}
      </h1>
      <p class="text-[1rem] text-[white] whitespace-pre-wrap mt-[1rem]">
        {{ desc }}
      </p>
    </div>

    <button
      class="w-[6.9rem] sm:h-[3.7rem] xs:h-[2.5rem] rounded-[7px] bg-[white]"
      @click="$router.push(path)"
    >
      둘러보기
    </button>
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
  border-radius: 12px;
}
</style>
