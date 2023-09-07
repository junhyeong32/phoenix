<template>
  <header
    class="flex justify-between items-center w-full px-[8.6rem] xs:px-[1.5rem] py-[0.8rem] relative"
  >
    <img
      src="/logo.png"
      alt="logo"
      @click="$router.push('/')"
      class="cursor-pointer"
    />

    <!-- web nav -->
    <nav class="md:flex justify-center items-center xs:hidden">
      <router-link
        :class="$router.currentRoute.value.path === '/home' && 'text-primary'"
        :to="'/home'"
        >홈</router-link
      >
      <router-link
        :class="
          $router.currentRoute.value.path === '/product' && 'text-primary'
        "
        :to="'/product'"
        >여행상품</router-link
      >
      <router-link
        :class="
          $router.currentRoute.value.path === '/program' && 'text-primary'
        "
        :to="'/program'"
        >현지프로그램</router-link
      >
      <router-link
        :class="
          $router.currentRoute.value.path === '/marketplace' && 'text-primary'
        "
        :to="'/marketplace'"
        >직거래장터</router-link
      >
      <router-link
        :class="
          $router.currentRoute.value.path === '/inquiry' && 'text-primary'
        "
        :to="'/inquiry'"
        >상담문의</router-link
      >
      <router-link
        :to="'/my'"
        :class="$router.currentRoute.value.path === '/my' && 'text-primary'"
        >마이 페이지</router-link
      >
      <router-link :to="'/auth/signin'">
        <div class="flex items-center gap-[0.2rem]">
          <img src="/login.png" alt="login" class="h-[16.8px] mb-1" />
          <span>로그인</span>
        </div>
      </router-link>

      <router-link :to="'/auth/signup'">
        <div class="flex items-center justify-center gap-[0.2rem] text-primary">
          <img src="/signup.png" class="h-[16px] mb-1" alt="signup" />
          <span>회원가입</span>
        </div>
      </router-link>
    </nav>

    <!-- mobile nav -->
    <img
      src="/hambuger.png"
      class="xs:block md:hidden w-[40px] h-[35px]"
      @click="open = !open"
    />

    <nav
      class="absolute w-full h-screen xs:flex flex-col justify-center items-center md:hidden bg-primary left-0 top-0 text-[white] z-[1]"
      v-if="open"
    >
      <img
        src="/x.png"
        class="absolute top-10 right-10 xs:block md:hidden"
        @click="open = !open"
      />
      <router-link :to="'/home'">홈</router-link>
      <router-link :to="'/product'">여행상품</router-link>
      <router-link :to="'/program'">현지프로그램</router-link>
      <router-link :to="'/marketplace'">직거래장터</router-link>
      <router-link :to="'/inquiry'">상담문의</router-link>
      <router-link :to="'/my'">마이 페이지</router-link>
      <router-link :to="'/auth/signin'"> 로그인 </router-link>
      <router-link :to="'/auth/signup'"> 회원가입 </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "GnbView",
  components: {},
  props: {},
  data() {
    return {
      open: false,
    };
  },
  computed: {},
  watch: {
    $route() {
      this.changeRoute();
    },
  },
  methods: {
    changeRoute() {
      this.open = false;
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scpoed>
a {
  font-size: 16px;
}

nav {
  gap: 3.2rem;
}

@media (min-width: 300px) and (max-width: 903px) {
  nav {
    gap: 2rem;
  }
}
</style>
