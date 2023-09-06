<template>
  <div class="flex flex-col justify-center items-center">
    <section class="banner flex justify-center items-center h-[24rem]">
      <p class="md:text-[3.4rem] xs:text-[2.2rem] text-[white]">
        곡성 농부와의&nbsp;
      </p>
      <h1 class="md:text-[3.4rem] xs:text-[2.2rem] text-[white] font-bold">
        직거래 장터
      </h1>
    </section>

    <div class="md:hidden xs:flex flex-col sm:px-[5rem] xs:px-[2rem]">
      <div
        class="text-[1.7rem] font-bold border-b-[1px] border-[#BEBEBE] pb-[1rem]"
      >
        메뉴
      </div>

      <input
        placeholder="검색어를 입력해 주세요."
        type="text"
        class="my-[1rem] border-[#DADADA] w-full"
      />

      <ul class="xs:flex flex-wrap justify-between items-center ml-[1.2rem]">
        <li
          v-for="(item, index) in menu_datasets"
          :key="index"
          style="list-style: disc"
          class="mt-[0.6rem] cursor-pointer xs:w-[45%]"
          :class="menu === item.menu && 'font-bold'"
          @click="
            () => {
              menu = item.menu;
              count = item.count;
            }
          "
        >
          {{ `${item.menu} (${item.count}개)` }}
        </li>
      </ul>
    </div>

    <div
      class="w-full flex justify-center items-start md:px-[5rem] lg:px-[13.2rem] xs:px-[2rem] gap-[1.9rem] mt-[4.2rem]"
    >
      <div
        class="md:flex xs:hidden md:flex-row xs:flex-col justify-center items-center gap-[3.2rem]"
      >
        <div class="flex flex-col">
          <input
            placeholder="검색어를 입력해 주세요."
            type="text"
            class="mb-[1.8rem] border-[#DADADA] lg:w-[282px] md:w-[16vw]"
          />
          <div
            class="text-[1.7rem] font-bold border-b-[1px] border-[#BEBEBE] pb-[1.3rem]"
          >
            메뉴
          </div>
          <ul class="ml-[1.2rem] mt-[1.9rem]">
            <li
              v-for="(item, index) in menu_datasets"
              :key="index"
              style="list-style: disc"
              class="mt-[0.6rem] cursor-pointer"
              :class="menu === item.menu && 'font-bold'"
              @click="
                () => {
                  menu = item.menu;
                  count = item.count;
                }
              "
            >
              {{ `${item.menu} (${item.count}개)` }}
            </li>
          </ul>
        </div>
      </div>

      <div class="w-[90%] mb-[3rem]">
        <div class="text-[1.1]rem">카테고리 > {{ `${menu} (${count}개)` }}</div>

        <div
          class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[2rem] mt-[2.85rem]"
        >
          <div
            v-for="(item, index) in product_datasets"
            :key="index"
            class="flex flex-col gap-[0.8rem] relative cursor-pointer"
            @click="$router.push('/marketplace/detail')"
          >
            <img :src="item.img" alt="program" class="" />

            <p class="text=[1.1rem]">
              {{ item.title }}
            </p>
            <b class="text-[1.7rem]">{{ item.price }}</b>
            <button
              class="bg-[#FF9797] rounded-[4px] w-[64px] h-[31px] text-[white] text-[1rem]"
              v-if="item.is_bset"
            >
              BEST
            </button>
          </div>
        </div>
      </div>
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
          menu: "전체",
          count: 223,
        },
        {
          menu: "채소",
          count: 23,
        },
        {
          menu: "과일/견과/쌀",
          count: 23,
        },
        {
          menu: "수산/해산/건어물",
          count: 23,
        },
        {
          menu: "정육/계란",
          count: 23,
        },
        {
          menu: "국/반찬/메인요리",
          count: 23,
        },
        {
          menu: "생수/음료",
          count: 23,
        },
        {
          menu: "간식/과자/떡",
          count: 23,
        },
        {
          menu: "전통주",
          count: 23,
        },
        {
          menu: "기타",
          count: 23,
        },
      ],

      product_datasets: [
        {
          title: "곡성 참외 1.5kg (4~7입)",
          price: "17,800원",
          img: "/marketplace/1.png",
          is_bset: true,
        },
        {
          title: "무농약 사과 3kg",
          price: "21,800원",
          img: "/marketplace/2.png",
          is_bset: false,
        },
        {
          title: "무농약 아이스 블루베리 1kg",
          price: "10,300원",
          img: "/marketplace/3.png",
          is_bset: false,
        },
        {
          title: "곡성 참외 1.5kg (4~7입)",
          price: "17,800원",
          img: "/marketplace/1.png",
          is_bset: true,
        },
        {
          title: "무농약 사과 3kg",
          price: "21,800원",
          img: "/marketplace/2.png",
          is_bset: false,
        },
        {
          title: "무농약 아이스 블루베리 1kg",
          price: "10,300원",
          img: "/marketplace/3.png",
          is_bset: false,
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
</style>
