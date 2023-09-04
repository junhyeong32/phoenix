<template>
  <div class="flex flex-col justify-center items-center mt-[4.5rem]">
    <h1 class="text-[2.57rem] font-bold">회원정보 수정</h1>

    <div
      class="w-full flex flex-col justify-center items-start md:px-[5rem] lg:px-[13.2rem] xs:px-[2rem] mt-[4.2rem]"
    >
      <div class="w-full h-auto overflow-hidden">
        <table class="w-full">
          <tbody>
            <tr>
              <td>이름</td>
              <td>홍길동</td>
            </tr>
            <tr>
              <td>아이디</td>
              <td>admin1</td>
            </tr>
            <tr>
              <td>비밀번호 변경</td>
              <td>
                <input
                  v-model="password"
                  type="password"
                  class="w-full max-w-[14.4rem] mr-[7px]"
                />
                <span class="sm:contents xs:hidden"
                  >* 영문 대소문자/숫자/특수문자 중 2종류 10~16자 또는 3종류
                  8~16자</span
                >
                <span class="xs:block sm:hidden mt-[5px]"
                  >* 영문 대소문자/숫자/특수문자 중 2종류 10~16자 또는<br />
                  3종류 8~16자</span
                >
              </td>
            </tr>
            <tr>
              <td>비밀번호 확인</td>
              <td>
                <input
                  v-model="check_password"
                  type="password"
                  class="w-full max-w-[14.4rem]"
                />
              </td>
            </tr>
            <tr>
              <td>생일/성별</td>
              <td>
                <select v-model="year" /><span class="mx-[5px]">년</span>
                <select v-model="month" /><span class="mx-[5px]">월</span>
                <select v-model="day" /><span class="mx-[5px]">일</span>
                <input type="radio" />
                <input type="radio" />
              </td>
            </tr>
            <tr>
              <td>주소</td>
              <td>
                <div class="flex flex-col gap-[1rem]">
                  <div class="flex gap-[0.6rem]">
                    <input v-model="address" type="text" class="w-[10.5rem]" />
                    <button
                      class="w-[64px] h-[32px] border-[1px] border-[#000]"
                    >
                      우편번호
                    </button>
                  </div>
                  <div class="flex gap-[0.6rem]">
                    <input v-model="address" type="text" class="w-[19.3rem]" />
                    <input
                      v-model="address"
                      type="text"
                      placeholder="상세주소를 입력해주세요."
                      class="w-[29rem]"
                    />
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>이메일</td>
              <td>
                <div class="flex flex-col gap-[1rem]">
                  <div class="flex gap-[0.6rem]">
                    <input v-model="email" type="text" />
                    <span>@</span>
                    <input v-model="email_address" type="text" />
                    <select>
                      <option>naver.com</option>
                    </select>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>연락처</td>
              <td>
                <div class="flex flex-col gap-[1rem]">
                  <div class="flex gap-[0.6rem]">
                    <input v-model="phone_1" type="text" />
                    <span>-</span>
                    <input v-model="phone_2" type="text" />
                    <span>-</span>
                    <input v-model="phone_3" type="text" />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>수신동의</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div class="flex flex-col">
                  <input type="checkbox" />
                  <input type="checkbox" />
                </div>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="w-full flex justify-center items-center gap-[2rem] my-[8.57rem]"
      >
        <button
          class="sm:w-[288px] xs:w-[50%] sm:h-[77px] xs:h-[45px] sm:text-[24px] xs:text-[14px] font-bold border-[1px] border-[#000]"
        >
          회원 탈퇴
        </button>
        <button
          class="sm:w-[288px] xs:w-[50%] sm:h-[77px] xs:h-[45px] sm:text-[24px] xs:text-[14px] font-bold bg-[#000] text-[white]"
        >
          회원정보 수정
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderViewVue from "../../components/HeaderView.vue";
import Card from "../../components/Card/home/index.vue";
import CategoryCard from "../../components/Card/home/Category.vue";
import TravelCard from "../../components/Card/home/Travel.vue";
import moment from "moment";
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
    return {
      moment: moment,
      password: "",
      check_password: "",
      year: "",
      month: "",
      day: "",
      phone_1: "",
      phone_2: "",
      phone_3: "",
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
table {
  border-top: 1px solid #d4d1d1;
}

select {
  min-width: 6.4rem;
}

input[type="text"],
input[type="password"] {
  border: 1px solid #d4d1d1;
  font-size: 1rem;
  padding-left: 6px;
}

input[type="radio"],
input[type="checkbox"] {
  color: #000;
  width: 1.36rem;
  height: 1.36rem;
}

th,
td {
  border-bottom: 1px solid #d4d1d1;
  min-width: 7.14rem;
  padding: 1.6rem 5px;
}
</style>
