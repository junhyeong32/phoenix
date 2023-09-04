<template>
  <div class="flex flex-col justify-center items-center mt-[4.5rem]">
    <h1 class="text-[2.57rem] font-bold">마이페이지</h1>

    <div
      class="w-full flex flex-col justify-center items-start md:px-[5rem] lg:px-[13.2rem] xs:px-[2rem] gap-[1.9rem] mt-[4.2rem]"
    >
      <div
        class="w-full flex sm:flex-row xs:flex-col justify-between items-center sm:h-[87px] xs:h-[250px] menu-container"
      >
        <button
          v-for="(item, index) in menu_datasets"
          :key="index"
          @click="() => $router.push(item.path)"
          class="w-full sm:h-[50%] xs:h-[100%] border-[#C7C7C7] sm:border-l-[1px] sm:border-b-0"
          :class="index !== 3 && 'xs:border-b-[1px]'"
        >
          {{ item.menu }}
        </button>
      </div>

      <div class="mt-[5.28rem]">
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
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in purchase_datasets" :key="index">
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
      menu_datasets: [
        {
          menu: "결제내역",
          path: "/my/payment",
        },
        {
          menu: "장바구니",
          path: "/my/cart",
        },
        {
          menu: "배송지 관리",
          path: "/my/delivery",
        },
        {
          menu: "회원정보",
          path: "/my/modify",
        },
      ],

      purchase_datasets: [
        {
          id: 1,
          date: new Date(),
          product: "여행상품 이름",
          price: "20,270원",
        },
        {
          id: 2,
          date: new Date(),
          product: "여행상품 이름",
          price: "20,270원",
        },
        {
          id: 3,
          date: new Date(),
          product: "여행상품 이름",
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
.menu-container {
  border: 1px solid #d4d1d1;
}

table {
  border-top: 1px solid #d4d1d1;
}

th,
td {
  border-bottom: 1px solid #d4d1d1;
  height: 4.2rem;
  min-width: 7.14rem;
  padding: 8px;
}
</style>
