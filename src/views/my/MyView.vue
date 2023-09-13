<template>
  <div class="flex flex-col w-full">
    <div class="flex gap-[12px] md:mt-0 xs:mt-[1rem]">
      <button
        class="px-[1.9rem] py-[0.9rem] text-[1.1rem] text-white rounded-[2.6rem]"
        :class="menu === item ? 'bg-primary' : 'bg-[#B5B5B5]'"
        @click="menu = item"
        v-for="(item, index) in menu_datasets"
        :key="index"
      >
        {{ item }}
      </button>
    </div>

    <div
      class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[2rem] mt-[2.2rem]"
    >
      <div
        v-for="(item, index) in program_datasets"
        :key="index"
        class="flex flex-col gap-[1.2rem] pb-[1.8rem] relative bg-white rounded-[18px]"
      >
        <img :src="`/my/${index + 1}.png`" alt="lecture" class="" />

        <div class="flex flex-col justify-between h-full px-[1.4rem]">
          <div class="flex flex-col gap-[7px]">
            <div class="text-[1.1rem] mt-[6px] whitespace-pre-wrap">
              {{ item.title }}
            </div>
            <b class="text-[1.3rem]">
              {{ item.sub_title }}
            </b>
            <div class="text-[1rem] text-[#BFBFBF]">
              {{ item.time }}
            </div>
            <div
              class="text-end text-[1rem] text-[#6200AE] my-[0.8rem]"
              v-if="!item.is_finish"
            >
              {{ item.date }}
            </div>
          </div>
          <button
            class="w-full h-[3rem] text-[0.9rem] text-white"
            :class="!item.is_finish ? 'bg-primary' : 'bg-[#B5B5B5]'"
          >
            {{
              item.is_finish
                ? "수강기간 만료"
                : `수강하기(${item.percente}/100%)`
            }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderViewVue from "../../components/HeaderView.vue";
import Card from "../../components/Card/home/index.vue";
import TravelCard from "../../components/Card/home/Travel.vue";
import moment from "moment";
export default {
  name: "HomeView",
  components: {
    HeaderViewVue,
    Card,
    TravelCard,
  },
  props: {},
  data() {
    return {
      moment: moment,
      menu: "전체",
      menu_datasets: ["전체", "수강중", "수강완료"],
      program_datasets: [
        {
          title: "입문자 추천!\n마무리 기술 클리닉",
          sub_title: "영업 펀더멘탈 만들기",
          time: "총 6시간 33분",
          is_finish: false,
          date: "29일 남음",
          percente: 0,
        },
        {
          title: "성과를 만들어내는 리더들이 쓰는 방법",
          sub_title: "리더는 성과다",
          time: "총 4시간 12분",
          is_finish: true,
          date: "",
          percente: 0,
        },
      ],
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  beforeUnmount() {},
};
</script>
<style scoped>
.menu-container {
  border: 1px solid #d4d1d1;
}

table {
  border-top: 1px solid #d4d1d1;
}

th,
td {
  border-bottom: 1px solid #d4d1d1;
  height: 4.2rem;
  min-width: 7.14rem;
  padding: 8px;
}
</style>
