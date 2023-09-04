<template>
  <div class="flex flex-col justify-center items-center mt-[4.5rem]">
    <h1 class="text-[2.57rem] font-bold">배송지 관리</h1>

    <div
      class="w-full flex flex-col justify-center items-start md:px-[5rem] lg:px-[13.2rem] xs:px-[2rem] mt-[4.2rem]"
    >
      <div class="w-full xs:overflow-scroll">
        <table class="w-full">
          <thead>
            <tr>
              <th></th>
              <th>배송자명</th>
              <th>수령인</th>
              <th>휴전화</th>
              <th>주소</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in delivery_datasets" :key="index">
              <td align="center">
                <input
                  type="checkbox"
                  class="w-[18px] h-[18px]"
                  style="border: 1px solid black"
                />
              </td>
              <td align="center">{{ item.delivery_name }}</td>
              <td align="center">{{ item.name }}</td>
              <td align="center">{{ item.phone }}</td>
              <td align="center">{{ item.address }}</td>
              <td align="center">
                <button class="w-[64px] h-[32px] border-[1px] border-[#000]">
                  수정
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="w-full flex justify-between items-center mt-[3rem]">
        <button class="w-[100px] h-[32px] border-[1px] border-[#000]">
          선택 삭제
        </button>
        <button class="w-[127px] h-[32px] text-[white] bg-[#252525]">
          배송지 등록
        </button>
      </div>

      <div class="mt-[5rem] mb-[9.35rem] text-[1.1rem]">
        <b>배송주소록 유의사항</b>
        <p>
          배송 주소록은 최대 10개까지 등록할 수 있으며, 별도로 등록하지 않을
          경우 최근 배송 주소록 기준으로 자동 업데이트 됩니다.
        </p>
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
      delivery_datasets: [
        {
          id: 1,
          delivery_name: "우리집",
          name: "홍길동",
          phone: "010-1234-1244",
          address:
            "(06402)서울특별시 강남구 삼성동 114길 3 금호아파트 가동 1301호",
        },
        {
          id: 2,
          delivery_name: "회사",
          name: "홍길동",
          phone: "010-1234-1244",
          address:
            "(06402)서울특별시 강남구 삼성동 114길 3 금호아파트 가동 1301호",
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

th,
td {
  border-bottom: 1px solid #d4d1d1;
  /* height: 4.2rem; */
  min-width: 7.14rem;
  padding: 1rem;
}
</style>
