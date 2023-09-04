<template>
  <div class="flex flex-col space-y-2 justify-center items-center">
    <section class="banner flex flex-col justify-center items-center h-[24rem]">
      <p class="md:text-[3.4rem] sm:text-[2.2rem] text-[white]">
        국내여행도, 해외여행도
      </p>
      <h1
        class="md:text-[3.4rem] sm:text-[2.2rem] text-[white] font-bold mt-[-15px]"
      >
        놀고 먹고 배우는 여행
      </h1>
    </section>

    <div class="flex md:px-[8.5rem] gap-[3.2rem]">
      <h1>
        상해 3일 #난징루쇼핑거리4성급호텔 #우전수향마을 1일 버스투어
        #왕복픽업포함
      </h1>

      <div class="px-[26px] px-[23px] border-1 border-solid border-[#D9D9D9]">
        ✅ 꼭 확인해주세요! - 캘린더에서 원하는 출발날짜를 클릭하고 요금 조회를
        하셔야 해요 - 예약접수 상태가 예약확정을 의미하는 것은 아니에요. 예약
        순서에 따라, 순차적으로 확정 안내를 드릴 예정이에요 - 여행자보험이
        불포함 되어있으니 안전한 여행을 위해 여행 전 여행자보험 가입을 꼭
        진행해주세요 - 1인실 사용을 원하시면 기본[성인]옵션을 인원수 만큼 선택
        후 싱글룸 옵션을 추가 선택해주세요 ■ 해당 상품은 NO팁, NO옵션, NO쇼핑
        상해 여행입니다 ■ 여행인원에 따라 가격옵션 선택해주세요(최소 4인이상) ■
        해당 호텔은 트리플 (트윈 + 엑스트라베드) 제공이 어려운 호텔입니다.
        소아인 경우 노베드조건, 성인 홀수 예약인 경우 독실 사용이 필수입니다
      </div>

      <img src="/product/detail.png" alt="detail" />
    </div>

    <div>datat</div>
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
