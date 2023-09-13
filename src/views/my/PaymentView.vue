<template>
  <div class="flex flex-col w-full">
    <div
      class="w-full h-full flex flex-col gap-[2.3rem] bg-white rounded-[1rem] lg:p-[3.3rem] xs:p-[2rem] xs:overflow-scroll"
    >
      <div class="flex gap-[12px]">
        <button
          class="px-[1.9rem] py-[0.9rem] text-[1.1rem] text-white rounded-[2.6rem]"
          :class="menu === item ? 'bg-primary' : 'bg-[#B5B5B5]'"
          @click="menu = item"
          v-for="(item, index) in menu_datasets"
          :key="index"
        >
          {{ item }}
        </button>
      </div>
      <div class="text-[1.1rem] text-[#0F17CD]">
        신용카드 환불 : 카드사의 처리에 따라 3영업일 또는 최대 7일 이상 소요될
        수 있습니다.<br />
        계좌이체 환불 : 환불 처리 이후, 1~2영업일 이내 환불계좌로 입금
      </div>
      <div class="w-full h-auto overflow-hidden">
        <table class="w-full" v-if="menu === '결제내역'">
          <tbody>
            <tr v-for="(item, index) in payment_datasets" :key="index">
              <td align="center">
                {{ moment(item.order_date).format("YYYY-MM-DD") }}
              </td>
              <td align="left">{{ item.product }}</td>
              <td align="center">{{ item.price }}</td>
              <td align="center" class="cursor-pointer">환불하기 ></td>
            </tr>
          </tbody>
        </table>

        <table class="w-full" v-if="menu === '환불내역'">
          <tbody>
            <tr v-for="(item, index) in refund_datasets" :key="index">
              <td align="center">
                {{ moment(item.order_date).format("YYYY-MM-DD") }}
              </td>
              <td align="left">{{ item.product }}</td>
              <td align="center">{{ item.price }}</td>
              <td
                align="center"
                :class="item.status === '환불 처리완료' && 'font-bold'"
              >
                {{ item.status }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "MyPaymentView",
  components: {},
  props: {},
  data() {
    return {
      moment: moment,
      menu: "결제내역",
      menu_datasets: ["결제내역", "환불내역"],
      payment_datasets: [
        {
          id: 1,
          order_date: new Date(),
          product: "[수강중] 영업 펀더멘탈 만들기",
          price: "19,900원",
        },
        {
          id: 2,
          order_date: new Date(),
          product: "[수강완료] 리더는 소통과 설득이다",
          price: "19,900원",
        },
      ],
      refund_datasets: [
        {
          id: 1,
          order_date: new Date(),
          product: "[수강중] 영업 펀더멘탈 만들기",
          price: "19,900원",
          status: "환불 대기중",
        },
        {
          id: 2,
          order_date: new Date(),
          product: "[수강완료] 리더는 소통과 설득이다",
          price: "19,900원",
          status: "환불 처리완료",
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
  height: 4.4rem;
  padding: 8px;
  font-size: 1.1rem;
}
</style>
