<template>
  <div class="flex flex-col justify-center items-center mt-[4.5rem]">
    <h1 class="text-[2.57rem] font-bold">장바구니</h1>

    <div
      class="w-full flex flex-col justify-center items-start md:px-[5rem] lg:px-[13.2rem] xs:px-[2rem] mt-[4.2rem]"
    >
      <div
        class="w-full text-[1.4rem] font-bold border-b-2 border-black pb-[1.3rem]"
      >
        여행/체험 상품
      </div>

      <div
        class="w-full flex sm:flex-row xs:flex-col justify-between items-center"
        v-for="(item, index) in travel_product"
        :key="index"
      >
        <div class="flex sm:flex-row xs:flex-col my-[2.9rem] gap-[2.1rem]">
          <img :src="item.img" alt="travel_product" />
          <div class="flex flex-col">
            <b class="text-[1.3rem]">{{ item.product }}</b>
            <p class="text-[1.3rem] text-[#747474]">
              예약날짜: {{ item.date }}
            </p>
            <b class="text-[1.5rem]">{{ item.price }}</b>
          </div>
        </div>

        <button
          class="w-[64px] h-[32px] border-[1px] border-[#B1B1B1] md:mb-0 xs:mb-[2rem]"
        >
          삭제
        </button>
      </div>

      <section
        class="w-full rounded-[12px] px-[2.2rem] py-[1.5rem] border-[1px] border-[#D9D9D9]"
      >
        <div
          class="w-full text-[1.2rem] font-bold border-b-[1px] border-[#DBDBDB] pb-[1.3rem]"
        >
          예약자 정보
        </div>

        <!-- 예약자 -->
        <div
          class="w-full flex md:flex-row xs:flex-col justify-between md:items-end xs:items-center xs:mt-[1.5rem] gap-[1rem]"
        >
          <div
            class="md:w-[initial] xs:w-full flex flex-col gap-[2.1rem] text-[1.1rem]"
          >
            <div class="flex gap-[1rem]">
              <span>본인 I 한성윤</span> <span>010-5325-2531</span>
              <span>dlfien23@naver.com</span>
            </div>
            <div class="flex gap-[1rem]">
              <span>본인 I 한성윤</span> <span>010-5325-2531</span>
              <span>dlfien23@naver.com</span>
            </div>
          </div>

          <div
            class="md:w-[initial] xs:w-full flex flex-col gap-[1.3rem] text-[1.1rem] mt-[1.9rem]"
          >
            <div class="flex items-center text-[red]">
              <img src="!.png" alt="warning" />
              <span>필수정보를 입력해주세요</span>
            </div>
            <div class="md:w-[initial] xs:w-full flex gap-[1.5rem]">
              <div class="md:w-[initial] xs:w-full flex flex-col gap-[1.3rem]">
                <p>Seongyun</p>
                <input
                  v-model="check_password"
                  type="text"
                  placeholder="영문이름"
                  class="w-full md:max-w-[14.4rem] h-[3.4rem]"
                />
              </div>
              <div class="md:w-[initial] xs:w-full flex flex-col gap-[1.3rem]">
                <p>Seongyun</p>
                <input
                  v-model="check_password"
                  type="text"
                  placeholder="영문이름"
                  class="w-full md:max-w-[14.4rem] h-[3.4rem]"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- 동행자 -->
        <div
          class="w-full flex md:flex-row xs:flex-col justify-between md:items-end xs:items-center xs:mt-[1.5rem] gap-[1rem]"
        >
          <div
            class="md:w-[initial] xs:w-full flex flex-col gap-[1.3rem] text-[1.1rem] mt-[1.9rem]"
          >
            <div class="flex items-center gap-[9px] cursor-pointer">
              <div
                class="flex justify-center items-center w-[21px] h-[21px] rounded-[50%] bg-[#A3A3A3]"
              >
                <img src="+.png" alt="info" />
              </div>
              <span>동행자 추가하기</span>
            </div>
            <div
              class="flex md:flex-row xs:flex-col md:w-[initial] xs:w-full gap-[1.5rem]"
            >
              <input
                v-model="check_password"
                type="text"
                placeholder="이름"
                class="w-full md:max-w-[14.4rem] h-[3.4rem]"
              />
              <input
                v-model="check_password"
                type="text"
                placeholder="전화번호"
                class="w-full md:max-w-[14.4rem] h-[3.4rem]"
              />
              <input
                v-model="check_password"
                type="text"
                placeholder="이메일"
                class="w-full md:max-w-[14.4rem] h-[3.4rem]"
              />
            </div>
          </div>

          <div
            class="md:w-[initial] xs:w-full flex md:flex-row xs:flex-col xs:mt-[0.6rem] gap-[1.5rem] text-[1.1rem]"
          >
            <input
              v-model="check_password"
              type="text"
              placeholder="영문이름"
              class="w-full md:max-w-[14.4rem] h-[3.4rem]"
            />
            <input
              v-model="check_password"
              type="text"
              placeholder="영문 성"
              class="w-full md:max-w-[14.4rem] h-[3.4rem]"
            />
          </div>
        </div>
      </section>

      <section
        class="w-full rounded-[12px] px-[2.2rem] py-[1.5rem] border-[1px] border-[#D9D9D9]"
        style="margin-top: 2.8rem !important"
      >
        <div class="flex items-center text-[red]">추가 예약 정보 (필수)</div>
        <p class="text-[1.2rem] mt-[1.6rem]">
          ✅ 1) 영문 성/이름 2) 여권번호 3)생년월일 4)성별 5)여권만료일 6)출발
          항공편 날짜 / 귀국 항공편 및 날짜 정보7)유아 인원를 순서대로
          기입해주세요.<br />
          예시. 1) KIM/MARI 2)M12345678 3)19990101 4)MS 5)20301122 6) 8/11
          인천->파리 10시 - 11시 , 8/15 파리->인천 11시 - 12시 7) 유아인원
          1명<br />
          ※유아 인원이 없는 경우 기입하지 않으셔도 됩니다.
        </p>
        <textarea
          placeholder="답변을 입력해 주세요."
          type="text"
          class="w-full border-[1px] border-[#C6C6C6] mt-[1.57rem]"
          rows="5"
        />
      </section>

      <div
        class="w-full text-[1.4rem] font-bold border-b-2 border-black pb-[1.3rem] mt-[4.8rem]"
      >
        결제 방법
      </div>

      <div
        class="w-full flex sm:flex-row xs:flex-col justify-between items-center"
        v-for="(item, index) in travel_product"
        :key="index"
      >
        <div class="flex sm:flex-row xs:flex-col my-[2.9rem] gap-[2.1rem]">
          <img :src="item.img" alt="travel_product" />
          <div class="flex flex-col">
            <b class="text-[1.3rem]">{{ item.product }}</b>
            <p class="text-[1.3rem] text-[#747474]">
              예약날짜: {{ item.date }}
            </p>
            <b class="text-[1.5rem]">{{ item.price }}</b>
          </div>
        </div>

        <button class="w-[64px] h-[32px] border-[1px] border-[#B1B1B1]">
          삭제
        </button>
      </div>

      <div
        class="w-full text-[1.4rem] font-bold border-b-2 border-black pb-[1.3rem] mt-[4.8rem]"
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

      <div
        class="w-full text-[1.3rem] py-[2.6rem] border-b-[1px] border-[#C5C5C5]"
      >
        실시간 계좌이체, 가상계좌결제의 경우 현금영수증이 자동 발행됩니다.<br />
        회사를 통한 결제시 전자계산서 발행을 원하신다면, [법인 통장번호]로
        무통장입금 바랍니다.<br />
        입금 전 청구 발행이 필요하신 경우 수강신청 후, 1:1 챗봇 문의로
        사업자등록증을 보내주시면 됩니다.<br />
        일반 신용카드와 간편결제(신용카드 이용 시)의 무이자 할부 개월 수(최대
        12개월)는 카드사에 따라 상이할 수 있으니, 결제창에서 확인해주세요.
      </div>

      <div
        class="w-full flex flex-col justify-end items-end gap-[2rem] sm:my-[8.57rem] xs:my-[3rem]"
      >
        <div class="flex items-center gap-[10rem]">
          <div class="flex items-end flex-col gap-[2.8rem]">
            <b class="text-[1.3rem]">배송비</b>
            <b class="text-[1.3rem]">총 결제금액</b>
          </div>
          <div class="flex items-end flex-col gap-[2.8rem]">
            <p class="text-[1.3rem]">2,500원</p>
            <div>
              <b class="text-[2.6rem]">56,000</b>
              <span class="text-[1.3rem]">원</span>
            </div>
          </div>
        </div>
        <button
          class="w-[15rem] sm:h-[58px] xs:h-[45px] sm:text-[24px] xs:text-[14px] font-bold bg-primary text-[white] rounded-[7px]"
          @click="$router.push('/my/finish')"
        >
          구매하기
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
