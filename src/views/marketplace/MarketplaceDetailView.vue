<template>
  <div class="flex flex-col space-y-2 justify-center items-center">
    <section class="banner flex justify-center items-center h-[24rem]">
      <p class="md:text-[3.4rem] xs:text-[2.2rem] text-[white]">
        곡성 농부와의&nbsp;
      </p>
      <h1 class="md:text-[3.4rem] xs:text-[2.2rem] text-[white] font-bold">
        직거래 장터
      </h1>
    </section>

    <div
      class="flex flex-col justify-center items-center md:px-[14vw] xs:px-[2rem] xs:py-[2rem]"
    >
      <div class="flex md:flex-row xs:flex-col gap-[3.9rem] items-start">
        <div class="w-[auto] md:max-w-[50%] h-[auto]">
          <img src="/marketplace/detail_main.png" alt="detail_main" />
        </div>
        <div class="md:w-[50%] xs:w-[100%] flex flex-col">
          <p class="text-[1.1rem] text-[#A9A9A9] md:mt-[1.3rem]">
            과일/견과/쌀
          </p>
          <b class="text-[1.7rem] mt-[1.3rem]">수박향 가득 참 수박 5kg 이상</b>
          <p class="text-[1.1rem] text-[#696363] mt-[1.3rem]">
            곡성의 최대규모 수박농장에서 당도가 관리되어 재배된 프리미엄
            수박입니다.
          </p>
          <b class="text-[1.7rem] my-[2.4rem]">28,900원</b>

          <table>
            <tbody>
              <tr>
                <td>배송</td>
                <td>
                  1~3영업일 이내 (택배사의 사정에 따라 변동 가능성 있음)<br />
                  배송료 기본 2,500원<br />
                  도서산간지역 4,000원
                </td>
              </tr>
              <tr>
                <td>판매단위</td>
                <td>1박스</td>
              </tr>
              <tr>
                <td>중량/용량</td>
                <td>5kg</td>
              </tr>
              <tr>
                <td>원산지</td>
                <td>국내 전라남도 곡성</td>
              </tr>
              <tr>
                <td>안내사항</td>
                <td>
                  신선식품 특성상 원물마다 크기 및 형태가 일정하지 않을 수
                  있습니다. 상품 특성상 3%내외의 중량 차이가 있을 수 있습 니다.
                </td>
              </tr>
            </tbody>
          </table>

          <div class="flex justify-between items-center h-[112px]">
            <b>상품선택</b>
            <div class="w-[158px] flex border-[1px] border-[#D9D9D9]">
              <button class="w-[50px] h-full text-[2.3rem] font-bold">-</button>
              <input
                type="text"
                class="w-[58px] align-middle text-center text-[1.2rem] font-bold border-x-[1px] border-y-[0px] border-[#D9D9D9] p-0"
              />
              <button class="w-[50px] h-full text-[2.3rem] font-bold">+</button>
            </div>
            <b>27,900원</b>
          </div>
          <div class="flex justify-end items-center text-[1.2rem] font-bold">
            총 상품금액 :&nbsp; <span class="text-[1.7rem]">27,900</span>원
          </div>

          <button
            class="bg-primary rounded-[6px] text-[white] text-[1.7rem] font-bold w-full h-[4.9rem] mt-[1.3rem]"
          >
            장바구니 담기
          </button>
        </div>
      </div>

      <b class="text-[1.7rem] mt-[6.2rem] mb-[2.6rem]">상세정보</b>

      <img src="/marketplace/detail_1.png" alt="detail_1" />
      <img src="/marketplace/detail_desc_1.png" alt="detail_desc_1" />
      <img src="/marketplace/detail_desc_2.png" alt="detail_desc_2" />
      <img src="/marketplace/detail_2.png" alt="detail_2" />
    </div>
  </div>
</template>

<script>
import HeaderViewVue from "../../components/HeaderView.vue";
import Card from "../../components/Card/home/index.vue";
import CategoryCard from "../../components/Card/home/Category.vue";
import TravelCard from "../../components/Card/home/Travel.vue";
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
      menu: "전체",
      count: 0,

      menu_datasets: [
        {
          title: "전체",
          count: 223,
        },
        {
          title: "채소",
          count: 23,
        },
        {
          title: "과일/견과/쌀",
          count: 23,
        },
        {
          title: "수산/해산/건어물",
          count: 23,
        },
        {
          title: "정육/계란",
          count: 23,
        },
        {
          title: "국/반찬/메인요리",
          count: 23,
        },
        {
          title: "생수/음료",
          count: 23,
        },
        {
          title: "간식/과자/떡",
          count: 23,
        },
        {
          title: "전통주",
          count: 23,
        },
        {
          title: "기타",
          count: 23,
        },
      ],
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    (() => {
      console.log(this.$data, this.menu_datasets);
      this.count = this.menu_datasets[0].count;
    })();
  },
  beforeUnmount() {},
};
</script>
<style scoped>
.banner {
  background-image: url("/marketplace/banner.png");
  background-position: center;
  background-size: cover;
  object-fit: contain;
  width: 100vw;
}

.product {
  background-image: url("/product/product.png");
  background-position: center;
  background-size: cover;
  object-fit: contain;
  border-radius: 12px;
}

table {
  border-top: 1px solid #d4d1d1;
}

th,
td {
  border-bottom: 1px solid #d4d1d1;
  height: 4.2rem;
  min-width: 7.14rem;
  padding: 1.4rem 0;
  color: #777;
}

tr td:first-child {
  width: 9rem;
  font-weight: 700;
  text-align: start;
  vertical-align: baseline;
}
</style>
