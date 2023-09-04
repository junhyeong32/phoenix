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

    <div
      class="w-full flex justify-center items-start md:px-[5rem] lg:px-[13.2rem] xs:px-[2rem] gap-[1.9rem] mt-[4.2rem]"
    >
      <div
        class="flex md:flex-row xs:flex-col justify-center items-center gap-[3.2rem]"
      >
        <ul>
          <li
            v-for="(item, index) in menu_datasets"
            :key="index"
            style="list-style: disc"
            class="mt-[0.6rem] cursor-pointer"
            :class="menu === item.title && 'font-bold'"
            @click="
              () => {
                menu = item.title;
                count = item.count;
              }
            "
          >
            {{ `${item.title} (${item.count}개)` }}
          </li>
        </ul>
      </div>

      <div>
        <div class="text-[1.1]rem">카테고리 > {{ `${menu} (${count}개)` }}</div>

        <div
          class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-[2rem] mt-[2.85rem]"
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
