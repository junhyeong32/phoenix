<template>
  <div class="flex flex-col justify-center items-center mt-[4.5rem]">
    <h1 class="text-[2.57rem] font-bold">결제내역</h1>

    <div
      class="w-full flex flex-col justify-center items-start md:px-[5rem] lg:px-[13.2rem] xs:px-[2rem] mt-[4.2rem]"
    >
      <div class="mt-[3rem] mb-[1.9rem]">
        <h3 class="text-[1.4rem] font-bold">최근 구매 정보</h3>
      </div>

      <div class="w-full h-auto xs:overflow-scroll">
        <table class="w-full">
          <thead>
            <tr>
              <th>주문일자</th>
              <th>상품명</th>
              <th>여행일자</th>
              <th>결제금액</th>
              <th>상태</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in program_datasets" :key="index">
              <td align="center">
                {{ moment(item.order_date).format("YYYY.MM.DD") }}
              </td>
              <td align="center">{{ item.product }}</td>
              <td align="center">{{ item.date }}</td>
              <td align="center">{{ item.price }}</td>
              <td align="center">{{ item.status }}</td>
              <td align="center">
                <button
                  class="w-[64px] h-[32px] border-[1px] border-[#000]"
                  v-if="item.status === '예약 확정'"
                >
                  조회
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-[5.28rem] mb-[1.9rem]">
        <h3 class="text-[1.4rem] font-bold">최근 구매 정보</h3>
      </div>

      <div class="w-full xs:overflow-scroll mb-[9.35rem]">
        <table class="w-full">
          <thead>
            <tr>
              <th>주문일자</th>
              <th>상품명</th>
              <th>결제금액</th>
              <th>주문상세</th>
              <th>배송현황</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in market_datasets" :key="index">
              <td align="center">
                {{ moment(item.date).format("YYYY.MM.DD") }}
              </td>
              <td align="center">{{ item.product }}</td>
              <td align="center">{{ item.price }}</td>
              <td align="center">
                <button class="w-[64px] h-[32px] border-[1px] border-[#000]">
                  조회
                </button>
              </td>
              <td align="center">
                <button class="w-[64px] h-[32px] border-[1px] border-[#000]">
                  배송조회
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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
      program_datasets: [
        {
          id: 1,
          order_date: new Date(),
          product: "곡성 심쿵 여행",
          date: "2023.09.10 ~ 2023.09.12",
          price: "120,270원",
          status: "예약 확정",
        },
        {
          id: 2,
          order_date: new Date(),
          product: "커피체험",
          date: "2021.09.10",
          price: "120,270원",
          status: "완료",
        },
      ],

      market_datasets: [
        {
          id: 1,
          date: new Date(),
          product: "수박 1.5kg 수박 1.5kg수박 1.5kg",
          price: "20,270원",
        },
        {
          id: 2,
          date: new Date(),
          product: "참외 3kg 참외 3kg 참외 3kg 참외 3kg",
          price: "20,270원",
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
  border-top: 2px solid #000;
}

th,
td {
  border-bottom: 1px solid #d4d1d1;
  min-width: 7.14rem;
  padding: 8px;
}
</style>
