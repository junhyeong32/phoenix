<template>
  <div
    class="sm:h-screen xs:h-[67vh] flex flex-col items-center bg-[#E9E3E3] md:px-[120px] xs:px-[2rem] pt-[5.1rem]"
  >
    <div
      class="w-full flex justify-center items-center md:text-[3rem] xs:text-[2rem] text-[#630606] font-bold relative"
    >
      <img
        src="/online/arrow.png"
        alt="arrow"
        class="absolute left-0 cursor-pointer w-[2.4rem]"
        @click="$router.back()"
      />
      진단결과
    </div>

    <div
      class="w-full md:h-[27.6rem] xs:h-[35rem] flex flex-col justify-center items-center text-[1.5rem] bg-white rounded-[9px] mt-[4.7rem] px-[2.7rem]"
    >
      <img src="/online/finish.png" alt="arrow" />
      <b class="mt-[3.8rem]">진단이 성공적으로 완료되었습니다. </b>
      <p class="text-center">
        고객님의 역량 진단에 관한 보고서는 자동으로 pdf 다운로드가
        진행됩니다.<br /><br />
      </p>
      <p class="text-center">
        검사받은 PC의 [다운로드] 혹은 [Download]폴더에서 확인하실 수 있습니다.
      </p>
    </div>
  </div>
</template>

<script>
import HeaderViewVue from "../../components/HeaderView.vue";
import Card from "../../components/Card/home/index.vue";

import TravelCard from "../../components/Card/home/Travel.vue";
export default {
  name: "OnlineView",
  components: {
    HeaderViewVue,
    Card,

    TravelCard,
  },
  props: {},
  data() {
    return {
      menu: "전체",
      count: 0,
      test_datasets: [
        { text: "취업", is_check: false },
        { text: "창업", is_check: false },
        { text: "자기 개발", is_check: false },
        { text: "지금 하는 일을 더 잘하고 싶다", is_check: false },
        { text: "취미", is_check: false },
        { text: "MBTI보다 더 세부적인 나의 성향", is_check: false },
      ],
    };
  },
  computed: {},
  methods: {
    toggleCheck(item) {
      item.is_check = !item.is_check;
    },
  },
  created() {},
  mounted() {},
  beforeUnmount() {},
};
</script>
<style scoped>
.banner {
  background-image: url("/marketplace/banner.png");
  background-position: center;
  background-size: cover;
  object-fit: contain;
  width: 100vw;
}

.product {
  background-image: url("/product/product.png");
  background-position: center;
  background-size: cover;
  object-fit: contain;
  border-radius: 12px;
}
</style>
