<template>
  <div
    class="h-screen flex flex-col items-center bg-[#E9E3E3] md:px-[120px] pt-[5.1rem]"
  >
    <div
      class="w-full flex justify-center items-center text-[3rem] text-[#630606] font-bold relative"
    >
      <img
        src="/online/arrow.png"
        alt="arrow"
        class="absolute left-0 cursor-pointer"
        @click="$router.back()"
      />
      온라인 진단 검사
    </div>

    <div
      class="w-full h-[6.8rem] flex items-center text-[1.9rem] font-bold bg-white rounded-[9px] mt-[4.7rem] px-[2.7rem]"
    >
      Q. 나는 이런 분야에 관심이 있다. (중복 선택 가능)
    </div>

    <div class="grid md:grid-cols-6 xs:grid-cols-2 mt-[3.8rem] gap-[1.5rem]">
      <div
        v-for="(item, index) in test_datasets"
        :key="index"
        class="w-full min-h-[9.1rem] h-auto flex justify-center items-center rounded-[1rem] px-[1rem] py-[1.6rem] text-[1.6rem] text-center font-bold cursor-pointer relative"
        :class="
          test_datasets[index].is_check ? 'bg-primary text-white' : 'bg-white'
        "
        @click="toggleCheck(item)"
      >
        {{ item.text }}
        <img
          src="/online/check.png"
          alt="check "
          class="absolute right-[10px] top-[10px]"
          v-if="test_datasets[index].is_check"
        />
      </div>
    </div>

    <button
      class="w-[13rem] h-[5rem] flex justify-center items-center bg-[#B4696D] rounded-[1rem] text-[white] text-[1.7rem] mt-[4.3rem]"
      @click="$router.push('/online/ability')"
    >
      다음
      <img src="/online/right-arrow.png" alt="right-arrow" class="ml-[10px]" />
    </button>
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
