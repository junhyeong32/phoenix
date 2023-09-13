<template>
  <div
    class="flex flex-col justify-center items-center pt-[4rem] md:px-[7.5rem] xs:px-[2rem] bg-[#EDEDED]"
  >
    <h1 class="text-[2.3rem] font-bold">장바구니</h1>

    <div
      class="w-full flex flex-col justify-center items-start bg-white md:px-[2.8rem] xs:px-[1rem] py-[2.6rem] md:mt-[5rem] xs:mt-[3rem] mb-[10rem]"
    >
      <div
        class="w-full text-[1.3rem] font-bold border-b-[1px] border-black pb-[1.3rem]"
      />

      <div class="w-full overflow-x-scroll">
        <table class="w-full">
          <thead>
            <tr>
              <th>상품명</th>
              <th>가격</th>
              <th>수강기간</th>
              <th>수강방법</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cart_datasets" :key="index">
              <td align="center">
                <div
                  class="lg:w-[auto] xs:w-[max-content] flex items-center md:gap-[2.8rem] xs:gap-[2.8rem]"
                >
                  <img
                    :src="item.img"
                    alt="travel_product"
                    class="w-[12.7rem]"
                  />
                  <div
                    class="flex flex-col justify-between mt-[2.9rem] gap-[2.1rem]"
                  >
                    <div class="flex flex-col items-start">
                      <b class="text-[1.3rem]">{{ item.category }}</b>
                      <p class="text-[1.3rem] text-[#747474] text-start">
                        {{ item.product }}
                      </p>
                    </div>
                    <button
                      class="w-[64px] h-[32px] border-[1px] border-[#B1B1B1] md:mb-0 xs:mb-[2rem]"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </td>
              <td align="center">{{ item.price }}</td>
              <td align="center">{{ item.date }}</td>
              <td align="center">{{ item.method }}</td>
            </tr>
          </tbody>
        </table>
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

      <div
        class="w-full flex flex-col justify-end items-end gap-[2rem] mt-[3rem]"
      >
        <div class="flex items-start gap-[10rem]">
          <div class="flex items-end flex-col gap-[1.3rem]">
            <b class="text-[1.1rem]">총 구매금액</b>
            <b class="text-[1.1rem]">할인</b>
            <b class="text-[1.1rem] mt-[1.7rem]">결제 예정금액</b>
          </div>
          <div class="flex items-end flex-col gap-[1.3rem]">
            <p class="text-[1.1rem]">39,000원</p>
            <p class="text-[1.1rem]">20,000원</p>
            <div class="mt-[0.7rem]">
              <b class="text-[2.3rem]">56,000</b>
              <span class="text-[1.3rem]">원</span>
            </div>
          </div>
        </div>
        <div class="flex gap-[0.8rem]">
          <button
            class="w-[11.1rem] sm:h-[58px] xs:h-[45px] sm:text-[1.5rem] xs:text-[14px] font-bold border-[1px] border-[black]"
            @click="$router.push('/my/finish')"
          >
            강의 둘러보기
          </button>
          <button
            class="w-[11.1rem] sm:h-[58px] xs:h-[45px] sm:text-[1.5rem] xs:text-[14px] font-bold bg-primary text-[white]"
            @click="$router.push('/my/finish')"
          >
            구매하기
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
      cart_datasets: [
        {
          id: 1,
          img: "/payment/product.png",
          category: "강의 카테고리",
          product: "강좌이름이 노출됩니다.",
          price: "19,000원",
          date: "30일",
          method: "온라인/모바일",
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
