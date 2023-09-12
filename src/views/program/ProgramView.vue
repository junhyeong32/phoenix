<template>
  <div class="flex flex-col space-y-2 justify-center items-center">
    <section class="banner flex flex-col justify-center items-center h-[24rem]">
      <p class="sm:text-[3.4rem] xs:text-[2.2rem] text-[white]">
        곡성에서만 할 수 있는
      </p>
      <h1
        class="sm:text-[3.4rem] xs:text-[2.2rem] text-[white] font-bold sm:mt-[-15px]"
      >
        특별한 체험
      </h1>
    </section>

    <div
      class="w-full flex flex-col items-center sm:px-[5rem] lg:px-[13.2rem] xs:px-[2rem]"
    >
      <div
        class="flex md:flex-row xs:flex-col justify-center items-center gap-[3.2rem] sm:mt-[2.5rem]"
      >
        <img src="/program/introduce.png" alt="introduce" />

        <div>
          <b class="text-[1.7rem]"> 커피카펜터 김광수 관장 </b>

          <div class="text-[1.28rem] mt-[1rem]">
            곡성 목공예커피체험관에 오신 것을 환영합니다.’곡성
            목공예커피체험관은 오랜 세월이 흐르고 손때가 묻을수<br />록 그
            가치를 느낄 수 있습니다. 누구나 쉽게 배우고 내 손으로 직접
            디자인하는 DIY 목공예, 그리고 커피를 직<br />접 메뉴를 만들어보는
            자연 속 체험관입니다. 모두가 바쁘게만 살아가는 디지털 시대를 넘어
            인공지능이 자리<br />
            잡아가는 시대에 삶, 숨, 쉼이 있는 ‘느림의 미학’.. 서로 공감대 형성,
            가족 간의 협동심, 공유, 성취감과 즐거움을<br />
            동시에 느낄 수 있는 자연 속 체험관이 될 수 있도록 최선을
            다하겠습니다. 감사합니다.
          </div>
        </div>
      </div>

      <div
        class="max-w-[80%] md:w-[71rem] xs:w-[80%] border-b-2 border-[#B0B0B0] mt-[4.3rem] mb-[2rem]"
      />

      <div class="flex flex-col items-center mb-[6.8rem]">
        <b class="text-[1.4rem]">체험을 원하시는 날짜를 선택해 주세요.</b>
        <div class="mt-[20px]">
          <datepicker
            :full-month-name="true"
            input-class="bg-[#ECEBEB] border-0 "
            placeholder="YYYY-MM-DD"
            :typeable="true"
            :hideInput="false"
          />
        </div>

        <div class="flex sm:flex-row xs:flex-col gap-[2rem] mt-[3.57rem]">
          <div class="flex flex-col justify-center items-center gap-[1.6rem]">
            <div class="relative">
              <img src="/program/1.png" alt="program" class="" />
              <button
                class="bg-[white] absolute rounded-[5px] w-[112px] h-[41px] text-[1.1rem] right-[5%] bottom-[5%]"
              >
                자세히 보기
              </button>
            </div>
            <h3 class="text-[1.7rem] font-bold">목공예 체험</h3>
            <p class="text-center text=[1.1rem]">
              남녀노소 누구나 내 손으로 직접 설계하고 만들며<br />
              오감으로 즐길 수 있는 체험 활동입니다.
            </p>
            <b class="text-[1.7rem]">23만원</b>
            <button
              class="border-[1px] rounded-[6px] border-[#A0A0A0] text-[1.3rem] w-[23rem] h-[3.6rem]"
              @click="$router.push('/my/cart')"
            >
              장바구니에 담기
            </button>
            <button
              class="bg-primary rounded-[6px] text-[white] text-[1.3rem] w-[23rem] h-[3.6rem]"
              @click="$router.push('/my/cart')"
            >
              예약하기
            </button>
          </div>

          <div
            class="flex flex-col justify-center items-center gap-[1.6rem] relative"
          >
            <div class="relative">
              <img src="/program/2.png" alt="program" class="" />
              <button
                class="bg-[white] absolute rounded-[5px] w-[112px] h-[41px] text-[1.1rem] right-[5%] bottom-[5%]"
              >
                자세히 보기
              </button>
            </div>
            <h3 class="text-[1.7rem] font-bold">바리스타 체험</h3>
            <p class="text-center text=[1.1rem]">
              남녀노소 누구나 내 손으로 직접 설계하고 만들며<br />
              오감으로 즐길 수 있는 체험 활동입니다.
            </p>
            <b class="text-[1.7rem]">23만원</b>
            <button
              class="border-[1px] rounded-[6px] border-[#A0A0A0] text-[1.3rem] w-[23rem] h-[3.6rem]"
              @click="$router.push('/my/cart')"
            >
              장바구니에 담기
            </button>
            <button
              class="bg-primary rounded-[6px] text-[white] text-[1.3rem] w-[23rem] h-[3.6rem]"
              @click="$router.push('/my/cart')"
            >
              예약하기
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

import TravelCard from "../../components/Card/home/Travel.vue";
import Datepicker from "vuejs3-datepicker";
export default {
  name: "HomeView",
  components: {
    HeaderViewVue,
    Card,

    TravelCard,
    Datepicker,
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
  background-image: url("/program/banner.png");
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
