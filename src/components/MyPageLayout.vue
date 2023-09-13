<template>
  <layout>
    <div
      class="w-full min-h-[63vh] flex flex-col justify-start items-start py-[5.6rem] lg:px-[120px] md:px-[4vw] xs:px-[2rem] bg-[#EDEDED]"
    >
      <h1 class="w-full sm:text-[1.8rem] xs:text-[1.4rem] font-bold">
        안녕하세요, 김필수님!
      </h1>

      <div
        class="w-full flex md:flex-row xs:flex-col justify-center items-start md:gap-[24px] md:mt-[52px] xs:mt-[20px]"
      >
        <aside
          class="flex md:flex-col flex-wrap xs:flex-row md:gap-[28px] xs:mb-[1rem] xs:gap-[1rem] min-w-[282px]"
        >
          <div class="md:border-b-[1px] xs:hidden border-[#CACACA]" />
          <router-link
            class="sm:text-[24px] xs:text-[1.1px]"
            :class="$router.currentRoute.value.path === '/my' && 'font-bold'"
            :to="'/my'"
            >내 강의 보기</router-link
          >
          <div class="md:border-b-[1px] xs:border-r-[1px] border-[#CACACA]" />
          <router-link
            class="sm:text-[24px] xs:text-[1.1px]"
            :class="
              $router.currentRoute.value.path === '/my/payment' && 'font-bold'
            "
            :to="'/my/payment'"
            >결제내역</router-link
          >
          <div class="md:border-b-[1px] xs:border-r-[1px] border-[#CACACA]" />
          <router-link
            class="sm:text-[24px] xs:text-[1.1px]"
            :class="
              $router.currentRoute.value.path === '/my/modify' && 'font-bold'
            "
            :to="'/'"
            >회원 정보 수정</router-link
          >
          <!-- :to="'/my/modify'" -->
          <div class="md:border-b-[1px] xs:border-r-[1px] border-[#CACACA]" />
          <router-link
            class="sm:text-[24px] xs:text-[1.1px]"
            :class="
              $router.currentRoute.value.path === '/my/customer' && 'font-bold'
            "
            :to="'/'"
            >고객센터</router-link
          >
          <!--  -->
          <div class="md:border-b-[1px] xs:border-r-[1px] border-[#CACACA]" />
          <router-link class="sm:text-[24px] xs:text-[1.1px]" :to="'/'"
            >로그아웃</router-link
          >
          <div class="md:border-b-[1px] xs:hidden border-[#CACACA]" />
        </aside>

        <router-view></router-view>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../components/LayoutView.vue";
export default {
  name: "MyPageLayout",
  components: {
    Layout,
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
<style></style>
