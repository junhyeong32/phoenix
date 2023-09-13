<template>
  <div class="flex flex-col justify-center items-center mt-[6.1rem] px-[2rem]">
    <img
      src="/login_logo.png"
      alt="logo"
      @click="$router.push('/')"
      class="cursor-pointer"
    />
    <div
      class="w-full max-w-[56.5rem] h-1 border-b-2 mt-[5rem] mb-[4rem] border-[#C1C1C1;]"
    />
    <div class="flex flex-col max-w-[30.8rem] w-full">
      <h1 class="text-[1.8rem] font-bold">로그인</h1>
      <input type="text" v-model="id" placeholder="아이디" class="mt-[6rem]" />
      <input
        type="password"
        v-model="password"
        placeholder="비밀번호"
        class="mt-[3.6rem]"
      />

      <div class="flex gap-[2.2rem] mt-[2.9rem]">
        <div class="flex items-ceter gap-[7px]">
          <input type="checkbox" class="w-[1.8rem] h-[1.8rem] text-primary" />
          <span>아이디 저장</span>
        </div>
        <div class="flex items-ceter gap-[7px]">
          <input type="checkbox" class="w-[1.8rem] h-[1.8rem] text-primary" />
          <span>로그인 상태 유지</span>
        </div>
      </div>

      <button
        class="w-full h-[5rem] bg-primary text-[white] text-[1.5rem] mt-[4.4rem]"
        @click="click"
      >
        로그인
      </button>
      <router-link :to="'home'" class="text-[1.3rem] mt-[1.5rem]"
        >아이디/비밀번호 찾기</router-link
      >

      <h2 class="text-[1.5rem] font-bold mt-[7.6rem]">
        아직 회원이 아니신가요?
      </h2>
      <p class="text-[1.3rem] mt-[1.5rem]">
        회원가입 하시고 피닉스컨설팅의<br />
        다양한 비즈니스 성공 방법론들을 만나 보세요.
      </p>

      <button
        class="w-full h-[5rem] bg-[black] text-[white] text-[1.5rem] mt-[3.2rem] mb-[11.5rem]"
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
input[type="text"],
input[type="password"] {
  border: none;
  border-bottom: 1px solid #000;
  color: #848484 !important;
  font-size: 1.1rem !important;
}

input[type="checkbox"] {
  width: 1.42rem !important;
  height: 1.42rem;
  border: 1px solid #000;
  color: #c71c23 !important;
  outline: none;
  border-radius: 50%;
  background-color: #d9d9d9;
  border: none;
}

input[type="checkbox"]:checked {
  background-color: #c71c23 !important;
  border: none !important;
  outline: none;
}
</style>
