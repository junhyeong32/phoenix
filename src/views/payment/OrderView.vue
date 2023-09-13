<template>
  <div
    class="flex flex-col justify-center items-center pt-[4rem] md:px-[7.5rem] xs:px-[2rem] bg-[#EDEDED]"
  >
    <h1 class="text-[2.3rem] font-bold">주문 결제</h1>

    <div
      class="w-full flex flex-col justify-center items-start bg-white md:px-[2.8rem] xs:px-[1rem] py-[2.6rem] md:mt-[5rem] xs:mt-[3rem]"
    >
      <div
        class="w-full text-[1.3rem] font-bold border-b-[1px] border-black pb-[1.3rem]"
      >
        강의정보
      </div>
      <div class="flex flex-col mt-[3.4rem] gap-[1rem]">
        <b class="text-[1.1rem] text-[#AFAFAF]">강의명</b>
        <p class="text-[1.1rem]">강의 명이 보여집니다.</p>
      </div>

      <div class="flex flex-col mt-[2.3rem] gap-[1rem]">
        <b class="text-[1.1rem] text-[#AFAFAF]">수강기간</b>
        <p class="text-[1.1rem]">2023.08.01 ~ 2023.09.01 (결제일로부터 30일)</p>
      </div>
      <div class="flex flex-col mt-[2.3rem] gap-[1rem]">
        <b class="text-[1.1rem] text-[#AFAFAF]">수강 방법</b>
        <p class="text-[1.1rem]">온라인/모바일 수강</p>
      </div>

      <div
        class="w-full text-[1.3rem] font-bold border-b-[1px] border-black pb-[1.3rem] mt-[3.8rem]"
      >
        주문자 정보
      </div>
      <div class="flex flex-col mt-[3.4rem] gap-[1rem]">
        <b class="text-[1.1rem] text-[#AFAFAF]">이름</b>
        <p class="text-[1.1rem]">김필수</p>
      </div>

      <div class="flex flex-col mt-[2.3rem] gap-[1rem]">
        <b class="text-[1.1rem] text-[#AFAFAF]">이메일</b>
        <p class="text-[1.1rem]">slakns@naver.com</p>
      </div>
      <div class="flex flex-col mt-[2.3rem] gap-[1rem]">
        <b class="text-[1.1rem] text-[#AFAFAF]">전화번호</b>
        <p class="text-[1.1rem]">010-8383-1241</p>
      </div>
    </div>

    <div
      class="w-full flex flex-col justify-center items-start bg-white md:px-[2.8rem] xs:px-[1rem] py-[2.6rem] md:mt-[5rem] xs:mt-[3rem]"
    >
      <div
        class="w-full text-[1.4rem] font-bold border-b-2 border-black pb-[1.3rem]"
      >
        결제 방법
      </div>
      <div
        class="w-full grid md:grid-cols-3 xs:grid-cols-2 gap-[3.7rem] pb-[3.85rem] mt-[3.5rem] border-b-[1px] border-[#C5C5C5]"
      >
        <div
          v-for="(item, index) in payment_datasets"
          :key="index"
          class="flex items-center gap-[1rem]"
        >
          <input type="radio" />
          <img
            :src="item.img"
            v-if="item.img"
            alt="payment"
            class="sm:w-[auto] xs:w-[25vw]"
          />
          <span class="text-[1.3rem]" v-if="!item.img">{{ item.method }}</span>
        </div>
      </div>

      <div class="w-full text-[1.3rem] py-[2.6rem]">
        실시간 계좌이체, 가상계좌결제의 경우 현금영수증이 자동 발행됩니다.<br />
        회사를 통한 결제시 전자계산서 발행을 원하신다면, [법인 통장번호]로
        무통장입금 바랍니다.<br />
        입금 전 청구 발행이 필요하신 경우 수강신청 후, 1:1 챗봇 문의로
        사업자등록증을 보내주시면 됩니다.<br />
        일반 신용카드와 간편결제(신용카드 이용 시)의 무이자 할부 개월 수(최대
        12개월)는 카드사에 따라 상이할 수 있으니, 결제창에서 확인해주세요.
      </div>
    </div>

    <div
      class="w-full flex justify-between items-center bg-white md:px-[2.9rem] xs:px-[1rem] py-[2.6rem] md:mt-[5rem] xs:mt-[3rem] mb-[9rem] md:gap-[1rem]"
    >
      <div
        class="w-full flex flex-col md:items-start xs:items-center gap-[2rem]"
      >
        <div class="flex items-center gap-[10rem]">
          <div class="flex justify-center items-center gap-[1.5rem]">
            <b class="text-[1.3rem]">총 결제금액</b>
            <span class="text-[2.5rem] text-primary">19,900원</span>
          </div>
        </div>
        <div class="flex gap-[1rem]">
          <input type="checkbox" class="mt-[4px]" />
          <b>강의 및 결제정보를 확인했으며, 이에 동의합니다. (필수)</b>
        </div>

        <button
          class="w-[15rem] sm:h-[58px] xs:h-[45px] sm:text-[24px] xs:text-[14px] font-bold bg-primary text-[white] rounded-[7px] xs:block md:hidden"
          @click="$router.push('/my/finish')"
        >
          결제하기
        </button>
      </div>

      <button
        class="w-[15rem] sm:h-[58px] xs:h-[45px] sm:text-[24px] xs:text-[14px] font-bold bg-primary text-[white] rounded-[7px] xs:hidden md:block"
        @click="$router.push('/my/finish')"
      >
        결제하기
      </button>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "OrderView",
  components: {},
  props: {},
  data() {
    return {
      moment: moment,
      travel_product: [
        {
          id: 1,
          img: "/my/travel_product.png",
          product: "전라남도 곡성 1박 2일 심쿵여행",
          date: "2023년 8월 12일 ~ 2023년 8월 13일",
          price: "180,000원",
        },
      ],

      payment_datasets: [
        {
          method: "kakao",
          img: "/my/kakao.png",
        },
        {
          method: "naver",
          img: "/my/naver.png",
        },
        {
          method: "payco",
          img: "/my/payco.png",
        },
        {
          method: "일반 신용카드",
          img: "",
        },
        {
          method: "실시간 계좌이체",
          img: "",
        },
        {
          method: "가상 계좌결제",
          img: "",
        },
      ],

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
