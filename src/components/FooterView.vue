<template>
  <footer
    class="flex sm:h-[auto] bg-[#d0d0d0] sm:pl-[7rem] xs:px-[2rem] sm:py-[6rem] xs:py-[3rem] gap-[53px]"
  >
    <img src="/footer_logo.png" alt="logo" class="w-[198px] h-[64px]" />

    <div class="flex flex-col gap-[2rem]">
      <div class="flex gap-[2rem]">
        <router-link class="sm:text-[1.3rem] xs:text-[1.2rem]" :to="'home'"
          >서비스 이용약관</router-link
        >
        <router-link class="sm:text-[1.3rem] xs:text-[1.2rem]" :to="'home'"
          >개인정보처리방침</router-link
        >
        <router-link class="sm:text-[1.3rem] xs:text-[1.2rem]" :to="'home'"
          >환불 정책</router-link
        >
      </div>
      <div class="sm:text-[1.3rem] xs:text-[1rem] leading-9">
        정원코리아월드 I 대표이사 : 윤은경 I topmotive@gmail.com<br />
        고객센터 : 02-2164-8855 I 주소 : 서울시 구로구 경인로 662 디큐브시티
        15층<br />
        사업자등록번호 : 107-86-94900 I 통신판매신고번호
        :2022-서울구로-1033호<br />
        Copyright (c) Phoenix Consulting All rights reserved.
      </div>
      <div></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "GnbView",
  components: {},
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
a {
  text-decoration: underline;
}

@media (min-width: 300px) and (max-width: 1000px) {
  footer {
    flex-direction: column;
  }
}
</style>
