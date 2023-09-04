<template>
  <div class="flex flex-col space-y-2 justify-center items-center">
    <section class="banner flex flex-col justify-center items-center h-[24rem]">
      <p class="sm:text-[3.4rem] xs:text-[2.2rem] text-[white]">
        국내여행도, 해외여행도
      </p>
      <h1
        class="sm:text-[3.4rem] xs:text-[2.2rem] text-[white] font-bold sm:mt-[-15px]"
      >
        놀고 먹고 배우는 여행
      </h1>
    </section>

    <section class="w-full flex flex-col sm:px-[15.8rem] xs:px-[2rem]">
      <h3 class="text-[1.7rem] text-primary font-bold sm:mt-[2rem]">
        정원코리아 월드 시그니처 여행 패키지<br />
        국내 전라남도 곡성 심쿵 여행
      </h3>
      <div class="product w-full h-[21rem] relative mt-[2.4rem]" />
      <b class="text-[1.5rem] mt-[1.9rem]"
        >제목영역 - 여행상품 정보를 입력해 주세요. (예) 1박 2일 관광+문화체험 /
        조식포함</b
      >
      <p class="text-[1.1rem]">
        <br />
        여행상품의 상세 정보를 입력해 주세요.<br />
        곡성에 방문했을 때 반드시 가야할 명소 포함, 현지 맛집 가이드 제공
      </p>
      <b class="text-primary text-[1.5rem]"><br />30만원</b>
    </section>

    <section class="w-full sm:px-[15.8rem] xs:px-[2rem]">
      <h3 class="text-[1.7rem] font-bold mt-[4.2rem] mb-[2.5rem]">해외여행</h3>

      <div
        class="w-full grid sm:grid-cols-3 xs:grid-cols-1 gap-[1.2rem] mb-[18rem]"
      >
        <div
          v-for="(item, index) in product_datasets"
          :key="index"
          class="flex flex-col sm:gap-[2rem] xs:gap-[0.8rem] cursor-pointer"
          @click="$router.push('/product/detail')"
        >
          <img :src="item.img" alt="program" class="xs:w-full" />
          <b class="text-[1.5rem]">{{ item.title }}</b>
          <p class="text-[1.1rem]">{{ item.desc }}</p>
          <b class="text-[1.5rem] text-primary">{{ item.price }}</b>
        </div>
      </div>
    </section>
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
      product_datasets: [
        {
          title: "일본",
          desc: "여행상품의 상세 정보를 입력해 주세요.\n곡성에 방문했을 때 반드시 가야할 명소 포함, 현지 맛집 가이드 제공",
          price: "30만원",
          img: "/product/japan.png",
        },
        {
          title: "중국",
          desc: "여행상품의 상세 정보를 입력해 주세요.\n곡성에 방문했을 때 반드시 가야할 명소 포함, 현지 맛집 가이드 제공",
          price: "30만원",
          img: "/product/china.png",
        },
        {
          title: "말레이시아",
          desc: "여행상품의 상세 정보를 입력해 주세요.\n곡성에 방문했을 때 반드시 가야할 명소 포함, 현지 맛집 가이드 제공",
          price: "30만원",
          img: "/product/mal.png",
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
.banner {
  background-image: url("/product/banner.png");
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
