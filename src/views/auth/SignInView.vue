<template>
  <div class="flex flex-col justify-center items-center mt-[6.3rem] px-[2rem]">
    <img
      src="/login_logo.png"
      alt="logo"
      @click="$router.push('/')"
      class="cursor-pointer"
    />
    <div
      class="w-full max-w-[56.5rem] h-1 border-b-2 mt-[7rem] mb-[4rem] border-[#C1C1C1;]"
    />
    <div class="flex flex-col max-w-[30.8rem] w-full">
      <h1 class="text-[2rem] font-bold">로그인</h1>
      <input type="text" v-model="id" placeholder="아이디" class="mt-[6rem]" />
      <input
        type="password"
        v-model="password"
        placeholder="비밀번호"
        class="mt-[3.6rem]"
      />

      <div class="flex gap-[3.6rem] mt-[2.9rem]"></div>

      <button
        class="w-full h-[5rem] bg-primary text-[white] text-[1.7rem] mt-[5rem]"
        @click="click"
      >
        로그인
      </button>
      <router-link :to="'home'" class="text-[1.4rem] mt-[1.7rem]"
        >아이디/비밀번호 찾기</router-link
      >

      <h2 class="text-[1.7rem] font-bold mt-[8.8rem]">
        아직 회원이 아니신가요?
      </h2>
      <p class="text-[1.4rem] mt-[1.7rem]">
        회원가입 하시고 정원코리아월드의<br />
        다채로운 여행/체험상품들을 만나 보세요.
      </p>

      <button
        class="w-full h-[5rem] bg-[black] text-[white] text-[1.7rem] mt-[3.2rem] mb-[11.5rem]"
        @click="$router.push('/auth/signup')"
      >
        회원가입
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignInView",
  components: {},
  props: {},
  data() {
    return {
      id: "",
      password: "",
    };
  },
  computed: {},
  methods: {
    click() {},
    eventLogin() {},
    beforeDestroy() {
      this.emitter.off("login", this.eventLogin);
    },
  },
  created() {},
  mounted() {},
  beforeUnmount() {},
};
</script>
<style scoped>
input {
  border: none;
  border-bottom: 1px solid #000;
  color: #848484 !important;
  font-size: 1.3rem !important;
}
</style>
