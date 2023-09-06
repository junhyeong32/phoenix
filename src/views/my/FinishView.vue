<template>
  <div class="flex flex-col justify-center items-center h-full">
    <section
      class="banner flex flex-col justify-center items-center gap-[5rem] sm:h-full xs:h-[50rem]"
    >
      <h1 class="md:text-[3.4rem] xs:text-[2.2rem] text-[white] font-bold">
        결제가 완료되었습니다.
      </h1>

      <button
        class="w-[15.4rem] h-[4.1rem] bg-[white] text-[1.4rem] font-bold rounded"
        @click="$router.replace('/')"
      >
        메인으로
      </button>
    </section>
  </div>
</template>

<script>
import HeaderViewVue from "../../components/HeaderView.vue";
import Card from "../../components/Card/home/index.vue";
import CategoryCard from "../../components/Card/home/Category.vue";
import TravelCard from "../../components/Card/home/Travel.vue";
export default {
  name: "HomeView",
  components: {
    HeaderViewVue,
    Card,
    CategoryCard,
    TravelCard,
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
<style scoped>
.banner {
  background-image: url("/my/finish_banner.png");
  background-position: center;
  background-size: cover;
  object-fit: contain;
  width: 100vw;
  min-height: 63vh;
}
</style>
