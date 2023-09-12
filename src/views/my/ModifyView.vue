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
                <span class="md:contents xs:hidden"
                  >* 영문 대소문자/숫자/특수문자 중 2종류 10~16자 또는 3종류
                  8~16자</span
                >
                <span class="xs:block md:hidden mt-[10px]"
                  >* 영문 대소문자/숫자/특수문자 중 2종류 10~16자 또는 3종류
                  8~16자</span
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
                <div
                  class="flex md:flex-row xs:flex-col md:items-center xs:items-start xs:gap-[1rem]"
                >
                  <div
                    class="md:w-[auto] xs:w-full flex items-center md:gap-0 xs:gap-[0.5rem]"
                  >
                    <select
                      v-model="year"
                      class="md:w-[89px] xs:w-[33%]"
                    /><span class="mx-[5px]">년</span>
                    <select
                      v-model="month"
                      class="md:w-[89px] xs:w-[33%]"
                    /><span class="mx-[5px]">월</span>
                    <select v-model="day" class="md:w-[89px] xs:w-[33%]" /><span
                      class="mx-[5px]"
                      >일</span
                    >
                  </div>

                  <div class="flex gap-[1rem] ml-[1rem]">
                    <input type="radio" id="man" />
                    <label for="man">남</label>
                    <input type="radio" id="woman" />
                    <label for="woman">여</label>
                  </div>
                </div>
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
                  <div class="flex md:flex-row xs:flex-col gap-[0.6rem]">
                    <input
                      v-model="address"
                      type="text"
                      class="md:w-[19.3rem] xs:w-full"
                    />
                    <input
                      v-model="address_detail"
                      type="text"
                      placeholder="상세주소를 입력해주세요."
                      class="md:max-w-[33.4rem] md:w-full xs:w-full"
                    />
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>이메일</td>
              <td>
                <div class="flex flex-col gap-[1rem]">
                  <div
                    class="flex items-center md:justify-start xs:justify-between gap-[0.6rem]"
                  >
                    <input
                      v-model="email"
                      type="text"
                      class="xs:w-[45%] md:w-[auto]"
                    />
                    <span>@</span>
                    <input
                      v-model="email_address"
                      type="text"
                      disabled
                      class="xs:w-[45%] md:w-[auto] bg-[#F5F5F5]"
                    />
                    <select class="md:block xs:hidden">
                      <option>naver.com</option>
                    </select>
                  </div>
                  <select class="md:hidden xs:block">
                    <option>naver.com</option>
                  </select>
                </div>
              </td>
            </tr>

            <tr>
              <td>연락처</td>
              <td>
                <div class="flex flex-col gap-[1rem]">
                  <div class="flex items-center gap-[0.6rem]">
                    <input
                      v-model="phone_1"
                      type="text"
                      class="xs:w-[33%] md:w-[auto]"
                    />
                    <span>-</span>
                    <input
                      v-model="phone_2"
                      type="text"
                      class="xs:w-[33%] md:w-[auto]"
                    />
                    <span>-</span>
                    <input
                      v-model="phone_3"
                      type="text"
                      class="xs:w-[33%] md:w-[auto]"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding-top: 5.6rem">수신동의</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div class="flex flex-col gap-[2.4rem]">
                  <div class="flex items-center gap-[1.4rem]">
                    <input type="checkbox" class="text-[black]" />
                    <p class="text-[1.4rem]">SNS</p>
                  </div>
                  <div class="flex items-center gap-[1.4rem]">
                    <input type="checkbox" class="text-[black]" />
                    <p class="text-[1.4rem] whitespace-nowrap">E-mail</p>
                  </div>
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
      password: "",
      check_password: "",
      year: "",
      month: "",
      day: "",
      address: "",
      address_detail: "",
      email: "",
      email_address: "",
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
